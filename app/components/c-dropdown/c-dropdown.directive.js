angular.module('c-dropdown.module')
    .directive('cDropdown', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/c-dropdown/c-dropdown.template.html',

            scope: {
                selectedOption: '=',
                options: '='
            },

            link: function ($scope, $element) {
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
                    $scope.selectedCar = car;
                    $scope.showList = false;
                };

                $scope.clearSelection = function (e) {
                    e.stopPropagation();
                    $scope.selectedCar = null;
                };
            }
        };
    });