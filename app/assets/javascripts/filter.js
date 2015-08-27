$( document ).ready(function() {
  var tags = [];
  var newHtml = "";
  var newJson = [];
  var json = [
    {
    name: "Blue Button Initiative",
    preview: "An initiative which increases Americans' access to their own health information electronically, in a format they can use and re-use.", 
    description: "Increase the transparency and access to their health information, in order to make more informed decisions about their health, care for their family members, and share information with their providers. A team of PIFs, in partnership with the Office of the National Coordinator for Health Information Technology (ONC), VA, DoD, & CMS to expand the Blue Button Initiatives including connector, Fast Healthcare Interoperability Resources (FHIR) API standards for interoperability and a FHIR test server in SITE and CMS. 150 million Americans have access to their personalized health data; 600+ commitments from organizations to advance health information access efforts.",
    tags: ["social-justice", "health", "undergraduate-school", "environmental"],
    picture: "/assets/blue-button.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "GeoQ",
    preview: "An open source disaster response tool that crowdsources geo-tagged photos for collaborative, coordinated response.",
    description: "How to better use technology to help victims and communities of disasters more resilient in the aftermath of disaster. Fellow Jaqueline Kazil, in coordination with National Geospatial-Intelligence Agency, the Federal Emergency Management Agency (FEMA), and other disaster analysts, built GeoQ to improve the speed and quality of disaster-related data coordination by using a data crowd-sharing framework. Programmers are able to use the existing services through GitHub, and add customizable features to alter GeoQ code for their own communities. Currently, 12 local projects are leveraging the GeoQ platform to enable the use of geospatial intelligence in their communities.",
    tags: ["disaster-response", "open-data", "high-school", "environmental", "history"],
    picture: "/assets/geoq.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Green Button Connect",
    preview: "An initiative enabling Americans to have a better handle on their energy use and shrink their energy costs.",
    description: "Reduce waste and shrink bills by providing consumers with secure, easy-to-understand information about how they are using energy in their households. In collaboration with the White House Office of Science & Technology Policy, the Department of Energy, NIST, the North American Energy Standards Board, utilities, and vendors, a team of Fellows worked to double the Green Button ecosystem, improve Green Button data, and leverage Green Button in federal agencies. 100 million Americans and 8 million Canadians have access to their personalized energy data; 66,000 individual downloads of personal energy data.",
    tags: ["energy", "open-data", "economics", "environmental", "graduate-school"],
    picture: "/assets/green-button.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "NotAlone.Gov",
    preview: "An easy-to-read site which makes sexual assault resources readily accessible to students and schools.",
    description: "Improve the transparency and information-sharing of sexual assault prevention and enforcement data for students and schools. In less than 30 days, a team of Presidential Innovation Fellows and 18F staff built NotAlone.gov, a website containing typically disparate and often difficult-to-find information for students, schools, and anyone interested in finding resources on how to prevent and respond to sexual assault on college campuses and in schools. NotAlone.gov has received 500,000+ page views to date.",
    tags: ["education", "social-services", "open-data", "statistics", "graduate-school"],
    picture: "/assets/notalone.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Digitizing the Smithsonian Institute's Herbarium",
    preview: "A crowdsourcing platform that allows the public to transcribe handwritten historical documents and records.",
    description: "Make the Smithsonian Institute’s digitization of 137 million+ artifacts more findable, useful and informative to researchers and members of the public. In just six months, a team of Fellows developed and launched an end-to-end solution for creating digital records for historic files. Through crowdsourcing transcriptions, the project has engaged thousands of volunteers who have helped to transcribe and review historic and scientific records, making them easily accessible to the public for the first time. 1,400+ volunteers contributing; 18,000+ transcriptions; $6 million in cost-savings for outsourcing transcription.",
    tags: ["education", "history", "high-school", "graduate-school", "statistics"],
    picture: "/assets/smith-herb.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "SunShot Initiative",
    preview: "A national collaborative effort to make solar energy cost-competitive with other forms of electricity by the end of the decade.",
    description: "Make the total cost of solar energy fully economically-viable for everyday use, so that all Americans will benefit from this clean renewable energy resource. The SunShot initiative focuses on making clean, low-cost reliable solar energy available for homeowners and communities, and create U.S. jobs through domestic solar manufacturing and distribution. A Fellow worked specifically on funding a range of projects that reduce the non-hardware, or soft-costs, of solar, which are becoming an increasingly larger fraction of the cost of installing solar. The initiative is projected to save over $1.98 billion of taxpayer dollars by 2020, with a 1% decrease in 'soft costs'.",
    tags: ["energy", "health", "efficiency", "undergraduate-school", "environmental"],
    picture: "/assets/sunshot.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Uncle Sam's List",
    preview: "An open source classifieds system for government employees to look up, leverage and share commodities IT, support, and mission services.",
    description: "Find a way to get more U.S. government agencies to pool and leverage existing services and contracts, instead of individually negotiating buying costly new ones. A team of PIFs, in partnership with the Chief Information Officers Council, developed a database (available through the MAX.gov portal) which offers a centralized information center to help agencies forgo buying new commodity IT and support services in favor of existing services provided by other federal agencies. Cost savings of $300 million, with anticipated savings of over $2.5 billion from FY 2013 to FY 2015 in total consolidation effort.",
    tags: ["open-data", "crowd-sourcing", "politics", "high-school"],
    picture: "/assets/uncle-sam.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Veterans Employment Center",
    preview: "A one-stop-shop connecting military veterans, transitioning service members, and their spouses to meaningful employment opportunities.",
    description: "Streamline the array of employment resources available to veterans, transitioning service members, and their spouses. Built by a team of PIFs working with the Department of Veterans Affairs in connection with the First Lady and Dr. Biden’s Joining Forces Initiative, the Department of Labor, and the Office of Personnel Management, the Veterans Employment Center was the first interagency tool to bring a wealth of public and private job opportunities, a resume-builder, military skills translator and detailed career and training resources together in one place. over $27 million in cost savings.",
    tags: ["government", "efficiency", "data-analysis", "politics", "high-school"],
    picture: "/assets/vet-emp-center.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  }
  ];

  $( ".main-questions label select#school").change(function() {
    var tag = $(this).val();
    if(tag != ""){
      var schoolArray = ["high-school", "undergraduate-school", "graduate-school"];
      for (var i = 0; i < schoolArray.length; i++) {
          var found = $.inArray(schoolArray[i], tags);
          if (found >= 0) {
            tags.splice(found, 1);
          };
      };
      tags.push(tag);

      newJson = [];
      for(i = 0; i < tags.length; i++){
        for(z = 0; z < json.length; z++){
          if(($.inArray( tags[i], json[z].tags ) > -1 ) && ($.inArray(json[z], newJson) < 0 )){
            newJson.push(json[z]);
          }
        }
      };
      loadJson(newJson);
    }
  });
    
  $( ".main-questions label select#subject").change(function() {
    var tag = $(this).val();
    if (tag != "") {
      var schoolArray = ["economics", "statistics", "environmental", "politics", "history"];
      for (var i = 0; i < schoolArray.length; i++) {
          var found = $.inArray(schoolArray[i], tags);
          if (found >= 0) {
            tags.splice(found, 1);
          };
      };
      tags.push(tag);

      newJson = [];
      for(i = 0; i < tags.length; i++){
        for(z = 0; z < json.length; z++){
          if(($.inArray( tags[i], json[z].tags ) > -1 ) && ($.inArray(json[z], newJson) < 0 )){
            newJson.push(json[z]);
          }
        }
      };

      loadJson(newJson);  
    };
  });



  var loadJson = function(newJson){
    newHtml= "";
    newHtml += "<h4 class='notice'>We found "+ newJson.length +" results</h4>"
    for(i = 0; i < newJson.length; i++){
      newHtml += "<article>";
      newHtml += "<div class='article-synopsis'>";
      newHtml += "<div class='article-image'>";
      newHtml += "<img src='"+ newJson[i].picture +"'>";
      newHtml += "</div>";
      newHtml += "<div class='image-box'></div>";
      newHtml += "<div class='article-text'>";
      newHtml += "<h3>"+ newJson[i].name +"</h3>";
      newHtml += "<p class='preview'>"+ newJson[i].preview +"</p>";
      newHtml += "</div>";
      newHtml += "<div class='more-info'>";
      newHtml += "<div class='image-box'></div>";
      newHtml += "<p class='description'>"+ newJson[i].description +"</p>";
      newHtml += "</div>";
      newHtml += "<div class='meta-data'>";
      newHtml += "<span class='share-links'>";
      newHtml += "<a class='tag'><h4><i class='fa fa-twitter'></i></h4></a>";
      newHtml += "<a class='tag'><h4><i class='fa fa-envelope'></i></h4></a>";
      newHtml += "<a class='tag'><h4><i class='fa fa-facebook'></i></h4></a>";
      newHtml += "</span>";
      newHtml += "<div class='text-tags'>";
      newHtml += "<div class='tags'>";
      newHtml += "<a class='article-link' href="+ newJson[i].link +">View</a>";
      for(z = 0; z < newJson[i].tags.length; z++){
        newHtml += "<a class='tag'><h4>"+newJson[i].tags[z].charAt(0).toUpperCase() + newJson[i].tags[z].slice(1)+"</h4></a>";
      }
      newHtml += "</div>";
      newHtml += "<a href='#' class='expand more'><h4>More</h4></a>";
      newHtml += "</div>";
      newHtml += "</div>";
      newHtml += "</article>";
    }
    $(".cases").html(newHtml);
    $("article .more-info").hide();
    $("article").on("click", "a.more", function(e){
      $(this).closest("article").find(".more-info").slideDown();
      $(this).closest("article").height("auto");
      $(this).addClass("collapse").removeClass("more")
      $(this).html("<h4>Less</h4>")
      var height = $(".more-info .description").height();
      $(".more-info .image-box").height(height + 30);
      return false;
    });
    $("article").on("click", "a.collapse", function(e){
      $(this).closest("article").animate({height:"200px"}, 500);
      $(this).closest("article").find(".more-info").slideUp();
      $("article .more-info").animate({display: "none"}, 500);
      $(this).addClass("more").removeClass("collapse");
      $(this).html("<h4>More</h4>")
      var height = $(".more-info .description").height();
      $(".more-info .image-box").height(height + 30);
      return false;
    });
  };

  loadJson(json);
  $(".aside-toggle").on("click", function(){
    loadJson(json);
  var dataTags=$("aside .tag");
  for(i = 0; i < dataTags.length; i++){
    $(dataTags[i]).find("h4").css({"background-color":"white"});
  };
  });

  $(document).on("click", "a.tag", function(){
    var clicked = $(this).data("tag");
    var found = $.inArray(clicked, tags);
    if (found >= 0) {
      tags.splice(found, 1);
      $(this).find("h4").css({"background-color":"white"});
    } else if( found < 0 ) {
      $(this).find("h4").css({"background-color":"#EEE"});
      tags.push(clicked);
    }
    var tagOptions = $("aside .tag")
    newJson = [];
    for(i = 0; i < tags.length; i++){
      for(z = 0; z < json.length; z++){
        if(($.inArray( tags[i], json[z].tags ) > -1 ) && ($.inArray(json[z], newJson) < 0 )){
          newJson.push(json[z]);
        }
      }
    };
    loadJson(newJson);
});
});
