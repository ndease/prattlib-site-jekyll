var token; // in global scope.
var data = {
  "grant_type":"client_credentials",
  "client_id": "INSERT CLIENT ID HERE",
  "client_secret": "INSERT CLIENT SECRET HERE"
}; //note that this secret is for a read only app!

// construct an HTTP request
var getToken= new XMLHttpRequest();
getToken.open("POST", "https://pratt.libcal.com/1.1/oauth/token", true);
getToken.setRequestHeader('Content-Type', 'application/json');
// send the collected data as JSON
getToken.send(JSON.stringify(data));
getToken.onload = function () {
    // parse the data
token = JSON.parse(this.responseText);
console.log(token);
getEvents();
};

function getEvents(){
var eventRequest = new XMLHttpRequest();
eventRequest.open ("GET", "https://pratt.libcal.com/1.1/events?cal_id=10470&limit=3", true);
eventRequest.setRequestHeader('Authorization', 'Bearer' + ' ' + token.access_token);
eventRequest.responseType = 'json';
eventRequest.onload = function() {
 var response = eventRequest.response;
 console.log(response);
 console.log(response.events[0].url.public);
//first event 
document.querySelector("#event1Title").innerText= response.events[0].title;
document.querySelector("#event1Link").href= response.events[0].url.public;
document.querySelector("#event1Img").src= response.events[0].featured_image;
document.querySelector("#event1Description").innerHTML= response.events[0].description;
//second event
document.querySelector("#event2Title").innerText= response.events[1].title;
document.querySelector("#event2Link").href= response.events[1].url.public;
document.querySelector("#event2Img").src= response.events[1].featured_image;
document.querySelector("#event2Description").innerHTML= response.events[1].description;
//third event
document.querySelector("#event3Title").innerText= response.events[2].title;
document.querySelector("#event3Link").href= response.events[2].url.public;
document.querySelector("#event3Img").src= response.events[2].featured_image;
document.querySelector("#event3Description").innerHTML= response.events[2].description;
}
eventRequest.send(JSON.stringify(data));
}
