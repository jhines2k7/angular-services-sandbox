/**
 * Created by james on 7/27/15.
 */
describe('A SimpleService', function(){
    var simpleService;

    beforeEach(function(){
        module('services');
    });

    beforeEach(inject(function(SimpleService){
        simpleService = SimpleService;
    }));

    it('should compute the sum of two numbers', function(){
        expect(simpleService.add(2, 2)).toEqual(4);
    });
});