(function() {
    'use strict'

    angular
        .module('votingApp')
        .factory('ItemFactory', ['$http', function($http) {
            return {
                getItems: getItems,
                getItem: getItem
            }

            function getItems() {
                return $http.get('/items')
                            .then(handleResponse)
                            .catch(handleError)
            }

            function getItem() {

            }

            function handleResponse(response) {
                if (response.status === 200) return response.data
                // else statement that pushes error message to a notificationService
            }

            function handleError(error) {
                console.log("There was an erron this http request: ", error)
            }
        }])
}())
