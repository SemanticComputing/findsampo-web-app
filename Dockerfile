FROM node:14.15.1-alpine
ARG API_URL
ARG GOOGLE_APPLICATION_CREDENTIALS
ARG SHEETS_API_SHEET_ID

# Create app directory
RUN mkdir /opt/app && chown node:node /opt/app

RUN apk add --update git && \
rm -rf /tmp/* /var/cache/apk/*

WORKDIR /opt/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY webpack*.js ./

# Babel 7 presets and plugins
COPY babel.config.js ./

# Bundle app source
COPY src ./src

# If translations are fetched from Google Sheets API, 
# the 'node' user needs to be able to write into this folder
RUN chown -R node:node ./src/client/translations

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# Run the scripts defined in package.json
RUN npm install && \ 
    API_URL=$API_URL \ 
    GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS \
    SHEETS_API_SHEET_ID=$SHEETS_API_SHEET_ID \ 
    npm run build

EXPOSE 3001

# Express server handles the backend functionality and also serves the React app
CMD ["node", "/opt/app/dist/server"]
