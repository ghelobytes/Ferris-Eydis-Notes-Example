'use strict';

/**
 * Modules and dependencies for the app
 */
angular
  .module('NotesApp', [
    /* Include sections here. The sections will include their own dependencies */
    'section.default',

    /* Internal depedencies */
    'NotesApp.app_controller',
    'NotesApp.precompiled-templates',

    /* Eydis library dependencies */
    'eydis.gapi',
    'eydis.list',

    /* External dependencies */
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  /* Default route configuration */
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    /* Here we'll just route to the default subsection. Subsections do their own routing. */
    $routeProvider
      .when('/', {
        redirectTo: '/default'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  /* Google API configuration */
  .config(function($gapiProvider){
    $gapiProvider.client_id = '782588887718-mtdv6fmrddisaob393m3igg0k4plgph3.apps.googleusercontent.com';

    if(window.location.hostname === 'localhost'){
      $gapiProvider.api_base = 'http://localhost:8080/_ah/api';
    } else {
      $gapiProvider.api_base = 'https://api-dot-beaming-pillar-740.appspot.com/_ah/api';
    }
  });
