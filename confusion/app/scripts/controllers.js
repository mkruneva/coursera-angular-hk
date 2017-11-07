'use strict';

angular.module('confusionApp')

    .controller('DishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {

        $scope.returnDish = function(index) {
            console.log(menuFactory.getDish(index));
            return menuFactory.getDish(index);
        };

        $scope.dish = $scope.returnDish(1);

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


    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

        $scope.tab = 1;
        $scope.dishName = '';
        $scope.filtText = '';
        $scope.sortWords = [];
        $scope.showDishDetails = false;

        $scope.dishes = menuFactory.getDishes();

        $scope.clickMe = function() {
            console.log('Click!');
        };

        // $scope.returnDish = function(index) {
        //     console.log(menuFactory.getDish(index));
        //     return menuFactory.getDish(index);
        // };

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