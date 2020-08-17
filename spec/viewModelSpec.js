// JavaScript source code
describe('View Model', function () {
    var v, thisNewPet,text;
    beforeEach(function () {

        pets = [];
        v = new ViewModel();
        petList = v.petList([]);

        text = v.acceptVal('Hi cat!');

        v.setName('otherMisifu');
        v.setDir('https://lh3.googleusercontent.com/proxy/RNj5QAnKaSNQ0qpK88zVCzadLazE6pA-1QyzaGn76TLreB-xqcL9HkEhmFgjXo8j7TzkXTkuV-XifgPlzy5WCLCHj1tTjC7NJ12C3dffPxGu');
        v.setLikes(123);

        addNewPet(v, v.petList());
        v.currentPet(v.petList()[0]);
    });
    describe("when in administrator mode", function () {
        beforeEach(function () {
        });
        it('Should be able to add Pet', function () {
            var initialLength = v.petList().length;
            addNewPet(v, v.petList());
            var newListLength = v.petList().length;
            expect(newListLength).toBe(initialLength + 1);
        });
        it('Should be able to edit Pet', function () {
            var initialName = v.currentPet().name();
            var finalName = v.setName('otherAgain!');
            expect(initialName).not.toBe(finalName);
        });
        it('shoould be able to remove pet', function () {
            removePet(thisNewPet, v.petList());
            expect(pets[1]).not.toBeDefined();
        });
        it('shoould be able to remove Comment', function () {
            addNewComent(text, v.currentPet().commentUser());
            removeComment(text, v.currentPet().commentUser());
            expect(v.currentPet().commentUser()[0]).not.toBeDefined();
        });
    });
    describe("when in User mode", function () {
        it('give Like only once for each pet', function () {
            v.incrementCounter();
            expect(v.currentPet().likes()).not.toBe(2);
        });
    });
    it('shoould be able to add Comment', function () {
        addNewComent(v.acceptVal(),v.currentPet().commentUser());
        expect(v.currentPet().commentUser().length).toBe(1);
    });
});