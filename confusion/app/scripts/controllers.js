'use strict';

angular.module('confusionApp')

    .controller('TestController', ['$scope', function ($scope) {
        $scope.sum = function() {
            $scope.z = $scope.x + $scope.y;
        };

    }])

    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;
        $scope.showMenu = false;
        $scope.message = 'Loading...';

        menuFactory.getDishes().query(
            function(response) {
                $scope.dishes = response;
                $scope.showMenu = true;
            },
            function(response) {
                $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
            }
        );

        $scope.select = function(setTab) {
            $scope.tab = setTab;

            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function(checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    }])

    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

        $scope.showDish = false;
        $scope.message = 'Loading...';
        $scope.dish =
            menuFactory.getDishes().get({ id: parseInt($stateParams.id, 10) })
            .$promise.then(
                function(response) {
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
                });

    }])

    .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {

        $scope.mycomment = { rating: 5, comment: "", author: "", date: "" };
        $scope.mycomment.date = new Date().toISOString();

        $scope.submitComment = function() {

            $scope.mycomment.date = new Date().toISOString();

            $scope.dish.comments.push($scope.mycomment);

            menuFactory.getDishes().update({ id: $scope.dish.id }, $scope.dish);

            $scope.commentForm.$setPristine();

            $scope.mycomment = { rating: 5, comment: "", author: "", date: "" };
        };
    }])

    .controller('ContactController', ['$scope', function($scope) {

        $scope.feedback = { mychannel: "", firstName: "", lastName: "", agree: false, email: "" };

        var channels = [{ value: "tel", label: "Tel." }, { value: "Email", label: "Email" }];

        $scope.channels = channels;
        $scope.invalidChannelSelection = false;

    }])

    .controller('FeedbackController', ['$scope', 'feedbackService', function($scope, feedbackService) {

        feedbackService.getFeedback().query(
            function(response) {
                $scope.feedbacks = response;
            },
            function(response) {
                $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
            }
        );

        $scope.sendFeedback = function() {

            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            } else {
                $scope.invalidChannelSelection = false;
                $scope.feedbacks.push($scope.feedback);
                feedbackService.getFeedback().save(function() { console.log('feedback saved'); });
                $scope.feedback = { mychannel: "", firstName: "", lastName: "", agree: false, email: "" };
                $scope.feedback.mychannel = "";
                $scope.feedbackForm.$setPristine();
            }
        };
    }])





    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {

        $scope.showDish = false;
        $scope.showPromotion = false;
        $scope.showLeader = false;
        $scope.showLeaders = false;
        $scope.message = 'Loading...';

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        var randomDish = getRandomInt(0, 4);
        var randomChef = getRandomInt(0, 4);
        // var randomDish = getRandomInt(0, menuFactory.getDishes().length); 
        // Implement this for dish and chef when taking data from server

        $scope.dish = menuFactory.getDishes().get({ id: randomDish })
            .$promise.then(
                function(response) {
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
                }
            );


        $scope.promotion = menuFactory.getPromotion().get({ id: 0 })
            .$promise.then(
                function(response) {
                    $scope.promotion = response;
                    $scope.showPromotion = true; // promotion
                },
                function(response) {
                    $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
                }
            );

        $scope.leader = corporateFactory.getLeaders().get({ id: randomChef })
            .$promise.then(
                function(response) {
                    $scope.leader = response;
                    $scope.showLeader = true; // leader
                },
                function(response) {
                    $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
                }
            );
    }])

    .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {
        $scope.leadership = corporateFactory.getLeaders().query(
            function(response) {
                $scope.leader = response;
                $scope.showLeaders = true; // leaders
            },
            function(response) {
                $scope.message = 'Error: ' + response.status + '  ' + response.statusText;
            }
        );
    }])

;