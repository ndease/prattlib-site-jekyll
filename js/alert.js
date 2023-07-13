//this basic script grabs an alert message from libguides.pratt.edu/website-dashboard. This requires admin access to update.
window.addEventListener('load', (event) => {
  var alertLength = document.querySelector("div.lib-site-alert p").textContent.length;

    if (alertLength > 10){
    document.querySelector("#s-lg-widget-1639149482290").style.width="auto";
    document.querySelector("#s-lg-widget-1639149482290").style.display="inline-block";
    document.querySelector(".lib-site-alert").style.display = "block";
    }
    else{
      document.querySelector(".lib-site-alert").style.display = "none";
    }
});
