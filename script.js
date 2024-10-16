//your JS code here. If required.
// Create an object called student with a property name
const student = {
  name: "John"
};

// Add a method to the Object prototype that returns all the keys of the object
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage:
console.log(student.getKeys()); // Output: ["name"]

