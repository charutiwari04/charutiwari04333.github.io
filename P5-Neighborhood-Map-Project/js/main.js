/* Neighborhood Map project is about displaying museum locations on google map. Initially I have kept nine locations in the list.
   It is be increased to any number. "model" containes listValues array having name of museums in San Francisco CA.*/
"use strict";
var model = {
	listValues :  ["Alcatraz Island"
	              ,"San Francisco Museum of Modern Art"
				  ,"California Academy of Sciences"
				  ,"Asian Art Museum"
				  ,"Legion of Honor"
				  ,"Exploratorium"
				  ,"de Young Museum"
				  ,"The Lab"
				  ,"SS Jeremiah O'Brien"]
};
/*AppViewModel is knockout object which contains observable elements and also contains methods to manipulate data*/
var AppViewModel={
	mapObj:{},
	marker:{},
	infoWindow:{},
	markerData: ko.observableArray(),
	Values : ko.observableArray(model.listValues),
	searchValue : ko.observable(''),
/*check function is filter function which filters the values from the serach input element on HTML, when user enters something for search.*/
	check : function(value){
		var tempArray=[];
		for(var i in model.listValues){
			if(model.listValues[i].toLowerCase().indexOf(value.toLowerCase()) >= 0){
				tempArray.push(model.listValues[i]);
			}
		}
		AppViewModel.Values(tempArray);
	},
	toggleMarker: function(){
		AppViewModel.marker.setAnimation(google.maps.Animation.BOUNCE);
		 
            setTimeout(function(){
				AppViewModel.marker.setAnimation(null)
			},3000);
	},
	googleError: function(){
		
		if(typeof google === 'undefined' || typeof google.maps === 'undefined'){
		    alert("Google Map can not be loaded...Please Check your internet Connection or check if site is blocked or please try later.")
		}
	},
	/* This function is trigerred when any list item on left menu is clicked.*/
	listenListClickEvent: function(item,event){
		var markerItems = AppViewModel.markerData();
		AppViewModel.infoWindow.close();
		$('.list li').children().removeClass();
		$(event.target).addClass("highlight");
		for(var i=0;i<markerItems.length;i++){
			
		    if(item === markerItems[i].title){ 
			    google.maps.event.trigger(markerItems[i],'click');
			}
	    }
	},
	/* This function is trigerred when marker on the right hand side map is clicked.*/
	listenMarkerClickEvent: function(marker,contentStr){
		var markerItems = AppViewModel.markerData();
		AppViewModel.infoWindow.close();
		$('.list li').children().removeClass();
		for(var i=0;i<markerItems.length;i++){
			if(marker === markerItems[i].title){   
			    $(".list li a:contains("+marker+")").addClass("highlight");
			    AppViewModel.marker = AppViewModel.markerData()[i];
		    }
	    }
		AppViewModel.marker.setPosition(AppViewModel.marker.position);
			    AppViewModel.toggleMarker();
				AppViewModel.infoWindow.setContent(AppViewModel.marker.content);
	            AppViewModel.infoWindow.open(AppViewModel.mapObj,AppViewModel.marker);
	},
	/* getData function access additional information about each location by using third party wikipedia API.
	This is done thorugh jQuery ajax call. Error handling is done using .fail method.*/
	getData: function(placeData){
		    var message='';
			var remoteUrlWithOrigin = encodeURI("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + placeData.name + "&format=json&callback=?");
			AppViewModel.markerData([]);
			$.ajax( {
                url: remoteUrlWithOrigin,
                dataType: 'json',
				async: true,
				type: 'GET',
				headers: { 'Api-User-Agent': 'Example/1.0' },
				timeout: 3000,
                success: function(data) {
					var contentString='<div id="marker-data"><h6>'+ data[0]+'</h6><p>'+data[2][0]+'</p><ul>';
					var halfString = '</ul></div>';
			        var html='';
			        for(var i=0; i<data[1].length;i++){
						html = html + '<li><a href="' + data[3][i] + '">'+data[1][i]+'</a></li>';
						
					}
					contentString = contentString +  html + halfString;
	// marker is an object with additional data about the pin for a single location
	                AppViewModel.marker = new google.maps.Marker({
						map: AppViewModel.mapObj,
						position: placeData.geometry.location,
                        title: data[0],
						content: contentString
					});
					AppViewModel.markerData.push(AppViewModel.marker);
	// infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
	                AppViewModel.infoWindow = new google.maps.InfoWindow({maxWidth:200});
					$('.list li').children().removeClass();
					AppViewModel.infoWindow.close();
					google.maps.event.addListener(AppViewModel.marker, 'click', function() {
						AppViewModel.listenMarkerClickEvent(data[0],contentString);
					});
				}
				,error: (function( jqXHR, textStatus,errorThrown ) {
					if (jqXHR.status == 404) {
                       message = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                       message = 'Internal Server Error [500].';
                    } else if (textStatus === 'parsererror') {
                       message = 'Requested JSON parse failed.';
                    } else if (textStatus === 'timeout') {
                       message = 'Time out error.';
                    } else if (textStatus === 'abort') {
                       message = 'Ajax request aborted.';
                    } else {
                       message = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
					$('.modal-content').html("<p>Additional information about <b>"+placeData.name+"</b> location can not be found because of the following error <b>" + message + "</b> Please try again later.<i> Click anywhere on the page to resume.</i></p>");
					$('#myModal').modal();
				})
            });
	},
	/*Initialize the google map after window load is done.*/
	initializeMap: function(){
		var insideDiv = document.createElement('div');
		insideDiv.id = 'map';
	/*For the map to be displayed, the div with id map must be
    appended to googleMap id in index.html.*/   
		document.getElementById('googleMap').appendChild(insideDiv);
		var locations =[];
		var message;
        var mapOptions = {
           disableDefaultUI: true
        };
		AppViewModel.mapObj = new google.maps.Map(document.getElementById('map'), mapOptions);
		
	/*createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.*/
	   function createMapMarker(placeData) {
	// The next lines save location data from the search result object to local variables
	        var lat = placeData.geometry.location.lat();  // latitude from the place service
            var lon = placeData.geometry.location.lng();  // longitude from the place service
            var bounds = window.mapBounds;            // current boundaries of the map window
			AppViewModel.getData(placeData);
	// this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
            AppViewModel.mapObj.fitBounds(bounds);
    // center the map
            AppViewModel.mapObj.setCenter(bounds.getCenter());
        }

    /*callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.*/
        function callback(results, status) {
			if (status != google.maps.places.PlacesServiceStatus.OK){
				$('#googleMap').html = "<h1 id='error'><b>Google Map can not be loaded...Please check if site is blocked Or try refresh page later.</b></h1>";
			}
	        if (status == google.maps.places.PlacesServiceStatus.OK) {
				createMapMarker(results[0]);
            }
        }

    /*pinPoster(locations) takes in the array of locations
    and fires off Google place searches for each location*/
        function pinPoster(loc) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
	        var service = new google.maps.places.PlacesService(AppViewModel.mapObj);
    // Iterates through the array of locations, creates a search object for each location
            for (var place in loc) {
    // the search request object
	            var request = {
                    query: loc[place]
                };
    // Actually searches the Google Maps API for location data and runs the callback
    // function with the search results after each search.
                service.textSearch(request, callback);
            }
        }

    // Sets the boundaries of the map based on pin locations
        window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
        locations = AppViewModel.Values();
	// pinPoster(locations) creates pins on the map for each location in
    // the locations array
        pinPoster(locations);

	}		
	
};
ko.applyBindings(AppViewModel);
AppViewModel.searchValue.subscribe(AppViewModel.check);
AppViewModel.searchValue.subscribe(AppViewModel.initializeMap);
AppViewModel.searchValue.extend({notify: 'always'});

var view = {
	init: function(){
	// Calls the initializeMap() function when the page loads
	    window.addEventListener('load', AppViewModel.initializeMap());
    // Listen for resizing of the window and adjust map bounds
        window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
            AppViewModel.mapObj.fitBounds(mapBounds);
        })
    }
}

view.init();