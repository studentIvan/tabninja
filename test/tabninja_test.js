var expect = chai.expect;

describe('TabNinja test case', function () {
    describe('#tabninja', function () {
        it('duel.tabNinja.ninjaName should be equal 1', function () {
            expect(duel.tabNinja.ninjaName).to.equal(1);
        });

        it('duel.tabNinja.localStorageAvailable should be equal true', function () {
            expect(duel.tabNinja.localStorageAvailable).to.equal(true);
        });

        it('sessionStorage[tabninja:here] should be equal yes', function () {
            expect(sessionStorage.getItem('tabninja:here')).to.equal('yes');
        });

        it('duel.tabNinja.isSuperMaster() should be equal true', function () {
            expect(duel.tabNinja.isSuperMaster()).to.equal(true);
        });

        it('after duel.tabNinja.killCurrentNinja() tabninja:stack should be blank', function () {
            duel.tabNinja.killCurrentNinja();
            expect(localStorage.getItem('tabninja:stack')).to.equal('');
        });
    });
});