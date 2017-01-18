describe('components.missingno', function() {
  var $controller, MissingnoController;

  // Load ui.router and our components.missingno module which we'll create next
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.missingno'));

  // Inject the $controller service to create instances of the controller (UsersController) we want to test
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
    MissingnoController = $controller('MissingnoController', {});
  }));

  // Verify our controller exists
  it('should be defined', function() {
    expect(MissingnoController).toBeDefined();
  });
});
