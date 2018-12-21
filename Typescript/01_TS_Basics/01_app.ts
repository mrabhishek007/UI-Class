// Hello World App
let greeting: string = "Good Morning";
console.log(greeting);

// Variables Creation in TypeScript
function greetMe(name: string, age: number, designation?: string) : string {
    return ` Hello ${name}! You are ${age} years old.. ` ;
}
console.log(greetMe( 'John', 22 ));
