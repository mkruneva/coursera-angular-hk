'use strict';

angular.module('confusionApp')

    .controller('DishDetailController', ['$scope', '$rootScope', 'menuFactory', function($scope, $rootScope, menuFactory) {

        var dish = menuFactory.getDish($rootScope.dishId);
        $scope.dish = dish;

        console.log($rootScope.dishId);

    }])

    .controller('DishCommentController', [function() {

        // DishCommentController 

    }])

    .controller('ContactController', [function() {

        // DishCommentController 

    }])

     .controller('AboutController', [function() {

        // DishCommentController 

    }])


    .controller('MenuController', ['$scope', '$rootScope', 'menuFactory', function($scope, $rootScope, menuFactory) {

        $scope.tab = 1;
        $scope.dishName = '';
        $scope.filtText = '';
        $scope.sortWords = [];
        $scope.showDishDetails = false;

        $scope.dishes = menuFactory.getDishes();

        $scope.returnDish = function(index) {
            $rootScope.dishId = menuFactory.getDish(index)._id;
        };



        $scope.toggleDetails = function() {
            $scope.showDishDetails = !$scope.showDishDetails;
        };

        $scope.select = function(setTab) {
            this.tab = setTab;
            switch (setTab) {
                case 2:
                    this.filtText = 'appetizer';
                    break;
                case 3:
                    this.filtText = 'mains';
                    break;
                case 4:
                    this.filtText = 'dessert';
                    break;
                default:
                    this.filtText = '';
            }
        };

        $scope.isSelected = function(checkTab) {
            return (this.tab === checkTab);
        };
    }]);