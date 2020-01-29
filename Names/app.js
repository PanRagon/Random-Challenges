//Create short arrow function to get the first name from a full name

const getFirstName  = (fullName) => fullName.split(" ")[0];


//Create short arrow function to get all middle names from a full name, defined as names that are not the first nor last name
const getMiddles = (arr) => {
    arr.shift();
    arr.pop();
    return arr.join(" ");
}

const getMiddleNames = (fullName) => {
    const names = fullName.split(" ");
    return names.length >= 3 ? getMiddles(names) : "Middle name not found";
}

//Create short arrow function to get the last name from a full name
const getLastName = (fullName) => fullName.split(" ").pop();

const fullName = "Susan Joe Michelle Josephine Smith";

console.log(getFirstName(fullName))

console.log(getMiddleNames(fullName))

console.log(getLastName(fullName));
