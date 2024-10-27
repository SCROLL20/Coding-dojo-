const express = require("express");
const app = express();
const faker = require("faker"); // Ensure you're using the correct faker package
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User class definition
class User {
    constructor() {
        this._id = faker.datatype.uuid(); // Generate a unique ID for User
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// Company class definition
class Company {
    constructor() {
        this._id = faker.datatype.uuid(); // Generate a unique ID for Company
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(), // Complete street address
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

// API endpoint to get a new User
app.get("/api/users/new", (req, res) => {
    const newUser = new User(); // Create a new User instance for each request
    res.json(newUser); // Send the User object as a JSON response
});

// API endpoint to get a new Company
app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company(); // Create a new Company instance for each request
    res.json(newCompany); // Send the Company object as a JSON response
});

// API endpoint to get both a new User and a new Company
app.get("/api/user/company", (req, res) => {
    const newUser = new User(); // Create a new User instance
    const newCompany = new Company(); // Create a new Company instance
    res.json({
        user: newUser,
        company: newCompany,
    }); // Send both objects as a JSON response
});

// Start the server
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
