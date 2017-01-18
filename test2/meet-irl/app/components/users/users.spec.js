/*describe('UsersController', function() {
  var $controller, UsersController;

  // Load ui.router and our components.users module which we'll create next
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.users'));

  // Inject the $controller service to create instances of the controller (UsersController) we want to test
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
    UsersController = $controller('UsersController', {});
  }));

  // Verify our controller exists
  it('should be defined', function() {
    expect(UsersController).toBeDefined();
  });
});
*/
describe('UsersController', function() {
  var $controller, UsersController, UsersFactory;

  // Mock the list of users we expect to use in our controller
  var userList = [
    { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
    { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
    { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
    { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
  ];

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.users'));
  // Add the module for our Users service
  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_$controller_, _Users_) {
    $controller = _$controller_;
    UsersFactory = _Users_;

    // Spy and force the return value when UsersFactory.all() is called
    spyOn(UsersFactory, 'all').and.callFake(function() {
      return userList;
    });

    // Add the factory as a controller dependency
    UsersController = $controller('UsersController', { Users: UsersFactory });
  }));

  it('should be defined', function() {
    expect(UsersController).toBeDefined();
  });

  // Add a new test for our expected controller behavior
  it('should initialize with a call to Users.all()', function() {
    expect(UsersFactory.all).toHaveBeenCalled();
    expect(UsersController.users).toEqual(userList);
  });
});
