var token; // in global scope.
var data = {
  "grant_type":"client_credentials",
  "client_id": "INSERT CLIENT ID HERE",
  "client_secret": "INSERT SECRET HERE"
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
getEvents();
};

function getEvents(){
var eventRequest = new XMLHttpRequest();
eventRequest.open ("GET", "https://pratt.libcal.com/1.1/events?cal_id=10470&limit=3", true);
eventRequest.setRequestHeader('Authorization', 'Bearer' + ' ' + token.access_token);
eventRequest.responseType = 'json';
eventRequest.onload = function() {
 var response = eventRequest.response;

//first event 
if (response.events[0].featured_image != null){
document.querySelector("#event1Title").innerText= response.events[0].title;
document.querySelector("#event1Link").href= response.events[0].url.public;
document.querySelector("#event1Img").innerHTML= "<img src='" + response.events[0].featured_image + "' alt class='img-signage' >"
document.querySelector("#event1Description").innerHTML= response.events[0].description;
} else {
 document.querySelector("#news-item-1").remove(); 
}
//second event
if (response.events[1].featured_image != null){
document.querySelector("#event2Title").innerText= response.events[1].title;
document.querySelector("#event2Link").href= response.events[1].url.public;
document.querySelector("#event2Img").innerHTML= "<img src='" + response.events[1].featured_image + "' alt class='img-signage' >"
document.querySelector("#event2Description").innerHTML= response.events[1].description;
}
else{
  document.querySelector("#news-item-2").remove();
}
//third event
if (response.events[2].featured_image != null){
document.querySelector("#event3Title").innerText= response.events[2].title;
document.querySelector("#event3Link").href= response.events[2].url.public;
document.querySelector("#event3Img").innerHTML= "<img src='" + response.events[2].featured_image + "' alt class='img-signage' >"
document.querySelector("#event3Description").innerHTML= response.events[2].description;
}
else{document.querySelector("#news-item-3").remove()}
}
eventRequest.send(JSON.stringify(data));
}




