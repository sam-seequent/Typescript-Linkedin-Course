interface Contact <T> {
    id: number;
    name: string;
    //You can also define a generic type for properties. (must be defined in <> when you create the object)
    externalId?: T;
}

// This defines a generic function that can clone any object type.
function clone<T>(source: T): T {
    return Object.apply({}, source);
}

const a: Contact<string> = { id: 123, name: "Homer Simpson" };
const b = clone(a)

const c = "4";
const d = clone(c);

//Multiple types can be used with the generic function.
function cloneMultiple<T, U>(source1: T): U {
    return Object.apply({}, source1);
}

//However the types must be specified when calling the function.
const e = cloneMultiple<Contact<string>, string>(a);