interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
}

//This is a type alias for a string, which can be used to represent a contact's name.
type ContactName = string;