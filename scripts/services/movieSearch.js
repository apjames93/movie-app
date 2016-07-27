// routerApp.factory('shareDataService', ["$http",  function($http) {
//
//   var moviesFound = ['hey'];
//
//   var moveMovies = function() {
//       moviesFound.push(newObj);
//   };
//   var getMovies = function(){
//       return moviesFound;
//   };
//   return {
//     moveMovies: moveMovies,
//     getMovies: getMovies
//   };
//
//
// }]);

routerApp.factory('shareDataService', function() {
    return {
        talk: function(what) {
            return "Say " + what;
        }
    }
});
