/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
  "name" : "Liz Garces",
  "role" : "Front End Developer",
  "contacts" : {
      "mobile" : "5122553752",
      "email" : "liz_garcesr@yahoo.com ",
      "github" : "lizgarces",
      "linkedin" : "elizabeth-garces",
      "location" : "Round Rock, TX"
  },
  "welcomeMessage" : "Happy to help you!",
  "skills" : [
      "Programming",
      "Design",
      "JS",
      "Management",
      "HTML"
  ],
  "biopic" : "images/me.jpg"
};

var education = {
  "schools": [
  {
    "name" : "ITESM, Instituto Tecnologico y de Estudios Superiores de Monterrey",
    "location" : "Monterrey Nuevo Leon Mexico",
    "degree" : "Computer Science",
    "majors" : ["CS"],
    "dates" : "1987-1992",
    "url" : "https://tec.mx/"
 	}
  ],
  "onlineClasses" : [
  {
    "title" : "2d Bitmap art for video games (Photoshop)",
    "school" : "Udemy",
    "dates" : "2016-2017",
    "url" : "https://www.udemy.com/2d-bitmap-art-for-video-games/"
  },
  {
    "title" : "Front-End Web Developer Nanodegree",
    "school" : "Udacity",
    "dates" : "2016-2017",
    "url" : "https://www.udacity.com"
  }
  ]
};

var work = {
  "jobs" : [
  {
    "employer" : "Citybank Mexico",
    "title" : "Project Manager",
    "location" : "Monterrey, Nuevo Leon, Mexico",
    "dates" : "1992-2001",
    "description" : "Project manager of investments system and funds transfer system. Both projects were installed nationwide in Mexico."
  },
  {
    "employer" : "Purple Mart",
    "title" : "Manager",
    "location" : "Round Rock, TX",
    "dates" : "2010 to date",
    "description" : "On line store. Control, sales, shipping and distribution of merchandise."
  },
  {
    "employer" : "Zadre studios",
    "title" : "Developer, designer",
    "location" : "Round Rock, TX",
    "dates" : "2015 to date",
    "description" : "Apps and game Developer. Worked with Unity and Photoshop to build apps."
  }
  ]
};

var projects = {
  "projects" : [
  {
    "title" : "Deluxe 15",
    "dates" : "2016",
    "description" : "Classic 15 puzzle game with great images. You can see cute birds, colorfull butterflies, sports articles, trendy purses or handbags, great girl's shoes and yummi fruits.",
    "images" : ["images/deluxe15.jpg", "images/deluxegame.jpg"]
  },
  {
    "title" : "Bird card",
    "dates" : "2016",
    "description" : "Information about an amazing bird: parrakets. You will find information about this beautiful bird.",
    "images" : ["images/parraket.jpg"]
  }
  ]
};

//header
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%","Web Developer Unlimited");
  var formattedName = HTMLheaderName.replace("%data%", "Liz Garces");
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  $("#topContacts,#footerContacts").append(formattedLocation, formattedLinkedin, formattedGithub);
  $("#topContacts,#footerContacts").append(formattedEmail, formattedMobile);

  $("#header").append(formattedPic,formattedwelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
    }
  }
};

/* $("#main").append(work.position);*/
work.display = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle, formattedDates);
    $(".work-entry:last").append(formattedLocation, formattedDescription);
  }
};

  //anonymous function
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
}
);

//display projects
projects.display = function() {
  for (var project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (var image = 0; image < projects.projects[project].images.length; image++) {
          var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImages);
      }
    }
  }
};

// display a map with the places that i have been
$("#mapDiv").append(googleMap);

/*$("#main").append(education["name"]);*/
education.display = function() {
  for (var school = 0; school < education.schools.length; school++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

    $(".education-entry:last").append(formattedSchoolName, formattedSchoolDates, formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolLocation, formattedSchoolMajor);
  }
  $(".education-entry:last").append(HTMLonlineClasses);

  for (var onlineClass = 0; onlineClass < education.onlineClasses.length; onlineClass++) {

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);

    $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool);
    $(".education-entry:last").append(formattedOnlineDates, formattedOnlineURL);
  }
};

bio.display();

work.display();

projects.display();

education.display();
