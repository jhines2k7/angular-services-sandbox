/**
 * Created by james on 7/27/15.
 */
angular.module('services', [])

    .service('SimpleService', function($q){
        this.add = function(addendOne, addendTwo){
            return addendOne + addendTwo;
        };

        this.getData = function(){
            var deferred = $q.defer();

            deferred.resolve([
                {
                    name: 'James Hines',
                    age: 37,
                    sex: 'M'
                },
                {
                    name: 'Casey McCarty',
                    age: 31,
                    sex: 'F'
                },
                {
                    name: 'Erika Pryor',
                    age: 38,
                    sex: 'F'
                }
            ]);

            return deferred.promise;
        };
});