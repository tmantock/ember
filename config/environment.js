/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-quickstart',
    environment,
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com"
    },
    firebase: {
      apiKey: "AIzaSyBjOgn32MJDGPE4o8e2RL3zBjDOSSWytKI",
      authDomain: "ember-tasks-1f3d6.firebaseapp.com",
      databaseURL: "https://ember-tasks-1f3d6.firebaseio.com",
      // storageBucket: "bucket.appspot.com"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      sessionTimeout: 1200000
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.sessionTimeout = 180000000000;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.sessionTimeout = null;
  }

  if (environment === 'production') {

  }

  return ENV;
};
