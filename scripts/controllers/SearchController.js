routerApp.controller('SearchController', ["$scope", "$http",  "shareDataService", "$stateParams", function($scope, $http, shareDataService, $stateParams) {
    $scope.test = "winning again";


    $scope.findMovie = function(movieSearch){
      console.log(movieSearch);
      // var movieData ={};
      var movieName = movieSearch.title;
      shareDataService.httpGetRequest(movieName)
        .then(function(data){
          console.log(data);
          $scope.movieData = data;
          shareDataService.moveMovies($scope.movieData);
      });
    };
    console.log(shareDataService);
}]);
