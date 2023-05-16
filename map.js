var map = L.map('map').setView([50.72521885575759, 2.5100971952212753], 10);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a'}).addTo(map);

var gpx0 ='gpx/calais-ardres.gpx';
new L.GPX(gpx0, {async:true}).on('loaded').addTo(map);

var gpx1 ='gpx/ardres-watten.gpx';
new L.GPX(gpx1, {async:true}).on('loaded').addTo(map);

var gpx2 ='gpx/watten-st-omer.gpx';
new L.GPX(gpx2, {async:true}).on('loaded').addTo(map);

var gpx3 ='gpx/st-omer-aire-sur-la-lys.gpx';
new L.GPX(gpx3, {async:true}).on('loaded').addTo(map);

var gpx4 ='gpx/aire-sur-la-lys-st-venant.gpx';
new L.GPX(gpx4, {async:true}).on('loaded').addTo(map);

var gpx5 ='gpx/st-venant-bethune.gpx';
new L.GPX(gpx5, {async:true}).on('loaded').addTo(map);

var gpx6 ='gpx/bethunes-olhain.gpx';
new L.GPX(gpx6, {async:true}).on('loaded').addTo(map);

var gpx7 ='gpx/olhain-angres.gpx';
new L.GPX(gpx7, {async:true}).on('loaded').addTo(map);

var gpx8 ='gpx/angres-lens.gpx';
new L.GPX(gpx8, {async:true}).on('loaded').addTo(map);

var gpx9 ='gpx/lens-don.gpx';
new L.GPX(gpx9, {async:true}).on('loaded').addTo(map);

var gpxa ='gpx/don-lille.gpx';
new L.GPX(gpxa, {async:true}).on('loaded').addTo(map);

var gpxb ='gpx/lille-wattrelos.gpx';
new L.GPX(gpxb, {async:true}).on('loaded').addTo(map);