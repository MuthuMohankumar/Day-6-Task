// 1 Movie
// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

let movie1 = new Movie("Avengers", "Marvel", 4.5);
let movie2 = new Movie("Aavesam", "AVM", 5);
let movie3 = new Movie("Goa","AVM");
let movie4 = new Movie("Casino Royale","Eon Productions","PG13")

console.log(movie4.title, movie4.rating, movie4.studio);

let arr=[movie1, movie2, movie3];
let getPG=(arr)=>{
    return arr.filter((movie)=>movie.rating === "PG")
}

console.log(getPG(arr))

// 2 Circle
// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    set Radius(r){
        this.radius = r;
    }
    get Radius(){
        return this.radius;
    }
    set Color(c){
        this.color = c;
    }
    get Color(){
        return this.color;
    }
    get toString(){
        return `"Circle[radius="${this.radius}", color="${this.color}]"`
    }
    get Area(){
        return 3.14 * this.radius * this.radius;
    }
    get Circumference(){
        return 2 * 3.14 * this.radius;
    }
}

let circle1 = new Circle(10, "red");

console.log(circle1.Radius);

console.log(circle1.toString);

console.log(circle1.Area);

console.log(circle1.Circumference);


// 3 Write a “person” class to hold all the details.

class Person{
    constructor(name, age, gender, marital, contact, email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.marital = marital;
        this.age = age;
        this.contact = contact;
        this.email = email;
    }
}


let person1 = new Person("Rahul", 21, "Male", "Married", 9876543210, "rahul.com");

console.log(person1.name, person1.age, person1.gender, person1.marital, person1.contact, person1.email);

// 4 write a class to calculate the Uber price.

class Uber{
    constructor(totalKM, pricePerKM){
        this.totalKM = totalKM;
        this.pricePerKM = pricePerKM;
    }
    set TotalKM(km){
        this.totalKM = km;
    }
    get TotalKM(){
        return this.totalKM;
    }
    set PricePerKM(price){
        this.pricePerKM = price;
    }
    get PricePerKM(){
        return this.pricePerKM;
    }
    get CalculateFare(){
        return this.totalKM * this.pricePerKM;
    }
}

let uber1 = new Uber(10, 100);

console.log(`Uber price for the ride-1:${uber1.CalculateFare}`);
