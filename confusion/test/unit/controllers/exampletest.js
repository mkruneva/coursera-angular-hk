describe('example test', function() {
    it('should be true', function() {
        expect('foo').toBe('foo');
    });
});


describe('App test', function() {
    beforeEach(module('confusionApp'));
    describe('always true', function() {
        it('should be true', function() {
            expect('moo').toBe('moo');
        });
    });
});