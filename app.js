function createContact(name, phone, email) {
    return {
        name: name,
        phone: phone,
        email: email,
    }
}

const phoneBook = {
    contacts: [],

    
    add: function(name, phone, email) {
        const newContact = createContact(name, phone, email);
        this.contacts.push(newContact);
        console.log(`${name} added to the phone book.`);
    },

    search: function(name) {
        const foundContact = this.contacts.find(contact => contact.name === name);
        if (foundContact) {
            console.log('found',foundContact);
        } else {
            console.log(` ${name}Contact not found.`);
        }
    },

    
    update: function(name, newPhone, newEmail) {
        const foundContact = this.contacts.find(contact => contact.name === name);
        if (foundContact) {
            foundContact.phone = newPhone;
            foundContact.email = newEmail;
            console.log('found',foundContact);
        } else {
            console.log(`${name} Contact not found`);
        }
    },


    delete: function(name) {
        if (this.contacts[name]) {
            delete this.contacts[name];
            console.log(` ${name} deleted.`);
        } else {
            console.log(` ${name} not found.`);
        }
    }
};
phoneBook.add("Janhavi", 7823807894, "janhavi@navgurukul.com");
phoneBook.search("Janhavi");
phoneBook.update("Janhavi", 9876543210, "janhavidhok47@gmail.com");
phoneBook.delete("Janhavi");
