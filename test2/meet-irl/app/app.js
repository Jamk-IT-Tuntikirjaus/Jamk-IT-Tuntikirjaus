/*(function() {
  'use strict';

  angular.module('meetIrl', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
*/
/*(function() {
  'use strict';

  angular.module('meetIrl', [
    'ui.router',
    'api.users',
    'components.users',
    'components.missingno' // add missingno component
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  });
})();*/
(function() {
  'use strict';

  angular.module('meetIrl', [
    'ui.router',
    'api.users',
    'components.users',
    'components.missingno' // add missingno component
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  });
})();
