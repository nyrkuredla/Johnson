
//declaring global variables
const header = document.querySelector("header");
const contentWrapper = document.getElementById("content-wrapper");


//Meetup app key for API call authentication (needs to be appended to the end of search queries): 66865596e70b7742473979511f6a47




//plugging query string into eventful API and returning data
    searchUrl = 'https://api.meetup.com/find/groups?zip=29401&radius=25&category=25&order=members' + '66865596e70b7742473979511f6a47'

    // https://api.meetup.com/find/groups?zip=29401&radius=1&category=25&order=members
    fetch(searchUrl).then(function (data) {
      return data.json();
    }).then(function (data) {
      console.log(data);



//below needs to go into for-loop to iterate over API data when we have it

//creating template literal variables
let dateDay;
let title;
let venue;
let time;
let location;
let genre;
let description;



function whoSmells(name){
  console.log(name +" smells.");
};

whoSmells("That guy behind ryan");


//creating template literal for results HTML

let resultsHTML = `
  <div class="results-wrapper">
    <div class="date-box">
      <p class="date-text">${dateDay}</p>
    </div>
    <div class="info-box">
      <div class="title-venue-info">
        <p class="title">${title}</p>
        <p class="venue">${venue}</p>
      </div>
      <div class="time-loc-info">
        <p class="time">${time}</p>
        <p class="location">${location}</p>
      </div>
      <div class="description-info">
        <p class="description">${genre}: ${description}</p>
      </div>
    </div>

  </div>`;

//adding template literal to HTML
contentWrapper.innerHTML += resultsHTML;


  })
