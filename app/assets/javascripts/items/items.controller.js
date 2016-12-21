(function() {
    'use strict'

    angular
        .module('votingApp')
        .controller('ItemsController', ['ItemFactory', function(ItemFactory) {
            var vm = this
            vm.title = "Welcome to your items"

            ItemFactory.getItems()
                       .then(setItems)

            function setItems(data) {
                vm.items = data
                console.log(vm.items)
            }
        }])
}())
