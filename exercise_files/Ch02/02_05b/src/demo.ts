interface Contact {
    id: number;
    name: string;
    clone(name: String): Contact
}
//This shows how you can strongly type a function into an interface.

// With TS you can strictly set types of parameters and return values of functions.
function clone(source: Contact): Contact {
    return Object.apply({}, source);
}