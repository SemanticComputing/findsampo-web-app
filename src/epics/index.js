import 'rxjs';
import _ from 'lodash';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import {
  updateSuggestions,
  updateResults,
  FETCH_SUGGESTIONS,
  FETCH_SUGGESTIONS_FAILED,
  FETCH_RESULTS,
  FETCH_RESULTS_FAILED,
} from '../actions';

const getSuggestionsEpic = (action$, store) => {
  const searchUrl = 'http://localhost:3000/suggest';
  return action$.ofType(FETCH_SUGGESTIONS)
    .debounceTime(500)
    .switchMap(() => {
      const { query, datasets } = store.getState().search;
      if (query.length < 3) {
        return [];
      }
      const dsParams = _.map(datasets, ds => `dataset=${ds}`).join('&');
      const requestUrl = `${searchUrl}?q=${query}&${dsParams}`;
      return ajax.getJSON(requestUrl)
        .map(response => updateSuggestions({ suggestions: response }))
        .catch(error => Observable.of({
          type: FETCH_SUGGESTIONS_FAILED,
          error: error,
        }));
    });
};

const getResultsEpic = (action$, store) => {
  const searchUrl = 'http://localhost:3000/search';
  return action$.ofType(FETCH_RESULTS)
    .switchMap(() => {
      const { query, datasets } = store.getState().search;
      if (query.length < 3) {
        return [];
      }
      const dsParams = _.map(datasets, ds => `dataset=${ds}`).join('&');
      const requestUrl = `${searchUrl}?q=${query}&${dsParams}`;
      return ajax.getJSON(requestUrl)
        .map(response => updateResults({ results: response }))
        .catch(error => Observable.of({
          type: FETCH_RESULTS_FAILED,
          error: error,
        }));
    });
};

const rootEpic = combineEpics(getSuggestionsEpic, getResultsEpic);

export default rootEpic;