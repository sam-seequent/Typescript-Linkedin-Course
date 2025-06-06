interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContactStatus;
}

// This defines an enum that can be used more strictly than a string or number. It does not have to be a number, it can be a string as well.
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new",
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    status: ContactStatus.Active
}

type ContactName = string