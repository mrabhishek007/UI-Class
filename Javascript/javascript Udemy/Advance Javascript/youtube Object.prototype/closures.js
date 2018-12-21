/*
// Any-thing which is not defined inside the function are generally treated as global object i.e. it will be treated as property of global object and can be directly called

     var var1 = "I am var1";  //global variable i.e. var1 is added in window property
    {
        var var2 = "I am inside scope but still accessible from outside"; //similar to above
    }
    console.log(var2);  //var is accessible even outside.To avoid this problem use let or const or just use simple function where variable is not accessible outside

*/

/*
/*      // IIFE ( Immediately Invoked Function Expression )

    (function (a,b) {
        sum = a+b;
        console.log(sum);
    })(10,20);                //Immediately Invoking Anonymous function after declaring

*/
/*

      // The global Scope //

    var a =10; //global variable

    function funCreate() {
        var b = a;  //funCreate scope
        console.log(b);
        var c = 30; //funCreate scope
        d = 40;  // It will create global variable when defined without var keyword in a function (bcz when function is not called as constructor function this will point to window object);
    }
    funCreate();
    console.log(d); //global variable

     /!* In javascript code is compiled first, after the code is interpreted.During compiling compiler will just declare the
        variables first based on their scopes after that during interpretation values will be assigned on declared variables   *!/

    var p = 10;
    function outer() {
        var q = p;
        console.log(q);
        function inner() {
            var c =b;
            console.log(c);  // undefined
            var b =20;  //b wll be declared as 'inner' function scope during compilation.So bcz of that above statement is undefined
        }
        inner();
    }
    outer();


*/

/*
            //   Hoisting  //

    funHoisting(); //valid bcz at compilation 'funHoisting' is declared as a function
    function funHoisting() {
        console.log(a); // not an error (result--> undefined)
        var a; //at compilation a is declared
    }

    // works with function declaration not with expression bcz expression is interpreted at runtime not on compile-time
    //funHoisting2();  //error bcz at compilation 'funHoisting' is declared as variable,hence no assignment has been done.so the type is unknown
    var funHoisting2 = function () {
        console.log("I am a function expression not declaration")
    }


        // strict-mode //

    function strictFun() {
        "use strict"
         // s1 = 20;  //error when strict mode is used.userObj must have to declare a variable before using it
        var s2;
        s2 = "I am running in strict-mode...."
        console.log(s2);
    }
    strictFun();

*/

    // Closures //

    var a = 10;
    function outer() {
        var b = 20;
        var inner = function () {
            a++;
            b++;
            console.log(a);
            console.log(b);
        }
        return inner;
    }
    var innerFn = outer();
    innerFn(); //valid

    var innerFn2 = outer();
    innerFn2();

    //Using closures to hide the information. All property in javascript are public and are accessible from anywhere.So closures can be used to provide a better way to access the data using scope concept

    function person() {
        var firstName = "Vikash";
        var lastName = "Kr Gaurav";
        var PersonInfo = {
            getFirstName: function () {
                return firstName;
            },
            getLastName: function () {
                return lastName;
            },
            getFullName: function () {
                return firstName+" "+lastName;
            },
            setFirstName: function (f_name) {
                firstName = f_name;
            },
            setLastName: function (l_name) {
                lastName = l_name;
            }
        }
        return PersonInfo;
    }

    var person_obj = person();
    console.log( person_obj.getFirstName());
    console.log( person_obj.getFullName());
    person_obj.setFirstName('Alok');
    person_obj.setLastName('Narayan verma');
    console.log( person_obj.getFullName());

    //Closure in asynchronous callback


    for(var z=0;z<10;z++){
        (function () {
            var now = z; //saving current progress of z in a variable bcz z has only 1 copy of itself.(Reason - After 1000ms z will become 10 and same value will be printed every time setTimeout() is called)
            setTimeout(()=>{     // It is a asynchronous call so asynchronous task might be delayed
                console.log(now);
            }, 1000);
        })();
    }



