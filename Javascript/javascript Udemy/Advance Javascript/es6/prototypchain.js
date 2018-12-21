  // primitive value : string, number, boolean, null, undefined

  //Object: myObject --> Object.prototype ---> null
  //Array: myArray --> Array.prototype --> Object.prototype -->null
  //Function: myFunc --> Function.prototype --> Object.prototype -->null
  //Function: myString --> String.prototype --> Object.prototype -->null
  //Function: myNumber --> Number.prototype --> Object.prototype -->null
  //Function: myBoolean --> Boolean.prototype --> Object.prototype -->null

  const product = 'Computer';
  console.log(product);  // It is a primitive type.It will be automatically converted to string object

  const product2 = new String('Mobile');
  console.log(product2);