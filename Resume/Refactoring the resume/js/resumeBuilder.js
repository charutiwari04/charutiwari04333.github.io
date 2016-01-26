$(function(){
var model = {
	init: function(){
	this.work={
		jobs: [
		    {
            "employer"   : "IBM Global",
            "title"      : "Software Engineer",
            "location"   : "India",
            "dates"      : "01/2004-08/2007",
            "description": " Analyze business requirement and Mapping it to technical requirement/functional requirements. Produce High level / Low level Design specification. Produce new code/code changes based on the design document using COBOL, IMS DB/DC, MQ, JCL. Created mappings and sessions to implement technical enhancements for data warehouse by extracting data from sources like oracle and flat files. Used various transformations like Source Qualifier, Expression, Aggregator, Joiner, Filter, Lookup. Involved in meeting with client for understanding requirement changes and walkthrough. Involved in effort estimation and mile stone tracking for the project."	  
	        },
	        {
            "employer"   : "Cognizant Technology Solutions",
            "title"      : "Associate Projects",
            "location"   : "India",
            "dates"      : "09/2007-10/2008",
            "description": "Extracting data from various sources including inventory, product and customer databases to create integrated views that can be used to for analysis and reporting purpose. Transforming the data using various transformations like Router, Joiner, Update Strategy etc. Loading the transformed and analysed data into target databases. Working with several large and complex SQL databases. Consulting with Leads, Managers and Stakeholders to develop analysis data."	  
	        },
	        {
            "employer"   : "Tech Mahindra",
            "title"      : "Sr. Technical Consultant",
            "location"   : "India",
            "dates"      : "10/2008-01/2010",
            "description": "Responsible for end to end project delivery including requirement analysis, Low level Design, Coding and Unit Testing, UAT Support and Pre-prod support. Produce Detailed Design document for change of requirements. Manage cross-geographical teams including supervision and delegation of tasks."	  
	        },
	        {
            "employer"   : "IBM Global",
            "title"      : "Web Developer",
            "location"   : "USA",
            "dates"      : "01/2010-till date",
            "description": "Write client-side code for creating fast and responsive web-based applications. Follow clean code HTML and javascript principles. Apply javascript object-oriented techniches to create the application. Meeting with stakeholders, managers and designers to understand the requirement. Creating Use-cases or prototypes. Using sematically correct HTML language for creating websites. Work under Agile methodology environment. Used javascript to enable web data in the reporting tools. Writing data manipulation and reporting scripts for web data which was received in the form of JSON object. Working on large database on Oracle and Sql Databases."	  
	        }
		]
	};
	this.projects={
		"project" : [
	    {
		"title" : "Portfolio",
		"Dates" : "09/01/15 - 11/03/15",
		"description" : "Used concepts of HTML, CSS, Responsive Design, Bootstrap and some Javascript",
		"images" : ["images/book.jpg"]
	    }
		]
	};
	this.bio = {
		"name" : "Charu Tiwari",
	    "role" : "Web Developer",
	    "welcomeMessage" : "Welcome to my portfolio...",
	    "contacts" : {
		"mobile" : "507-530-4545",
		"email"  : "charu.tiwari04@gmail.com",
		"twitter": "abc@",
		"github" : "charutiwari04",
		"linkedin" : "https://www.linkedin.com/pub/charu-tiwari/a2/5a/9ba",
		"blog"   : "charu.blog",
		"location": "Sunnyvale CA"
	    },
	    "skills" : ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
	    "bioPic" : "images/my.jpg"
	};
	this.education = {
		"schools": [
	{
	  "name" : "Kumaon Engg College",
	  "location" : "Almora, India",
	  "degree" : "Bachelors Of Engineering",
      "majors" : [
	    "computer science",
        "Engineering"		
	  ],
      "dates" : 2003,
      "url"   : "http://www.kecua.ac.in/"	  
	}
	],
	"onlineCourses" :[
	{
		"title" : "Front End Developer",
		"school": "Udacity",
		"Dates" : 2015,
		"url"   : "www.udacity.com"
	}
	]
	};
	}
};
var octopus = {
	init: function(){
		model.init();
		view.init();
	},
	workDisplay : function(){
		if(model.work.jobs.length > 0){
	        var formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription;
		    var arr = model.work.jobs.reverse();
	        for(job in arr){
		        $('#workExperience').append(HTMLworkStart);
		        formattedEmployer = HTMLworkEmployer.replace("%data%",arr[job].employer);
		        formattedTitle    = HTMLworkTitle.replace("%data%",arr[job].title);
		        formattedLocation = HTMLworkLocation.replace("%data%",arr[job].location);
		        formattedDates = HTMLworkDates.replace("%data%",arr[job].dates);
		        formattedDescription = HTMLworkDescription.replace("%data%",arr[job].description);
		        $('.work-entry:last').append(formattedEmployer + formattedTitle);
		        $('.work-entry:last').append(formattedLocation);
		        $('.work-entry:last').append(formattedDates);
		        $('.work-entry:last').append(formattedDescription);
	        }
        }
	},
	projectsDisplay : function(){
		var formattedPtitle, formattedPdates, formattedPdescription, formattedPimage;
	    for(var proj in model.projects.project){
		    $('#projects').append(HTMLprojectStart);
		    formattedPtitle = HTMLprojectTitle.replace("%data%",model.projects.project[proj].title);
		    $('.project-entry:last').append(formattedPtitle);
		    formattedPdates = HTMLprojectDates.replace("%data%",model.projects.project[proj].Dates);
		    $('.project-entry:last').append(formattedPdates);
		    formattedPdescription = HTMLprojectDescription.replace("%data%",model.projects.project[proj].description);
		    $('.project-entry:last').append(formattedPdescription);
		    if(model.projects.project[proj].images.length > 0){
			    for(var key in model.projects.project[proj].images){
				    formattedPimage = HTMLprojectImage.replace("%data%",model.projects.project[proj].images[key]);
		            $('.project-entry:last').append(formattedPimage);
			    }
		    }
	    }
	},
	bioDisplay : function(){
		var formatemail, formatmobile, formatgithub, formatTwitter, formatBlog, formatlocation, formatbiopic, formatmsg, formattedName, formattedRole;
		formattedName = HTMLheaderName.replace("%data%",model.bio.name);
        formattedRole = HTMLheaderRole.replace("%data%",model.bio.role);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        if(model.bio.skills.length > 0 ) {
	        $('#header').append(HTMLskillsStart);
	        for(key in model.bio.skills){
		        formattedSkill = HTMLskills.replace("%data%",model.bio.skills[key]);
		        $('#skills').append(formattedSkill);
	        }
        }
	    formatemail = HTMLemail.replace("%data%",model.bio.contacts.email);
        formatmobile = HTMLmobile.replace("%data%",model.bio.contacts.mobile);
	    formatgithub = HTMLgithub.replace("%data%",model.bio.contacts.github);
		formatTwitter = HTMLtwitter.replace("%data%",model.bio.contacts.twitter);
	    formatlinkedin = HTMLlinkedin.replace("%data%",model.bio.contacts.linkedin);
		formatBlog = HTMLblog.replace("%data%",model.bio.contacts.blog);
	    formatlocation = HTMLlocation.replace("%data%",model.bio.contacts.location);
	    formatbiopic = HTMLbioPic.replace("%data%",model.bio.bioPic);
	    formatmsg = HTMLwelcomeMsg.replace("%data%",model.bio.welcomeMessage);
	    $('#topContacts,#footerContacts').append(formatmobile);
	    $('#topContacts,#footerContacts').append(formatemail);
	    $('#topContacts,#footerContacts').append(formatgithub);
	    $('#topContacts,#footerContacts').append(formatlocation);
		$('#topContacts,#footerContacts').append(formatTwitter);
		$('#topContacts,#footerContacts').append(formatBlog);
	    $('#topcontacts').append(formatmsg);
	    $('#header').append(formatbiopic);
	    $('#header').append(formatmsg);
	},
	educationDisplay : function(){
		var formatSclName, formatSclDegree, formatSclDates, formatSclLocation, formatSclMajor;
	    for(school in model.education.schools){
		    $('#education').append(HTMLschoolStart);
		    formatSclName = HTMLschoolName.replace("%data%",model.education.schools[school].name);
		    formatSclDegree    = HTMLschoolDegree.replace("%data%",model.education.schools[school].degree);
		    formatSclDates = HTMLschoolDates.replace("%data%",model.education.schools[school].dates);
		    formatSclLocation = HTMLschoolLocation.replace("%data%",model.education.schools[school].location);
		    formatSclMajor = HTMLschoolMajor.replace("%data%",model.education.schools[school].majors[0]);
		    $('.education-entry:last').append(formatSclName + formatSclDegree);
		    $('.education-entry:last').append(formatSclDates);
		    $('.education-entry:last').append(formatSclLocation);
		    $('.education-entry:last').append(formatSclMajor);
	    }
	    $('#education').append(HTMLonlineClasses);
	    for(course in education.onlineCourses){
		    $('#education').append(HTMLschoolStart);
		    var formatOnlineTitle, formatOnlineSchool, formatOnlineDates, formatOnlineUrl;
		    formatOnlineTitle = HTMLonlineTitle.replace("%data%",model.education.onlineCourses[course].title);
		    formatOnlineSchool = HTMLonlineSchool.replace("%data%",model.education.onlineCourses[course].school); 	
		    formatOnlineDates = HTMLonlineDates.replace("%data%",model.education.onlineCourses[course].Dates);
		    formatOnlineUrl = HTMLonlineURL.replace("%data%",model.education.onlineCourses[course].url);
		    $('.education-entry:last').append(formatOnlineTitle + formatOnlineSchool);
		    $('.education-entry:last').append(formatOnlineDates);
		    $('.education-entry:last').append(formatOnlineUrl);
	    }
	},
	initializeMap: function(){
		octopus.map;
		var locations=[];

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  octopus.map = new google.maps.Map(document.querySelector('#map'), mapOptions);


		function locationFinder() {

    // initializes an empty array
    var locs = [];

    // adds the single location property from bio to the locations array
    locs.push(model.bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in model.education.schools) {
      locs.push(model.education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in model.work.jobs) {
      locs.push(model.work.jobs[job].location);
    }

    return locs;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: octopus.map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
	  infoWindow.open(octopus.map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    octopus.map.fitBounds(bounds);
    // center the map
    octopus.map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(octopus.map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

	},
};
var view ={
	init: function(){
		octopus.workDisplay();
		octopus.projectsDisplay();
		octopus.bioDisplay();
		octopus.educationDisplay();
		view.addMap;
	},
    addMap: function(){
		// Calls the initializeMap() function when the page loads
window.addEventListener('load', octopus.initializeMap());
// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  octopus.map.fitBounds(mapBounds);
})

	}	
};
octopus.init();
}());
function inName(name){
	name = name.trim().split(" ");
	name[0] = name[0].splice(0,1).toUpperCase() + name[0].splice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0]+" "+name[1];
}
//$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
