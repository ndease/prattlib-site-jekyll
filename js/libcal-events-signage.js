var token; // in global scope.
var data = {
  "grant_type":"client_credentials",
  "client_id": "INSERT HERE",
  "client_secret": "INSERT HERE"
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
document.querySelector(".carousel-inner").innerHTML += "<div class='carousel-item news-slide'><h2 class='h1 text-center'>Library News</h2><div><div class='sign-column'><a href='" + response.events[0].url.public + "'><img src='" + response.events[0].featured_image + "' alt class='img-signage'><h3 class='h3'>" + response.events[0].title + "</h3></a></div><div class='sign-column post-excerpt'><span class='eventDesc'>"+response.events[0].description+"</span></div></div>";
} 
//second event
if (response.events[1].featured_image != null){
document.querySelector(".carousel-inner").innerHTML += "<div class='carousel-item news-slide'><h2 class='h1 text-center'>Library News</h2><div><div class='sign-column'><a href='" + response.events[1].url.public + "'><img src='" + response.events[1].featured_image + "' alt class='img-signage'><h3 class='h3'>" + response.events[1].title + "</h3></a></div><div class='sign-column post-excerpt'><span class='eventDesc'>"+response.events[1].description+"</span></div></div>";
}

//third event
if (response.events[2].featured_image != null){
document.querySelector(".carousel-inner").innerHTML += "<div class='carousel-item news-slide'><h2 class='h1 text-center'>Library News</h2><div><div class='sign-column'><a href='" + response.events[2].url.public + "'><img src='" + response.events[2].featured_image + "' alt class='img-signage'><h3 class='h3'>" + response.events[2].title + "</h3></a></div><div class='sign-column post-excerpt'><span class='eventDesc'>"+response.events[2].description+"</span></div></div>";
}

}
eventRequest.send(JSON.stringify(data));
}

$('.carousel').carousel();