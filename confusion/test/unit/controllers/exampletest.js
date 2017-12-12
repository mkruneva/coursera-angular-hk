describe('TestController Test', function() {
    beforeEach(module('confusionApp'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('sum', function() {
        it('1 + 1 should equal 2', function() {
            var $scope = {};
            var controller = $controller('TestController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        });

        it('z should default to undefined', function() {
            var $scope = {};
            var controller = $controller('TestController', { $scope: $scope });
            expect(typeof($scope.z)).toBe('undefined');
            expect($scope.z).toBe(undefined);
        });
    });
});

describe('MenuController Test', function() {
    beforeEach(module('confusionApp'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('initial values', function() {
        it('initial values should be set', function() {
            var $scope = {};
            var controller = $controller('MenuController', { $scope: $scope });
            expect($scope.tab).toEqual(1);
            expect($scope.showDetails).toBe(false);
            expect($scope.message).toBeDefined();
        });
    });


    
});



// describe('MenuController Test', function() {
//     beforeEach(module('confusionApp'));
//     var MenuController, scope, $httpBackend;

//     beforeEach(inject(function($controller, _$httpBackend_, $rootScope, menuFactory) {
//      $httpBackend = _$httpBackend_;
//      $httpBackend.expectGET("http://localhost:3000/dishes").respond([{
//                 "id": 0,
//                 "name": "Uthapizza",
//                 "image": "images/uthapizza.png",
//                 "category": "mains",
//                 "label": "Hot",
//                 "price": "4.99",
//                 "description": "A",
//                 "comments": [{}]
//             },
//             {
//                 "id": 1,
//                 "name": "Zucchipakoda",
//                 "image": "images/zucchipakoda.png",
//                 "category": "mains",
//                 "label": "New",
//                 "price": "4.99",
//                 "description": "A",
//                 "comments": [{}]
//             }
//         ]);

//         scope = $rootScope.$new();
//         MenuController = $controller('MenuController', {
//             $scope: scope,
//             menuFactory: menuFactory
//         });

//         console.log(scope.showMenu);

//     }));

//     it('should have showDetails as false', function() {
//         expect(scope.showDetails).toBeFalsy();
//     });
//     // some issues fetching data from xhr - check angular mocks setup
//     // it('should create "dishes" with 2 dishes fetched from xhr', function() {
//     //     expect(scope.showMenu).toBeTruthy();
//     //     expect(scope.dishes).toBeDefined();
//     //     expect(scope.dishes.length).toBe(2);
//     // });
//     // it('should have the correct data order in the dishes', function() {
//     //     expect(scope.dishes[0].name).toBe("Uthapizza");
//     //     expect(scope.dishes[1].label).toBe("New");
//     // });
//     // it('should change the tab selected based on tab clicked', function() {
//     //     expect(scope.tab).toEqual(1);
//     //     scope.select(3);
//     //     expect(scope.tab).toEqual(3);
//     //     expect(scope.filtText).toEqual('mains');
//     // });
//     // test end


// });