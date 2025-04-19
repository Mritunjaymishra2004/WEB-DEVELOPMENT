// Qs.1. You are creating a website for your college. Create a class User with 2 properties, name &
//  email. It also has a method called viewData( ) that allows user to view website data.

// Qs.2. Create a new class called Admin which inherits from User. Add a new method called
//  editData to Admin that allows it to edit website data.

let DATA = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

// Q 2
class Admin extends User{
    constructor(name, email) {
        super(name, email);
    } 
    editData(){
        DATA = "some new value";
    }
}
// Q 2

let student1 = new User("Mritujay","mrit123@gmail.com");
let student2 = new User("Sagar","sagar234@gmail.com");

let teacher1 = new User("Dean","dean@college.edu.com");

// Q 2
let admin12 = new Admin("Admin","admin@college.edu.com");