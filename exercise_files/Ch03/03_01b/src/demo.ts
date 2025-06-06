type ContactName = string;

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

//Allows you to use a union type for birthDate
//This can be a Date object, a string, or a number
type ContactBirthDate = Date | string | number;
// Instead of using an enum, you can use a union type for the status
type enumAlternative = "active" | "inactive" | "new";

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

//Combines Contact and Address interfaces, instead of having to use the extend keyword
type AddressableContact = Contact & Address;

//Now accepts all the union types for birthDate
function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson"
}
