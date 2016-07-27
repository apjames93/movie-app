routerApp.controller('SearchController', ["$scope", "$http",  "shareDataService", "$stateParams", function($scope, $http, $stateParams, shareDataService) {
    $scope.test = "winning again";


    $scope.findMovie = function(movieSearch){
      var movieData ={};
      return $http.get('http://www.omdbapi.com/?s='+ movieSearch).then(function(data){
       $scope.movieData = data;
        // console.log($scope.movieData.data.Search[0].Title, data);
        // console.log(data);
        console.log(shareDataService);


      });
    };




}]);
