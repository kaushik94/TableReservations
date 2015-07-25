angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Tables, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

            $scope.locations = Tables.all();
            var tables = Tables.getTables();
            var bookings = Chats.all();
            tableBookings = {};
            
            
            for(var i = 0; i < tables.length; i++){
                tableBookings[parseInt(tables[i])] = 0;
            }
            for(var i = 0; i < bookings.length; i++){
                var _id = parseInt(bookings[i].tableId);
                tableBookings[_id] += 1;
            }
            
            $scope.tableBookings = tableBookings;

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  
            $scope.bookings = Chats.get($stateParams.tableId);
            $scope.tableId = $stateParams.tableId;

})