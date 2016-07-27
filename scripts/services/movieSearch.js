routerApp.factory('shareDataService', ["$http",  function($http) {


  var shareDataService = {};
  var moviesFound = [];

  shareDataService.moveMovies = function(newObj) {
    moviesFound.push(newObj);
    console.log(moviesFound);
  };

  shareDataService.getMovies = function() {
    return moviesFound;
  };

  shareDataService.httpGetRequest = function(movieSearch) {
    return $http.get('http://www.omdbapi.com/?s='+ movieSearch);
  };

  return shareDataService;

  // var moveMovies = function() {
  //     moviesFound.push(newObj);
  // };
  // var getMovies = function(){
  //     return moviesFound;
  // };
  // return {
  //   moveMovies: function() {
  //       moviesFound.push(newObj);
  //   },
  //   getMovies: function(){
  //       return moviesFound;
  //   }
  // };

}]);
