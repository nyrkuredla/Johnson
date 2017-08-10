// API key: mQ4ZzCsN26NvGKVS



let dateDay;
let title;
let venue;
let time;
let location;
let description;



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
        <p class="description">${description}</p>
      </div>
    </div>
  </div>`
