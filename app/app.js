var app = angular.module('MyApp', [
    'c-dropdown.module'
]);

app.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    $http.get('test.html')
        .success(function (data) {
            $scope.cars = data.cars;
            $scope.selectedCar = $scope.cars[0].n;
        });
}]);

