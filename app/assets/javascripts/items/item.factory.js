(function() {
    'use strict'

    angular
        .module('votingApp')
        .factory('ItemFactory', ['$http', function($http) {
            return {
                getItems: getItems,
                vote: vote
            }

            function getItems() {
                return $http.get('/items')
                            .then(handleResponse)
                            .catch(handleError)
            }

            function vote(itemId) {
                var req = {
                    method: 'POST',
                    url: '/items/' + itemId + '/vote',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                return $http(req)
                         .then(handleResponse)
                         .catch(handleError)
            }

            function handleResponse(response) {
                console.log(response.data)
                if (response.status === 200) return response.data
                // else statement that pushes error message to a notificationService
            }

            function handleError(error) {
                console.log("There was an erron this http request: ", error)
            }
        }])
}())
