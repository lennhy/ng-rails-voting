(function() {
    'use strict'

    angular
        .module('votingApp')
        .controller('ItemsController', ['ItemFactory', function(ItemFactory) {
            var vm = this
            vm.title = "Please vote on your favorite items"
            vm.upvote = upvote

            ItemFactory.getItems()
                       .then(setItems)

            function setItems(data) {
                vm.items = data
            }

            function upvote(id) {
                return ItemFactory.vote(id)
                                  .then(handleResponse)

                function handleResponse(data) {
                    if (data.errors) {
                        for (var i = 0; i < vm.items.length; i++) {
                            if (vm.items[i].id === id) {
                                vm.items[i].errors = data.errors
                            } else {
                                vm.items[i].errors = null
                            }
                        }
                        return
                    }
                    for (var i = 0; i < vm.items.length; i++) {
                        if (vm.items[i].id === data.id) {
                            vm.items[i] = data
                            console.log('items have changed', vm.items)
                        }
                    }

                }
            }
        }])
}())
