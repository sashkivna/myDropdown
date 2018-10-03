var app = angular.module('MyApp', [
    'c-dropdown.module'
]);

app.controller('MyController', ['$scope', '$http', function ($scope) {
    $scope.cars = [
        {"v": "m", "n": "Drama", "c": false},
        {"v": "v", "n": "Regency_Enterprises", "c": true},
        {"v": "b", "n": "Fox_2000_Pictures", "c": true},
        {"v": "l", "n": "Taurus_Film", "c": true},
        {"v": "f", "n": "Knickerbocker_Films", "c": false},
        {"v": "f", "n": "20th_Century_Fox", "c": false},
        {"v": "f", "n": "The_Linson_Company", "c": false},
        {"v": "f", "n": "Germany", "c": false},
        {"v": "f", "n": "United_States_of_America", "c": false}
    ];

    //$scope.selectedCar = $scope.cars[0].n;
}]);

