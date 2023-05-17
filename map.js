function initMap() {
  // Create the map instance
  var map = L.map('map').setView([50.72521885575759, 2.5100971952212753], 10);

  // Add the tile layer (e.g., OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(map);

  // Define the default GPX track style
  var normalStyle = { color: 'blue', opacity: 0.7, weight: 4 };

  // Add GPX tracks to the map 
  var gpx0 = new L.GPX('gpx/calais-ardres.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx1 = new L.GPX('gpx/ardres-watten.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx2 = new L.GPX('gpx/watten-st-omer.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx3 = new L.GPX('gpx/st-omer-aire-sur-la-lys.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx4 = new L.GPX('gpx/aire-sur-la-lys-st-venant.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx5 = new L.GPX('gpx/st-venant-bethune.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx6 = new L.GPX('gpx/bethunes-olhain.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx7 = new L.GPX('gpx/olhain-angres.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx8 = new L.GPX('gpx/angres-lens.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpx9 = new L.GPX('gpx/lens-don.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpxa = new L.GPX('gpx/don-lille.gpx', { polyline_options: normalStyle }).addTo(map);
  var gpxb = new L.GPX('gpx/lille-wattrelos.gpx', { polyline_options: normalStyle }).addTo(map);

  // Define the hover style
  var hoverStyle = { color: 'red', opacity: 1 };

  // Add event listeners to each GPX track

  //C'est pas opti pour un sou mais ca marche donc heh
 







  gpx0.on('mouseover', function(e) {
    changecolor(gpx0);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Calais-Ardres')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx0.on('mouseout', function() {
    map.closePopup();
    changecolor(gpx0);
  });


  async function changecolor(name) {
    if (name.Style == hoverStyle) {
      name.setStyle(normalStyle);
    } else {
      name.setStyle(hoverStyle);
    }
  }


  gpx1.on('mouseover', function(e) {
    gpx1.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Ardres-Watten')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx1.on('mouseout', function() {
    gpx1.setStyle(normalStyle);
    map.closePopup();
  });

  gpx2.on('mouseover', function(e) {
    gpx2.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Watten-St-Omer')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx2.on('mouseout', function() {
    gpx2.setStyle(normalStyle);
    map.closePopup();
  });

  gpx3.on('mouseover', function(e) {
    gpx3.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('St-Omer-Aire-sur-la-Lys')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx3.on('mouseout', function() {
    gpx3.setStyle(normalStyle);
    map.closePopup();
  });
  
  gpx4.on('mouseover', function(e) {
    gpx4.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Aire-sur-la-Lys-St-Venant')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx4.on('mouseout', function() {
    gpx4.setStyle(normalStyle);
    map.closePopup();
  });

  gpx5.on('mouseover', function(e) {
    gpx5.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('St-Venant-Bethune')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx5.on('mouseout', function() {
    gpx5.setStyle(normalStyle);
    map.closePopup();
  });
  
  gpx6.on('mouseover', function(e) {
    gpx6.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Bethunes-Olhain')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx6.on('mouseout', function() {
    gpx6.setStyle(normalStyle);
    map.closePopup();
  });

  gpx7.on('mouseover', function(e) {
    gpx7.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Olhain-Angres')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx7.on('mouseout', function() {
    gpx7.setStyle(normalStyle);
    map.closePopup();
  });

  gpx8.on('mouseover', function(e) {
    gpx8.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Angres-Lens')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx8.on('mouseout', function() {
    gpx8.setStyle(normalStyle);
    map.closePopup();
  });

  gpx9.on('mouseover', function(e) {
    gpx9.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Lens-Don')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpx9.on('mouseout', function() {
    gpx9.setStyle(normalStyle);
    map.closePopup();
  });

  gpxa.on('mouseover', function(e) {
    gpxa.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Don-Lille')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpxa.on('mouseout', function() {
    gpxa.setStyle(normalStyle);
    map.closePopup();
  });

  gpxb.on('mouseover', function(e) {
    gpxb.setStyle(hoverStyle);
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('Lille-Wattrelos')
    .openOn(map);
    var topOffset = -popup.getElement().offsetHeight - 10;
  });
  gpxb.on('mouseout', function() {
    gpxb.setStyle(normalStyle);
    map.closePopup();
  });
}

// Call the initMap function to initialize the map
initMap();
