type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

// Now this is an alias for number, can be used for nested properties too like address.street, etc.
type Awesome = Contact["id"]

interface ContactEvent {
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

//This function accepts a key of ContactEvents and a handler function that will be called when the event occurs
// Summary:
// The handleEvent function is a generic utility for handling strongly-typed events defined in the ContactEvents interface.
// It takes an event name (which must be a key of ContactEvents) and a handler function that receives the corresponding event object type.
// When called with "statusChanged" as the event name, it invokes the handler with a sample ContactStatusChangedEvent object.
// This ensures type safety for event handling and allows TypeScript to infer the correct event object type for each event name.
function handleEvent <T extends keyof ContactEvents>(
    eventName: T,
    //Sets event as ContactStatusChangeEvent in the function call below since the that is the type of the statusChanged property
    handler: (evt: ContactEvents[T]) => void
) {
    if(eventName === "statusChanged") {
        handler({contactId: 1, oldStatus: "active", newStatus: "inactive"})
    }
}

handleEvent("statusChanged", evt => evt)
