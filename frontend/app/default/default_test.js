'use strict';

describe('Controller: default', function () {

  beforeEach(module('section.default'));

  var Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ctrl = $controller('defaultCtrl as default', {$scope: scope});
  }));

  it('should know its name.', function(){
    expect(scope.default.name).toBe('default');
  });
});
