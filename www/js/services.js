angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    tableId: 2,
    time: '10:30PM',
    name: 'Ben Sparrow',
    tags: ['ion-man', 'ion-clock'],
    size: 2,
    status: 'Starters',
    notes: 'Avoid spicy food'
  }, {
    id: 1,
    tableId: 3,
    name: 'Max Lynx',
    time: '11:00PM',
    tags: ['ion-ios-videocam', 'ion-beer'],
    size: 3,
    status: 'Cheque',
    notes: 'Want a hot chick in the front'
  }, {
    id: 2,
    tableId: 2,
    name: 'Adam Bradleyson',
    time: '5:30PM',
    tags: ['ion-coffee'],
    size: 2,
    status: '',
    notes: 'next to kitchen'
  }, {
    id: 3,
    name: 'Perry Governor',
    time: '2:00AM',
    tableId: 2,
    tags: [],
    size: 40,
    status: '',
    notes: 'birthday party'
  }, {
    id: 4,
    name: 'Mike Harrington',
    time: '12:54PM',
    tableId: 1,
    tags: ['ion-fork'],
    size: 4,
    status: 'Main Course',
    notes: 'Extra sugar in everything'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(tableId) {
      var bookings = [];
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].tableId === parseInt(tableId)) {
          bookings.push(chats[i]);
        }
      }
      return bookings;
    }
  };
})

.factory('Tables', function($http) {
         // Might use a resource here that returns a JSON array
         
         // Some fake testing data 
         var locations = ['Ground', 'Terrace', 'Garden'];
         var allTables = [
         {
                       location: 'Ground',
                       tables: [{
                                    id: 1
                                },
                                {
                                    id: 2
                                },
                                {
                                    id: 3
                                },
                                {
                                    id: 4
                                },
                                {
                                    id: 5
                                }
                                ]
         },
        {
                       location: 'Terrace',
                       tables: [{
                                    id: 6
                                },
                                {
                                    id: 7
                                },
                                {
                                    id: 8
                                },
                                {
                                    id: 9
                                },
                                {
                                    id: 10
                                }
                                ]
        },
        {
                       location: 'Garden',
                       tables: [{
                                    id: 11
                                },
                                {
                                    id: 12
                                },
                                {
                                    id: 13
                                },
                                {
                                    id: 14
                                },
                                {
                                    id: 15
                                }
                                ]
        }
         ]
    return {
         all: function() {
         return allTables;
    },
    
    get: function(tableId) {
         for (var i = 0; i < allTables.length; i++) {
            for (var j = 0; j < allTables[i].tables.length; j++){
                if (allTables[i][j].id === parseInt(tableId)) {
                    return allTables[i];
                }
            }
         }
         return null;
    },
         
    getLocations: function(){
         return locations;
    },
         getTables: function(){
            var _tables = [];
            for (var i = 0; i < allTables.length; i++) {
                for (var j = 0; j < allTables[i].tables.length; j++){
                    _tables.push(allTables[i].tables[j].id);
                }
            }
            return _tables;
         }
         
};
});
