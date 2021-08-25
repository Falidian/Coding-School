const person = {
    firstName: 'Jon',
    lastName: 'Walsh'
    get fullName: function() {},
    fullName() {
        return `${person.fullName} ${person.lastName}`
    },
    set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person);


// This setup does not allow you to set the name properties from the outside.
// getters are used to access the properties of an object,
// setters are used to change (mutate) them.