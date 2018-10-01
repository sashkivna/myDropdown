var app = angular.module('MyApp', [
    'c-dropdown.module'
]);

app.controller('MyController', ['$scope', '$http', function ($scope) {
    $scope.cars = [
        {"v": "m", "n": "Drama", "c": false},
        {"v": "v", "n": "Regency Enterprises", "c": true},
        {"v": "b", "n": "Fox 2000 Pictures", "c": true},
        {"v": "l", "n": "Taurus Film", "c": true},
        {"v": "f", "n": "Knickerbocker Films", "c": false},
        {"v": "f", "n": "20th Century Fox", "c": false},
        {"v": "f", "n": "The Linson Company", "c": false},
        {"v": "f", "n": "Germany", "c": false},
        {"v": "f", "n": "United States of America", "c": false}
    ];

    $scope.selectedCar = $scope.cars[0].n;
}]);

