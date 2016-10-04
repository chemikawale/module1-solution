(function(){
  'use strict';

 angular.module('LunchCheck',[])


 .controller('LunchCheckController', function($scope){
$scope.lunch = "";
$scope.verdict = "";
$scope.checkLunch = function(){
  if ($scope.lunch != null && $scope.lunch != "") {
    var lunchFinalVerdict = evaluateLunch($scope.lunch); // get the number of items supplied and evaluate the verdict accordingly
    $scope.verdict = lunchFinalVerdict;
} else {

          $scope.verdict = "Please enter data first";
      }
};


function evaluateLunch (string){
  var lunchVerdict = "";
  var lunchItems = string.split(",");
  var numOfItems = lunchItems.length;

  if(numOfItems > 3){
    lunchVerdict = "Too Much!"
  }else
  {
    lunchVerdict = "Enjoy."
  }

 return lunchVerdict;

 }
});

})();
