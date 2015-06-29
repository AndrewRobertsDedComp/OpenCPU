/**
 * Created by andrew on 6/16/15.
 */

app.controller('HomeController', ['$scope', '$http', function($scope, $http) {

    $scope.rFile;
    $scope.dataFile;

    $scope.onRUpload = function(element) {
        $scope.rFile = element.files[0];
    }

    $scope.onDataUpload = function(element) {
        $scope.dataFile = element.files[0];
    }

    $scope.submit = function() {
        var transform = function(data) {
            var fd = new FormData();
            angular.forEach(data, function(value, key) {
               fd.append(key, value);
            });
            return fd;
        }

        var fd = new FormData();
        fd.append('authKey', 'DEDCOMP1234');
        fd.append('rFile', $scope.rFile);
        fd.append('dataFile', $scope.dataFile);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/upload');
        xhr.send(fd);
    }

}]);