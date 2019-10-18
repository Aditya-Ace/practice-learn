const Pet = function (name, species) {
    this.name = name;
    this.species = species;
};

Pet.prototype.view = function () {
    return `${this.name} is a ${this.species}.`;
};


const pet = new Pet("poly", "dog");
alert(pet.view());

//Constructor function is a blueprint and we can use blueprint to create multiple instances
//Constructor function can contain properties and methods but we do not need to define
//it in the function as it will transfer the values to all the instances
//So to assign the value in a case we just need it, We use prototype
//this always refers to or point to the new object is going to create 