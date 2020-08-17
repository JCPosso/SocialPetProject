function iniciarMap(){
    var coord = { lat: 4.6448523, lng: -74.0840577 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}