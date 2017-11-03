//Services using factory 

'use strict';

angular.module('confusionApp')
    .service('menuFactory', function() {

        var dishes = [{
                _id: 0,
                name: 'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                type: 'vegetarian',
                label: 'Hot',
                price: '4.99',
                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comments: [{
                        rating: 5,
                        comment: 'Wonderful pizza',
                        author: 'me myself and I',
                        date: '2017-05-01'
                    },
                    {
                        rating: 2,
                        comment: 'Awful pizza',
                        author: 'you yourself and You',
                        date: '2017-07-01'
                    },
                    {
                        rating: 3,
                        comment: 'Alright pizza',
                        author: 'Brumm',
                        date: '2017-03-01'
                    },
                    {
                        rating: 1,
                        comment: 'No way',
                        author: 'Slon',
                        date: '2017-03-20'
                    },
                    {
                        rating: 4,
                        comment: 'Not bad at all',
                        author: 'Him',
                        date: '2017-09-20'
                    }
                ]
            },
            {
                _id: 1,
                name: 'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                type: 'vegan',
                label: '',
                price: '1.99',
                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comments: [{
                        rating: 5,
                        comment: 'Wonderful dish',
                        author: 'Simon',
                        date: '2017-05-01'
                    },
                    {
                        rating: 2,
                        comment: 'Awful meal',
                        author: 'John',
                        date: '2017-07-01'
                    },
                    {
                        rating: 3,
                        comment: 'Alright',
                        author: 'Brumm',
                        date: '2017-03-01'
                    },
                    {
                        rating: 1,
                        comment: 'No way',
                        author: 'Slon',
                        date: '2017-03-20'
                    },
                    {
                        rating: 4,
                        comment: 'Not bad at all',
                        author: 'Him',
                        date: '2017-09-20'
                    }
                ]
            },
            {
                _id: 2,
                name: 'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                type: 'vegetarian',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comments: [{
                        rating: 5,
                        comment: 'Wonderful appetizer',
                        author: 'me myself and I',
                        date: '2017-05-01'
                    },
                    {
                        rating: 2,
                        comment: 'Awful appetizer',
                        author: 'you yourself and You',
                        date: '2017-07-01'
                    },
                    {
                        rating: 3,
                        comment: 'Alright appetizer',
                        author: 'Brumm',
                        date: '2017-03-01'
                    },
                    {
                        rating: 1,
                        comment: 'No way',
                        author: 'Slon',
                        date: '2017-03-20'
                    },
                    {
                        rating: 4,
                        comment: 'Not bad at all',
                        author: 'Him',
                        date: '2017-09-20'
                    }
                ]
            },
            {
                _id: 3,
                name: 'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                type: 'vegetarian',
                label: '',
                price: '2.99',
                description: 'A delectable, semi-sweet New York Style  Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comments: [{
                        rating: 5,
                        comment: 'Wonderful cake',
                        author: 'me myself and I',
                        date: '2017-05-01'
                    },
                    {
                        rating: 2,
                        comment: 'Awful cake',
                        author: 'you yourself and You',
                        date: '2017-07-01'
                    },
                    {
                        rating: 3,
                        comment: 'Alright cake',
                        author: 'Brumm',
                        date: '2017-03-01'
                    },
                    {
                        rating: 1,
                        comment: 'No way',
                        author: 'Slon',
                        date: '2017-03-20'
                    },
                    {
                        rating: 4,
                        comment: 'Not bad at all',
                        author: 'Him',
                        date: '2017-09-20'
                    }
                ]
            }
        ];

        this.getDishes = function() {
            return dishes;
        };

        this.getDish = function(index) {
            return dishes[index];
        };
    });