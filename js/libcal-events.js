var token; // in global scope.
var data = {
  "grant_type":"client_credentials",
  "client_id": "INSERT ID HERE",
  "client_secret": "INSERT ID HERE"
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
document.querySelector("#news-item-1").innerHTML = "<a class='post-link' href='" + response.events[0].url.public + "'><img src='" + response.events[0].featured_image + "' alt class='center-cropped'><h3 class='h4'>" + response.events[0].title + "</h3></a>";
} else {
 document.querySelector("#news-item-1").remove(); 
}
//second event
if (response.events[1].featured_image != null){
document.querySelector("#news-item-2").innerHTML = "<a class='post-link' href='" + response.events[1].url.public + "'><img src='" + response.events[1].featured_image + "' alt class='center-cropped'><h3 class='h4'>" + response.events[1].title + "</h3></a>";
}
else{
  document.querySelector("#news-item-2").remove();
}
//third event
if (response.events[2].featured_image != null){
document.querySelector("#news-item-3").innerHTML = "<a class='post-link' href='" + response.events[2].url.public + "'><img src='" + response.events[2].featured_image + "' alt class='center-cropped'><h3 class='h4'>" + response.events[2].title + "</h3></a>";
}
else
  {document.querySelector("#news-item-3").remove()}
}
eventRequest.send(JSON.stringify(data));
}




