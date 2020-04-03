navigator.geolocation.getCurrentPosition(function(position) {
    //document.body.append('Location');
    var heading_loc = document.createElement('h2');
    heading_loc.appendChild(document.createTextNode('Location'));
    heading_loc.setAttribute('class', 'xl');
    document.body.appendChild(heading_loc);

    var h5 = document.createElement('h5');
    var h5_2 = document.createElement('h5');
    alert(position.coords.latitude, position.coords.longitude);
    h5.appendChild(document.createTextNode('Current position, latitude: ' + position.coords.latitude));
    h5_2.append(document.createTextNode('Current position, longitude: '+ position.coords.longitude));
    document.body.appendChild(h5);
    document.body.appendChild(h5_2);

//not working navigator.getUserMedia({audio: true}, function(ehh){alert(ehh);}, function(ehh){alert(ehh);})

document.body.append('User Agent: ' + window.navigator.userAgent.substring(0,7));
var heading = document.createElement('h2');
heading.appendChild(document.createTextNode('Network'));
heading.setAttribute('class', 'xl');
document.body.appendChild(heading);
var h4 = document.createElement('h4');
var h4_ = document.createElement('h4');
h4.appendChild(document.createTextNode('Network type: ' + navigator.connection.effectiveType));
h4_.appendChild(document.createTextNode('Network downlink: ' + navigator.connection.downlink));
document.body.appendChild(h4);
document.body.appendChild(h4_);

if(navigator.userAgent.includes('Mozilla'))alert(navigator.userAgent);

}, function(e){alert(e.error, e.message, e.code);}, {enableHighAccuracy: true, timeout: 100, maximumAge: 10000});
