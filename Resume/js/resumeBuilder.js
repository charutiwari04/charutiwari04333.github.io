var work = {
	"jobs" : [
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
      "title"      : "Advisory System Analyst",
      "location"   : "USA",
      "dates"      : "01/2010-05/2016",
      "description": "Write client-side code for creating fast and responsive web-based applications. Follow clean code HTML and javascript principles. Apply javascript object-oriented techniches to create the application. Meeting with stakeholders, managers and designers to understand the requirement. Creating Use-cases or prototypes. Using sematically correct HTML language for creating websites. Work under Agile methodology environment. Used javascript to enable web data in the reporting tools. Writing data manipulation and reporting scripts for web data which was received in the form of JSON object. Working on large database on Oracle and Sql Databases."	  
	 },
	 {
		"employer"   : "FreeLancer",
		"title"      : "UX Research/UI Developer",
		"location"   : "USA",
		"dates"      : "07/2016-05/2017",
		"description": "Analyse and Understand the flow of the website, Create prototype and mockups of the websites. Worked with backend engineer to implement and discuss JSON structure for the backend – front end interaction"	  
	 },
	 {
		"employer"   : "Cisco",
		"title"      : "Front End Developer",
		"location"   : "San Jose, CA",
		"dates"      : "06/2017-10/2018",
		"description": "Create cross-browser AngularJS application to support multiple browsers such as Firefox, IE9, IE10, IE11, MS-edge, Safari, and chrome. Follow MVC architecture pattern for two-way data binding both in front-end with Angular JS and server side, for that developed controllers, directives, and factory in Angular framework to communicate with Restful APIs. Responsibilities included completing UI tasks assigned for the sprint, bug fixing, adding feature requests, enhancements and new development"	  
	 },
	 {
		"employer"   : "PAYPAL",
		"title"      : "Front End Developer",
		"location"   : "San Jose, CA",
		"dates"      : "10/2018-Till Date",
		"description": "Build/Test single page web application using ReactJS/Redux, NodeJS. Set up the front end and backend infrastructure for the new application using NodeJS, Kra-kenJS, ReactJS, Redux, Paypal Services. Apply modern workflow to website including automation via Gulp, webpack, and version control via Git. "	  
	 }
	],
	"display" : function(){
		if(work.jobs.length > 0){
	        var formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription;
		    var arr = work.jobs.reverse();
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
	}
};
var projects= {
	"project" : [
	{
		"title" : "Portfolio",
		"Dates" : "09/01/15 - 11/03/15",
		"description" : "Used concepts of HTML, CSS, Responsive Design, Bootstrap and some Javascript",
		"images" : ["images/book.jpg"]
	}
	],
	"display" : function(){
		var formattedPtitle, formattedPdates, formattedPdescription, formattedPimage;
	    for(var proj in projects.project){
		    $('#projects').append(HTMLprojectStart);
		    formattedPtitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
		    $('.project-entry:last').append(formattedPtitle);
		    formattedPdates = HTMLprojectDates.replace("%data%",projects.project[proj].Dates);
		    $('.project-entry:last').append(formattedPdates);
		    formattedPdescription = HTMLprojectDescription.replace("%data%",projects.project[proj].description);
		    $('.project-entry:last').append(formattedPdescription);
		    if(projects.project[proj].images.length > 0){
			    for(var key in projects.project[proj].images){
				    formattedPimage = HTMLprojectImage.replace("%data%",projects.project[proj].images[key]);
		            $('.project-entry:last').append(formattedPimage);
			    }
		    }
	    } 
	}
};
var bio = {
	"name" : "Charu Tiwari",
	"role" : "Front End Developer",
	"welcomeMessage" : "Welcome to my portfolio...",
	"contacts" : {
		"mobile" : "507-530-4545",
		"email"  : "charu.tiwari04@gmail.com",
		"github" : "charutiwari04",
		"linkedin" : "https://www.linkedin.com/in/charutiwari04/",
		"location": "Sunnyvale CA"
	},
	"skills" : ["HTML5", "CSS3", "Javascript ES5/ES6", "ReactJS", "NodeJS"],
	"bioPic" : "images/my.jpg",
	"display" : function(){
		var formatemail, formatmobile, formatgithub, formatTwitter, formatBlog, formatlocation, formatbiopic, formatmsg, formattedName, formattedRole;
		formattedName = HTMLheaderName.replace("%data%",bio.name);
        formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        if(bio.skills.length > 0 ) {
	        $('#header').append(HTMLskillsStart);
	        for(key in bio.skills){
		        formattedSkill = HTMLskills.replace("%data%",bio.skills[key]);
		        $('#skills').append(formattedSkill);
	        }
        }
	    formatemail = HTMLemail.replace("%data%",bio.contacts.email);
        formatmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	    formatgithub = HTMLgithub.replace("%data%",bio.contacts.github);
		formatTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	    formatlinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
		formatBlog = HTMLblog.replace("%data%",bio.contacts.blog);
	    formatlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	    formatbiopic = HTMLbioPic.replace("%data%",bio.bioPic);
	    formatmsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	    $('#topContacts,#footerContacts').append(formatmobile);
	    $('#topContacts,#footerContacts').append(formatemail);
	    $('#topContacts,#footerContacts').append(formatgithub);
	    $('#topContacts,#footerContacts').append(formatlocation);
		$('#topContacts,#footerContacts').append(formatTwitter);
		$('#topContacts,#footerContacts').append(formatBlog);
	    $('#topcontacts').append(formatmsg);
	    $('#header').append(formatbiopic);
	    $('#header').append(formatmsg);
	}
};
var education ={
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
	"display" : function(){
		var formatSclName, formatSclDegree, formatSclDates, formatSclLocation, formatSclMajor;
	    for(school in education.schools){
		    $('#education').append(HTMLschoolStart);
		    formatSclName = HTMLschoolName.replace("%data%",education.schools[school].name);
		    formatSclDegree    = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		    formatSclDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		    formatSclLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		    formatSclMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[0]);
		    $('.education-entry:last').append(formatSclName + formatSclDegree);
		    $('.education-entry:last').append(formatSclDates);
		    $('.education-entry:last').append(formatSclLocation);
		    $('.education-entry:last').append(formatSclMajor);
	    }
	    $('#education').append(HTMLonlineClasses);
	    for(course in education.onlineCourses){
		    $('#education').append(HTMLschoolStart);
		    var formatOnlineTitle, formatOnlineSchool, formatOnlineDates, formatOnlineUrl;
		    formatOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		    formatOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school); 	
		    formatOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].Dates);
		    formatOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		    $('.education-entry:last').append(formatOnlineTitle + formatOnlineSchool);
		    $('.education-entry:last').append(formatOnlineDates);
		    $('.education-entry:last').append(formatOnlineUrl);
	    }

	}
};
projects.display();
education.display();
bio.display();
work.display();

function inName(name){
	name = name.trim().split(" ");
	name[0] = name[0].splice(0,1).toUpperCase() + name[0].splice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0]+" "+name[1];
}
//$('#main').append(internationalizeButton);

//$('#mapDiv').append(googleMap);
