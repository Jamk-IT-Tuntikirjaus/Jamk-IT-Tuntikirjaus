(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.missingno', [])
  .controller('MissingnoController', function() {
    var vm = this;
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'components/missingno/missingno.html',
        controller: 'MissingnoController as mn'
      });
  });
})();
