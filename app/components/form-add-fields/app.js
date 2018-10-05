var app = angular.module('MyApp1', []);

app.controller('MyController', function ($scope) {
    $scope.fields = [];

    $scope.add = function () {
        var field = {};
        $scope.fields.push(field);
    };

    $scope.remove = function (index) {
        $scope.fields.splice(index, 1);
    };

    $scope.submitForm = function (isValid) {
        if (isValid) {
            alert('our form is amazing');
        }
    };
});