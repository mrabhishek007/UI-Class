// Create a Student Interface , and printStudent function

interface person {
    name: string;
    getDesignation(): string;
    propertyName? : any; //optional
}

const man1: person = {
    name: 'vicky',
    getDesignation :function () {
        return 'Programmer';
    }
} ;

const printPerson = function (man: person) {
    console.log(man.name);
    console.log(man.getDesignation());
};

printPerson(man1);