/**
 * Created by james on 7/27/15.
 */
describe('SimpleController', function(){
   var scope, q;

    beforeEach(function(){
        module('services', 'controllers');

        module(function($provide){
            $provide.service('SimpleService', function(){
                this.getData = function(){
                    var deferred = q.defer();

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
                        }
                    ]);

                    return deferred.promise;
                }
            })
        });
    });

    beforeEach(inject(function($rootScope, $controller, $q, SimpleService){

        q = $q;

        scope = $rootScope.$new();

        $controller('SimpleController', {
            $scope: scope,
            SimpleService: SimpleService
        });
    }));

    it('should assign data from the service to an object on the scope', function(){
        scope.$digest();

        expect(scope.data).toEqual([
            {
                name: 'James Hines',
                age: 37,
                sex: 'M'
            },
            {
                name: 'Casey McCarty',
                age: 31,
                sex: 'F'
            }
        ]);
    });
});