//Monk's Cafe Reservations

$(function(){
console.log("javascript works!")

$('form').on('submit',function(e){
  
console.log('event handler works!')

  e.preventDefault();

console.log('no reload')

var userInput = {
  name: $('#name').val(),
  day: $('#day').val()
};

console.log('Input working')

console.log(userInput);

var source = $("#newReservation").html();

var newListItemHTML = template(userInput);

console.log(newListItemHTML);

$('.reservation').append(newListItemHTML);

  });

///Google Map Marker
 
function initMap() {
  // The location of Monks
  var monks = {lat: 40.8054491, lng: -73.9654415};
  // The map, centered at Monks

  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4, 
        center: monks
      });
  // The marker, positioned at Monks
  var marker = new google.maps.Marker({
    position: monks, 
    map: map,
    title: "Monk's"
  });
}

  initMap();
})
