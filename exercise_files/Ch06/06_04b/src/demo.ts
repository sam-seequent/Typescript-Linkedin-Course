interface Customer {
    /* Saves the customer somewhere */
    save(): void;
}

// Puts the save function from the Customer interface
// into the Customer class
class Customer {

}

const customer = new Customer();
customer.save = function() {}

const myVar = window.MY_VAR