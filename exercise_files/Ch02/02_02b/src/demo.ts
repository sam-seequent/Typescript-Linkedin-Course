// Interfaces can be used to define the structure of objects in TypeScript and as a type in your code.
interface Contact extends Address{
    id: number;
    // The ? operator makes the property optional
    name?: string;
    birthDate: Date;
}
//Note: The extends keyword allows you to inherit properties from another interface (The Address interface below!).

interface Address {
    line1: string;
    line2?: string; // Optional property
    province: string;
    postalCode: string;
    region?: string; // Optional property
}

// Leaving this empty will throw an error because the properties are required
let primaryContact: Contact = {
    // Not mandatory, but can be included
    birthDate: new Date("1990-01-01"),
    //These are mandatory
    id: 1,
    name: "John Doe",
    postalCode: "12345",
    province: "Ontario",    
    line1: "123 Main St",
    // Optional properties can be omitted
};