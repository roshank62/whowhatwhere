export default function ($scope, $rootScope, $state) {
    'ngInject';

    $scope.query = null;
    $scope.location = null;

    function onPositionUpdate(position) {
        var lati = position.coords.latitude;
        var longi = position.coords.longitude;

        $scope.location = '' + lati + ', ' + longi;

        if($scope.query){
            if($scope.query.toString().trim().length > 0){
                sendData(true);
            }
        }
    }
    function onErrorLocation(error){
        if(window.alert){
            alert('Unable to get location data, Please enter valid location');
        }
    }

    $scope.search = function () {
        sendData(false);
    };

    function sendData(isCoordinates){
        $rootScope.data = {
            query: $scope.query,
            location: $scope.location,
            isCoordinates: isCoordinates
        };

        $state.go('results');
    }
}