interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}
//NOTE: Decorators are an experimental feature in TypeScript and may require enabling the `experimentalDecorators` compiler option, 
// they could be added in a future version of JavaScript, so I am just watching this chapter for now.
@log
class ContactRepository {
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        const contact = this.contacts.find(x => x.id === id);
        return contact;
    }

    @authorize("ContactViewer")
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);
        console.debug(`ContactRepository.save: END`);
    }
}