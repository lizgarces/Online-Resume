/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Liz Garces",
  "role" : "Front End Developer",
  "welcomeMessage" : "Happy to help you!",
  "bioPic" : "images/me.jpg",
  "contacts" : {
      "mobile" : "5122553752 ",
      "email" : "liz.garcesr@gmail.com ",
      "github" : "lizgarces",
      "linkedin" : "elizabeth-garces-283723",
      "location" : "Round Rock, TX"
    },
  "skills" : ["Programming", "Design", "JS", "Management", "HTML"]
};

var work = {
  "jobs" : [
    {
      "employer" : "Citybank Mexico",
      "title" : "Project Manager",
      "location" : "Monterrey Nuevo Leon Mexico",
      "dates" : "1992-2001",
      "description" : "Project manager of investments system and funds transfer system. Both projects were installed nationwide in Mexico."
    },
    {
      "employer" : "Purple Mart",
      "title" : "Manager",
      "location" : "Round Rock TX",
      "dates" : "2010 to date",
      "description" : "On line store. Control, sales, shipping and distribution of merchandise."
    },
    {
      "employer" : "Zadre studios",
      "title" : "Developer, designer",
      "location" : "Round Rock TX",
      "dates" : "2015 to date",
      "description" : "Apps and game Developer. Worked with Unity and Photoshop to build apps."
    }
  ]
};

var education = {
 	"schools": [
    {
      "name" : "ITESM, Instituto Tecnologico y de Estudios Superiores de Monterrey",
      "location" : "Monterrey Nuevo Leon Mexico",
      "degree" : "Computer Science",
      "dates" : 1992,
      "url" : "https://tec.mx/",
      "major" : ["CS"]
 	   }
  ],
  "onlineClasses" : [
    {
      "title" : "2d Bitmap art for video games (Photoshop)",
      "school" : "Udemy",
      "dates" : 2016,
      "url" : "https://www.udemy.com/2d-bitmap-art-for-video-games/"
    },
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com"
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
      "dates" : 2016,
      "description" : "Information about an amazing bird: parrakets. You will find information about this beautiful bird.",
      "images" : ["images/parraket.jpg"]
    }
  ]
};

//header

bio.display = function() {

  var formattedRole = HTMLheaderRole.replace("%data%","Web Developer Unlimited");
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", "Liz Garces");
  $("#header").prepend(formattedName);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts,#footerContacts").append(formattedLocation);

  var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
  $("#topContacts,#footerContacts").append(formattedLinkedin);

  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts,#footerContacts").append(formattedGithub);

  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts,#footerContacts").append(formattedEmail);

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts,#footerContacts").append(formattedMobile);

  var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").append(formattedPic);

  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedwelcomeMsg);

  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++) {
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
  }
};

bio.display();

/* $("#main").append(work.position);*/
work.display = function() {

  for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

  //anonymous function
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
  }
);

// internationalizacion button

$("#main").append(internationalizeButton);

function inName() {
    var finalName = bio.name;
    var twoNames = bio.name.split(" ");
    twoNames[1] = twoNames[1].toUpperCase();
    twoNames[0] = twoNames[0].slice(0,1).toUpperCase() + twoNames[0].slice(1).toLowerCase();
    finalName = twoNames.join(" ");
    return finalName;
};

//display projects

projects.display = function() {

  for (var project = 0; project < projects.projects.length; project++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
          for (var image = 0; image < projects.projects[project].images.length; image++) {
              var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedImages);
          }
      }
  }
};

projects.display();

// display a map with the places that i have been

$("#mapDiv").append(googleMap);

/*$("#main").append(education["name"]);*/

education.display = function() {

  for (var school = 0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

  $(".education-entry:last").append(HTMLonlineClasses);

  for (var onlineClass = 0; onlineClass < education.onlineClasses.length; onlineClass++) {

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
    $(".education-entry:last").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
    $(".education-entry:last").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }

};

education.display();
