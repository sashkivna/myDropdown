angular.module('c-dropdown.module')
    .directive('cDropdown', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/c-dropdown/c-dropdown.template.html',

            scope: {
                ngModel: '=',
                options: '='
            },

            require: ['ngModel'],

            link: function ($scope, $element, attr, ngModelController) {
                ngModelController.$render = function () {
                    $scope.selectedCar = ngModelController.$modelValue;

                    //ngModelController.$setViewValue(ngModelController.$modelValue);
                };

                $scope.toggleDropDown = function () {
                    $scope.showList = !$scope.showList;
                };

                document.addEventListener('click', function (e) {
                    if (!$.contains($element[0], e.target)) {
                        $scope.showList = false;
                        $scope.$apply();
                    }
                }, false);

                $scope.selectItem = function (car) {
                    debugger;
                    $scope.selectedCar = car;
                    $scope.showList = false;
                    ngModelController.$setViewValue($scope.selectedCar);
                };

                $scope.clearSelection = function (e) {
                    e.stopPropagation();
                    $scope.selectedCar = null;
                    $scope.ngModel = $scope.selectedCar;
                };
            }
        };
    });
