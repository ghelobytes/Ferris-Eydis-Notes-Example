/*
 * This is the top-level controller for the application.
 * Things that are used by all controllers or coordinating logic
 * Should be added here.
 */
'use strict';

angular.module('NotesApp.app_controller', ['eydis.gapi.signin', 'eydis.gapi'])
.controller('AppController', function($scope, $gapi){
  /* jshint unused: false */
  $scope.ready = $gapi.ready;
});
