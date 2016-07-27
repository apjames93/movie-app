routerApp.factory('shareDataService', ["$http",  function($http) {

  var moviesFound = [];

  var moveMovies = function() {
      moviesFound.push(newObj);
  };
  var getMovies = function(){
      return moviesFound;
  };
  return {
    moveMovies: moveMovies,
    getMovies: getMovies
  };


}]);
