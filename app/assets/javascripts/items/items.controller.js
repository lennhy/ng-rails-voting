(function() {
    'use strict'

    angular
        .module('votingApp')
        .controller('ItemsController', ['ItemFactory', function(ItemFactory) {
            var vm = this
            vm.title = "Please vote on your favorite items"

            ItemFactory.getItems()
                       .then(setItems)

            function setItems(data) {
                vm.items = data
                console.log(vm.items)
            }
        }])
}())
