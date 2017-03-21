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
      "twitter" : "@babyloosy",
      "location" : "Round Rock, TX"
    },
  "skills" : ["Programming", "Design", "JS", "Management"]
}

var work = {
  "jobs" : [
    {
      "employer" : "Citybank Mexico",
      "title" : "Project Manager",
      "location" : "Monterrey Nuevo Leon Mexico",
      "dates" : "1992-2001",
      "description" : "Project manager of investments system and funds transfer system. Both projects where instaled nation-wide in Mexico."
    },
    {
      "employer" : "Purple Mart",
      "title" : "Manager",
      "location" : "Round Rock TX",
      "dates" : "2010 to date",
      "description" : "On line store. Control of merchandise, seller, distribution of merchandise."
    },
    {
      "employer" : "Zadre studios",
      "title" : "Developer, designer",
      "location" : "Round Rock TX",
      "dates" : "2015 to date",
      "description" : "Apps and game Developer. Worked with Unity and Photoshop to build apps."
    }
 ]
}

var education = {
 	"schools": [
      {
     		"name" : "ITESM",
        "location" : "Monterrey Nuevo Leon Mexico",
        "degree" : "Computer Science",
        "dates" : 1992,
        "url" : "https://tec.mx/",
        "majors" : ["CS"]
 	    },
      {
     		"name" : "Rediscover Happiness",
     		"location" : "Austin TX",
        "degree" : "Facilitator",
        "dates" : 2016,
        "url" : "https://www.facebook.com/AustinCentroAlaya/",
        "majors" : ["Speaker"]
 	    }
    ]
 ,
  "onLineCourses" : [
    {
        "title" : "Product Specialist",
        "school" : "Microsoft Certification Sql server",
        "dates" : 1999,
        "url" : "https://www.microsoft.com/en-us/learning/certification-overview.aspx"
    },
    {
        "title" : "Front end developer",
        "school" : "Udacity",
        "dates" : 2016,
        "url" : "https://www.udacity.com"
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Deluxe 15",
      "dates" : "2016",
      "description" : "Classic 15 puzzle game with great images. You can see birds, sports articles, purses, girl's shoes and yummi fruits",
      "images" : ["images/flying.jpg", "images/me.jpg"]
    },
    {
      "title" : "Bird card",
      "dates" : 2016,
      "description" : "Information about an amazing bird: parrakets. You will find information about theis beautiful bird.",
      "images" : ["images/birdcotorrito.png", "images/a.jpg"]
    }
  ]
}

//header
function displayBasicInfo () {
    var formattedRole = HTMLheaderRole.replace("%data%","Web Developer Unlimited");
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", "Liz Garces");
    $("#header").prepend(formattedName);

    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);

    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedTwitter);

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
}

displayBasicInfo ();

//skills at glance section

bio.addSkills = function() {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
          for (skill in bio.skills) {
              $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
          }
    }
}

bio.addSkills();

//jobs section

function displayWork () {
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
  }

  displayWork();

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
}

//display projects

projects.display = function() {
  for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
          for (image in projects.projects[project].images) {
              var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedImages);
           }
      }
    }
}

projects.display();

// display a map qith the places that i have been

$("#mapDiv").append(googleMap);

/* $("#main").append(work.position);*/
/*$("#main").append(education["name"]);*/
