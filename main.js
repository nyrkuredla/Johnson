// API key: mQ4ZzCsN26NvGKVS


//declaring global variables
const header = document.querySelector(header);
const contentWrapper = document.getElementById("content-wrapper");

//below needs to go into for-loop to iterate over API data when we have it

//creating template literal variables
let dateDay;
let title;
let venue;
let time;
let location;
let genre;
let description;


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
  </div>`

//adding template literal to HTML
contentWrapper.innerHTML += resultsHTML;
