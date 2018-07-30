
// console.log("Testing My Sanity")

// Get a Person object from the SWAPI: https://swapi.co/api/people/4
// Fill in "person4Name" with the value of Person's name
// Fill in "person4Homeworld" with the value of Person's "homeworld" (name)
let person4NameRequest = new XMLHttpRequest();

person4NameRequest.addEventListener("load", function (res) {
    console.log("response", res)
    console.log("response object", JSON.parse(res.currentTarget.response));
    console.log("response name", JSON.parse(res.currentTarget.response).name);
    let personFour = document.getElementById("person4Name");
    personFour.innerHTML = (JSON.parse(res.currentTarget.response).name);
    // console.log("Person Four: ", (req.currentTarget.reponse).name)

    // console.log("response homeworld", JSON.parse(res.currentTarget.response).homeworld)
    // let homeworldFour = document.getElementById("person4HomeWorld");
    // homeworldFour.innerHTML = (JSON.parse(res.currentTarget.response).homeworld);
});

person4NameRequest.open("GET", "https://swapi.co/api/people/4");
person4NameRequest.send();

let person4HomeworldRequest = new XMLHttpRequest();

person4HomeworldRequest.addEventListener("load", function (res) {
    console.log("response 4", res);
    console.log("response 4 object", JSON.parse(res.currentTarget.response));
    console.log("response 4 homeworld", JSON.parse(res.currentTarget.response).name);
    let homeworldFour = document.getElementById("person4HomeWorld");
    homeworldFour.innerHTML = (JSON.parse(res.currentTarget.response).name);
});
person4HomeworldRequest.open("GET", "https://swapi.co/api/planets/1");
person4HomeworldRequest.send();

// Get a Person object from the SWAPI: https://swapi.co/api/people/14
// Fill in "person14Name" with the value of Person's "name"
// Fill in "person14Species" with teh value of Person's (first) "species" (name)

let person14NameRequest = new XMLHttpRequest();
person14NameRequest.addEventListener("load", function (res) {
    console.log("response 14", res);
    console.log("response 14 object", JSON.parse(res.currentTarget.response));
    console.log("response 14 name", JSON.parse(res.currentTarget.response).name);
    let personFourteen = document.getElementById("person14Name");
    personFourteen.innerHTML = (JSON.parse(res.currentTarget.response).name);
})
person14NameRequest.open("GET", "https://swapi.co/api/people/14");
person14NameRequest.send();

let homeworld14Request = new XMLHttpRequest();


// Geta  list of all the films from the SWAPI: https://swapi.co/api/films
// Fill in "filmList" with a new "li" element for each "film"
// Fill in each film's "filmTitle" with the title of the "film"
// Create a new "li" in this film's "filmPlanets" for each "planet" that appaared in this "film"
// Fill in each "planetTitle" with the name of the "planet"