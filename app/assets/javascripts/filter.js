$( document ).ready(function() {
  var tags = [];
  var newHtml = "";
  var newJson = [];
  var json = [
  {
    name: "GeoBrowser Deployment in the USDA Forest Service",
    preview: "Web mapping technology has revolutionized the way we distribute and interact with geospatial information. With minimal software and a PC, users can now dynamically interact with map displays and discover relationships in map data that previously required expensive software and expertise. Land management agencies produce many geospatial datasets in the course of their activities and research. Web-based GeoBrowsers are an effective way to expose these datasets. In this paper we describe our efforts to meet a mission goal of the USDA Forest Service Western Wildland Environmental Threat Center (WWETAC) by creating a system where users can explore multiple threats (insects and disease, fire hazard, etc) in a dynamic map display. Users can access this system from the WWETAC web site which is here: www.fs.fed.us\wwetac.",
    tags: ["transit", "disaster-response", "open-data", "graduate-school"],
    picture: "/assets/geo_com.jpg",
    link: "http://www.fs.fed.us/wwetac/projects/PDFs/GeoCom_2010_WETAG_FINAL2.pdf"
  },
  {
    name: "The National Broadband Map",
    preview: "The \n\nNational Broadband Map was developed in an innovative way. Agencies face numerous regulatory burdens, and those that spearheaded the project, the NTIA and the Federal Communications Commission (FCC), are no exception. However, the National Broadband Map was up and running in a relatively short period of time, and it has already had a tangible impact on policy. This is due to a series of deliberate decisions by the team that built the National Broadband Map.The project team utilized a diverse set of “open innovation” inputs. They incorporated data from numerous sources and encouraged citizen input and feedback in multiple ways and on a national scale. They built the Map by transparent means with the use of open-source software. The building blocks are freely available software programs, not proprietary products chained off by licensing fees.",
    tags: ["communication", "media", "data-visualization", "data-analysis", "undergraduate-school"],
    picture: "/assets/broadband_map.jpg",
    link: "https://www.wilsoncenter.org/sites/default/files/National%20Broadband%20Map%20Wilson%20Center%20Case%20Study.pdf"
  },
  {
    name: "API Usability Case Study: openFDA",
    preview: "Last March, the openFDA team shared their still-in-progress API to potential users as part of the U.S. General Services Administration (GSA)’s API Usability Program. FDA created openFDA to allow researchers and developers to search their vast trove of public data, including information about adverse events (reports of undesirable experiences associated with the use of a medical product in a patient) submitted to the agency. The API Usability Program brings together developers from agency APIs and the private sector to evaluate how the API can be improved to be more user friendly. Sean Herron of 18F, who was a key member of the openFDA developer team, shared with us some of the major insights gained from this latest API usability session.",
    tags: ["API", "health", "life-sciences", "high-school"],
    picture: "/assets/openFDA.jpg",
    link: "http://www.digitalgov.gov/2014/08/22/api-usability-case-study-openfda/"
  },
  {
    name: "How DOL Created Software Development Kits (SDKs)",
    preview: "The U.S. Department of Labor sought to go beyond merely making data available to developers and take ease of use of the data to the next level by giving developers tools that would make using DOL’s data easier. The target audience was not just experienced developers, but even those who may be just starting out with a how-to book and a great idea. The developer should not necessarily know what JSON or XML are. This requirement led DOL to create software development kits (SDKs), which are downloadable code packages that developers can drop into their apps, making access to DOL’s data easy for even the most novice developer. Not content with just providing the tools, DOL provides sample projects that the developers can use to help them get started even quicker. These SDKs have even been published as open source projects with the aim of speeding up their conversion to SDKs that will eventually support all federal APIs.",
    tags: ["open-data", "economic-growth", "economics", "high-school"],
    picture: "/assets/dol_sdk.jpg",
    link: "http://18f.github.io/API-All-the-X/pages/casestudy_dol"
  },
  {
    name: "FCC Content API",
    preview: "FCC.gov uses the Drupal Content API Module to make hundreds of thousands of Commission documents available to the public, in addition to all of the content on FCC.gov. Drupal developers can use the module on their own site to publish all of the site's content without any programming. The Drupal Content API Module is completely dynamic, publishing your content as an API even as your site structure and content changes. The module is integrated with CCK and will discover new fields when added, and provides granular permissions.",
    tags: ["communication", "API", "media", "high-school"],
    picture: "/assets/fcc_api.jpg",
    link: "https://www.fcc.gov/developers/fcc-content-api"
  },
  {
    name: "The Information Needs of Communities",
    preview: "In most ways today’s media landscape is more vibrant than ever, offering faster and cheaper distribution networks, fewer barriers to entry, and more ways to consume information. Choice abounds. Local TV stations, newspapers and a flood of innovative web start-ups are now using a dazzling array of digital tools to improve the way they gather and disseminate the news—not just nationally or internationally but block-by-block. The digital tools that have helped topple governments abroad are providing Americans powerful new ways to consume, share and even report the news. Yet, in part because of the digital revolution, serious problems have arisen, as well. Most significant among them: in many communities, we now face a shortage of local, professional, accountability reporting. This is likely to lead to the kinds of problems that are, not surprisingly, associated with a lack of accountability—more government waste, more local corruption, less effective schools, and other serious community problems. The independent watchdog function that the Founding Fathers envisioned for journalism—going so far as to call it crucial to a healthy democracy—is in some cases at risk at the local level.",
    tags: ["communication", "media", "high-school"],
    picture: "/assets/information_needs.jpg",
    link: "https://transition.fcc.gov/osp/inc-report/The_Information_Needs_of_Communities.pdf"
  },
  {
    name: "Blue Button Initiative",
    preview: "An initiative which increases Americans' access to their own health information electronically, in a format they can use and re-use. Increase the transparency and access to their health information, in order to make more informed decisions about their health, care for their family members, and share information with their providers. A team of PIFs, in partnership with the Office of the National Coordinator for Health Information Technology (ONC), VA, DoD, & CMS to expand the Blue Button Initiatives including connector, Fast Healthcare Interoperability Resources (FHIR) API standards for interoperability and a FHIR test server in SITE and CMS. 150 million Americans have access to their personalized health data; 600+ commitments from organizations to advance health information access efforts.",
    tags: ["social-justice", "health", "undergraduate-school", "environmental"],
    picture: "/assets/blue-button.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "GeoQ",
    preview: "An open source disaster response tool that crowdsources geo-tagged photos for collaborative, coordinated response. How to better use technology to help victims and communities of disasters more resilient in the aftermath of disaster. Fellow Jaqueline Kazil, in coordination with National Geospatial-Intelligence Agency, the Federal Emergency Management Agency (FEMA), and other disaster analysts, built GeoQ to improve the speed and quality of disaster-related data coordination by using a data crowd-sharing framework. Programmers are able to use the existing services through GitHub, and add customizable features to alter GeoQ code for their own communities. Currently, 12 local projects are leveraging the GeoQ platform to enable the use of geospatial intelligence in their communities.",
    tags: ["disaster-response", "open-data", "high-school", "environmental", "history"],
    picture: "/assets/geoq.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Green Button Connect",
    preview: "An initiative enabling Americans to have a better handle on their energy use and shrink their energy costs. Reduce waste and shrink bills by providing consumers with secure, easy-to-understand information about how they are using energy in their households. In collaboration with the White House Office of Science & Technology Policy, the Department of Energy, NIST, the North American Energy Standards Board, utilities, and vendors, a team of Fellows worked to double the Green Button ecosystem, improve Green Button data, and leverage Green Button in federal agencies. 100 million Americans and 8 million Canadians have access to their personalized energy data; 66,000 individual downloads of personal energy data.",
    tags: ["energy", "open-data", "economics", "environmental", "graduate-school"],
    picture: "/assets/green-button.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "NotAlone.Gov",
    preview: "An easy-to-read site which makes sexual assault resources readily accessible to students and schools. Improve the transparency and information-sharing of sexual assault prevention and enforcement data for students and schools. In less than 30 days, a team of Presidential Innovation Fellows and 18F staff built NotAlone.gov, a website containing typically disparate and often difficult-to-find information for students, schools, and anyone interested in finding resources on how to prevent and respond to sexual assault on college campuses and in schools. NotAlone.gov has received 500,000+ page views to date.",
    tags: ["education", "social-services", "open-data", "statistics", "graduate-school"],
    picture: "/assets/notalone.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Digitizing the Smithsonian Institute's Herbarium",
    preview: "A crowdsourcing platform that allows the public to transcribe handwritten historical documents and records. Make the Smithsonian Institute’s digitization of 137 million+ artifacts more findable, useful and informative to researchers and members of the public. In just six months, a team of Fellows developed and launched an end-to-end solution for creating digital records for historic files. Through crowdsourcing transcriptions, the project has engaged thousands of volunteers who have helped to transcribe and review historic and scientific records, making them easily accessible to the public for the first time. 1,400+ volunteers contributing; 18,000+ transcriptions; $6 million in cost-savings for outsourcing transcription.",
    tags: ["education", "history", "high-school", "graduate-school", "statistics"],
    picture: "/assets/smith-herb.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "SunShot Initiative",
    preview: "A national collaborative effort to make solar energy cost-competitive with other forms of electricity by the end of the decade. Make the total cost of solar energy fully economically-viable for everyday use, so that all Americans will benefit from this clean renewable energy resource. The SunShot initiative focuses on making clean, low-cost reliable solar energy available for homeowners and communities, and create U.S. jobs through domestic solar manufacturing and distribution. A Fellow worked specifically on funding a range of projects that reduce the non-hardware, or soft-costs, of solar, which are becoming an increasingly larger fraction of the cost of installing solar. The initiative is projected to save over $1.98 billion of taxpayer dollars by 2020, with a 1% decrease in 'soft costs'.",
    tags: ["energy", "health", "efficiency", "undergraduate-school", "environmental"],
    picture: "/assets/sunshot.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Uncle Sam's List",
    preview: "An open source classifieds system for government employees to look up, leverage and share commodities IT, support, and mission services. Find a way to get more U.S. government agencies to pool and leverage existing services and contracts, instead of individually negotiating buying costly new ones. A team of PIFs, in partnership with the Chief Information Officers Council, developed a database (available through the MAX.gov portal) which offers a centralized information center to help agencies forgo buying new commodity IT and support services in favor of existing services provided by other federal agencies. Cost savings of $300 million, with anticipated savings of over $2.5 billion from FY 2013 to FY 2015 in total consolidation effort.",
    tags: ["open-data", "crowd-sourcing", "politics", "high-school"],
    picture: "/assets/uncle-sam.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  },
  {
    name: "Veterans Employment Center",
    preview: "A one-stop-shop connecting military veterans, transitioning service members, and their spouses to meaningful employment opportunities. Streamline the array of employment resources available to veterans, transitioning service members, and their spouses. Built by a team of PIFs working with the Department of Veterans Affairs in connection with the First Lady and Dr. Biden’s Joining Forces Initiative, the Department of Labor, and the Office of Personnel Management, the Veterans Employment Center was the first interagency tool to bring a wealth of public and private job opportunities, a resume-builder, military skills translator and detailed career and training resources together in one place. over $27 million in cost savings.",
    tags: ["government", "efficiency", "data-analysis", "politics", "high-school"],
    picture: "/assets/vet-emp-center.png",
    link: "https://presidentialinnovationfellows.gov/projects"
  }
  ];

  var selectedTags =  [];
  var required_tags = [];
  var filterByDropdown = function(){
    var selectTags = $("select");
    required_tags = [];
    $.each(selectTags, function(t, tag){
      tagVal = $(tag).val();
      if (tagVal != ""){
        required_tags.push(tagVal);
      }
    })
    createFilterJson();
    loadJson(newJson);
    leftAlignArticle();
    setImageBoxHeight();
  };

  $( ".main-questions select").change(function() {
    filterByDropdown();
  });

  function containsAll(needles, haystack){
    for(var i = 0 , len = needles.length; i < len; i++){
      if($.inArray(needles[i], haystack) == -1) return false;
    }
    return true;
  }

  var createFilterJson = function(){
    requiredJson = [];
    if (required_tags.length > 0) {
      $.each(json, function(s, study){
        if (containsAll(required_tags, study.tags)){
          requiredJson.push(study);
        };
      });
    }

    newJson = []
    if (required_tags.length > 0){
      requiredJson = requiredJson;
    } else {
      requiredJson = json;
    };

    if (selectedTags.length > 0) {
      $.each(selectedTags, function(t,tag){
        $.each(requiredJson, function(s,study){
          if ($.inArray(tag, study.tags) > -1 && ($.inArray(study, newJson) < 0)) {
            newJson.push(study);
          };
        });
      });
    }

    if (selectedTags.length > 0){
      newJson = newJson
    } else {
      newJson = requiredJson
    }
  }

  var loadJson = function(newJson){
    newHtml= "";
    newHtml += "<h4 class='notice'>We found "+ newJson.length +" results</h4>"
    for(i = 0; i < newJson.length; i++){
      newHtml += "<article>";
      newHtml += "<div class='article-synopsis'>";
      newHtml += "<div class='article-image js-more'>";
      newHtml += "<img src='"+ newJson[i].picture +"'>";
      newHtml += "</div>";
      newHtml += "<div class='image-box'></div>";
      newHtml += "<div class='article-text'>";
      newHtml += "<h3>"+ newJson[i].name +"</h3>";
      newHtml += "<p class='preview js-more'>"+ newJson[i].preview +"</p>";
      newHtml += "</div>";
      newHtml += "<div class='meta-data'>";
      newHtml += "<span class='share-links'>";
      newHtml += "<a class='tag'><h4><i class='fa fa-twitter'></i></h4></a>";
      newHtml += "<a class='tag'><h4><i class='fa fa-envelope'></i></h4></a>";
      newHtml += "<a class='tag'><h4><i class='fa fa-facebook'></i></h4></a>";
      newHtml += "</span>";
      newHtml += "<div class='text-tags'>";
      newHtml += "<div class='tags'>";
      for(z = 0; z < newJson[i].tags.length; z++){
        newHtml += "<a class='tag'><h4>"+newJson[i].tags[z].charAt(0).toUpperCase() + newJson[i].tags[z].slice(1)+"</h4></a>";
      }
      newHtml += "</div>";
      newHtml += "<a class='article-link' target='_blank' href="+ newJson[i].link +">View</a>";
      newHtml += "</div>";
      newHtml += "</div>";
      newHtml += "</article>";
    }
    $(".cases").html(newHtml);
    expandCase();
    return false;
  };

  loadJson(json);
  leftAlignArticle();
  setImageBoxHeight();

  $(".aside-toggle").on("click", function(){
    selectedTags = [];
    filterByDropdown();
    var dataTags=$("aside .tag");
    for(i = 0; i < dataTags.length; i++){
      $(dataTags[i]).find("h4").css({"background-color":"white"});
    };
    return false;
  });

  $(document).on("click", "a.tag", function(){
    var clicked = $(this).data("tag");
    var found = $.inArray(clicked, selectedTags);
    if (found >= 0) {
      selectedTags.splice(found, 1);
      $(this).find("h4").css({"background-color":"white"});
    } else if( found < 0 ) {
      $(this).find("h4").css({"background-color":"#EEE"});
      selectedTags.push(clicked);
    }
    createFilterJson();
    loadJson(newJson);
    leftAlignArticle();
    setImageBoxHeight();
  });
});
