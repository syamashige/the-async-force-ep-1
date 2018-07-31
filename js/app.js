
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
// Fill in "person14Species" with the value of Person's (first) "species" (name)

let person14NameRequest = new XMLHttpRequest();
person14NameRequest.addEventListener("load", function (res) {
    console.log("response 14", res);
    console.log("response 14 object", JSON.parse(res.currentTarget.response));
    console.log("response 14 name", JSON.parse(res.currentTarget.response).name);
    let personFourteen = document.getElementById("person14Name");
    personFourteen.innerHTML = (JSON.parse(res.currentTarget.response).name);
});

person14NameRequest.open("GET", "https://swapi.co/api/people/14");
person14NameRequest.send();

let species14Request = new XMLHttpRequest();
species14Request.addEventListener("load", function (res) {
    console.log("response 14", res);
    console.log("response 14 object", JSON.parse(res.currentTarget.response));
    console.log("response 14 homeworld", JSON.parse(res.currentTarget.response).name);
    let speciesFourteen = document.getElementById("person14Species");
    speciesFourteen.innerHTML = (JSON.parse(res.currentTarget.response).name)
});

species14Request.open("GET", "https://swapi.co/api/species/1");
species14Request.send();

// Geta  list of all the films from the SWAPI: https://swapi.co/api/films
// Fill in "filmList" with a new "li" element for each "film"
// Fill in each film's "filmTitle" with the title of the "film"
// Create a new "li" in this film's "filmPlanets" for each "planet" that appaared in this "film"
// Fill in each "planetTitle" with the name of the "planet"

let filmRequest = new XMLHttpRequest();
filmRequest.addEventListener("load", function (res) {

    let filmListRequest = JSON.parse(res.currentTarget.response).results;
    console.log("Film List Request", filmListRequest)

    for (let i = 0; i < filmListRequest.length; i++) {       
        console.log("Is it for looping?")
        let filmTitle = document.createElement("li");
        filmTitle.className = "filmTitle";
        filmTitle.innerHTML = "Episode: " + filmListRequest[i].episode_id + " " + filmListRequest[i].title;
        document.getElementById("filmList").appendChild(filmTitle);

        let planetRequest = new XMLHttpRequest(); 
        planetRequest.addEventListener("load", function (res) {
        
            let filmPlanetRequest = JSON.parse(res.currentTarget.response).results[i].planets;
            for (let j = 0; j < filmPlanetRequest.length; j++) {
                console.log("I'm looping!")
                // console.log("Results: ", JSON.parse(res.currentTarget.response).results[i]);
                console.log("Film Planets", filmPlanetRequest);
                console.log("Film Planet J: ", filmPlanetRequest[j])

                let getPlanetNames = new XMLHttpRequest();
                getPlanetNames.addEventListener("load", function (res) {
                    let filmPlanets = document.createElement("h6");
                    filmPlanets.className = "planetName";
                    filmPlanets.innerHTML = "Planet: " + JSON.parse(res.currentTarget.response).name;
                    filmTitle.appendChild(filmPlanets);
    
                })             
                getPlanetNames.open("GET", filmPlanetRequest[j])
                getPlanetNames.send();  
            }
        })

        planetRequest.open("GET", "https://swapi.co/api/films");
        planetRequest.send();
    }
}); 

filmRequest.open("GET", "https://swapi.co/api/films");
filmRequest.send()