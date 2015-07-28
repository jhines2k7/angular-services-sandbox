/**
 * Created by james on 7/27/15.
 */
angular.module('controllers',['services'])

    .controller('SimpleController', function($scope, SimpleService){
        $scope.data = [];

        SimpleService.getData().then(function(data){
           $scope.data = data;
        });
    });