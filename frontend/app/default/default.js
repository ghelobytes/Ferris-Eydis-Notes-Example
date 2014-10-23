'use strict';

/* Top-level module */
angular.module('section.default', [
  'ngRoute',
  /* Add additional dependencies here */
  'eydis.list'
]).

/* Configure routes */
config(function($routeProvider){
  $routeProvider
    .when('/default', {
      templateUrl: 'default/default.html',
      controller: 'defaultCtrl',
      controllerAs: 'default',
      resolve: {
        notesList: function(eydisList) {
          return eydisList({
              library: 'ferris',
              version: 'v1',
              resource: 'notes',
              api_root: true}).ready;
        }
      }
    });
})

/* Controller */
.controller('defaultCtrl', function(notesList){
  this.notes = notesList;
  this.notes.list();

  this.add_new_note = function(note){
    this.notes.insert(note, {position: 'start'}).then(function(){
      note.content = '';
    });
  };
});
