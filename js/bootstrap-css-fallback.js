//this script provides a fallback in case the bootstrap content delivery network (CDN) servers go down
$(function() {
  if ($('#bootstrapCssTest').is(":visible")) {
    $("head").prepend('<link rel="stylesheet" href="https://library.pratt.edu/css/bootstrap.min.css">');
  }
});
