
export class User{
    constructor(name, age, profession, gender, role, avatar){
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.gender = gender;
        this.role = role;
        this.avatar = avatar;
    }

    sayHello(){
        return `Hello, I am ${this.name}`;
    }

    sayAge() {
        return `${this.name} is ${this.age} years old`;
    }

    sayProfession(){
        return `${this.name} is a ${this.profession}`;
    }
}

export class Director extends User {
    constructor(name, age, profession, gender, role, avatar) {
        super(name, age, profession, gender, role, avatar);
    }


  sayHello(){
    return `Hello, I am ${this.name}, and I am a Director.`
  }
}

export class Assistant extends User {
    constructor(name, age, profession, gender, role, avatar) {
        super(name, age, profession, gender, role, avatar);  
    }


    sayHello(){
       return `Hello, I am ${this.name}, an Assistant here.`
    }

}

export class Designer extends User {
    constructor(name, age, profession, gender, role, avatar) {
        super(name, age, profession, gender, role, avatar);  
    }


    sayHello(){
       return `Hello, I am ${this.name}, and I am Designer here.`
    }
}

export class Employee extends User {
    constructor(name, age, profession, gender, role, avatar) {
        super(name, age, profession, gender, role, avatar);  
    }


    sayHello(){
        return `Hello, I am ${this.name}, I am an Employee.`
    }
}