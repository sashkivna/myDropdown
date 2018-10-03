var app = angular.module('MyApp', []);

app.controller('MyController', function ($scope) {
    $scope.fields = [];

    $scope.Add = function () {
        var field = {};
        $scope.fields.push(field);
        //console.log($scope.fields);
    };

    $scope.Remove = function (index) {
        $scope.fields.splice(index, 1);
    };

    $scope.submitForm = function (isValid) {
        if (isValid) {
            alert('our form is amazing');
        }
    };
});