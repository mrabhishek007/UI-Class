// Create a Student Interface , and printStudent function
var man1 = {
    name: 'vicky',
    getDesignation: function () {
        return 'Programmer';
    }
};
var printPerson = function (man) {
    console.log(man.name);
    console.log(man.getDesignation());
};
printPerson(man1);
