type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact;

//You will only be able to use the fields defined in the Contact interface as strings
const field: ContactFields = "birthDate";

// This function will return the value of the property specified by propertyName, generically as well!!
function getValue<T>(source: T, propertyName: keyof T){
    return source[propertyName];
}

// Will throw an error if you try to use a property that is not defined in the Contact interface, but if the keyof keyword was not used in the function, it would not throw an error
const v = getValue(primaryContact, "name");
