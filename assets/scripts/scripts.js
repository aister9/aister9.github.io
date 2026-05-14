var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  document.getElementById("content_wrapper").classList.add("ltr_wrapper");

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/icons/whatsapp.png",
      },
      {
        name: globalData.twitter,
        active: globalData.twitter ? true : false,
        img: "../assets/images/icons/twitter.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        url: "/",
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.resume,
        active: globalData.resume ? true : false,
        url: "/",
        img: "../assets/images/icons/resume.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText = enHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText = enHomePageData.name;
    document.getElementById("home_job_title").innerText =
      enHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText = enHomePageData.home_title;
    document.getElementById("home_content").innerHTML = enHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Publications page data
  const setPublicationData = (id, data) => {
    document.getElementById(id).innerHTML = data
      .map(
        (publication) =>
          `
        <div class='publications_item'>
        <div class='publications_header'>
          ${
            publication.writers.length > 0
              ? publication.writers
                  .map((writer) => `<span>${writer}</span>`)
                  .join(", ")
              : ""
          }
          ${publication.date ? `<span>(${publication.date}).</span>` : ""}
          <h2>${publication.title}</h2>
        </div>
        <p>${publication.abstract}</p>
        <ul class='publications_footer'>
          ${
            publication.link &&
            `<li>
                <a href=${publication.link} target="_blank"> View </a>
              </li>`
          }
            ${
              publication.github &&
              `<li>
                  <a href=${publication.github} target="_blank"> Github</a>
                </li>`
            }
          
        </ul>
      </div>
     `
      )
      .join("");
  };

  function publicationsData() {
    document.getElementById("page_title").innerText = "Publications";

    document.getElementById("publications_type_one_title").innerHTML =
      enPublicationsPageData.type_one_title;

    setPublicationData(
      "publications_type_one_data",
      enPublicationsPageData.type_one_items
    );

    document.getElementById("publications_type_two_title").innerHTML =
      enPublicationsPageData.type_two_title;

    setPublicationData(
      "publications_type_two_data",
      enPublicationsPageData.type_two_items
    );

    document.getElementById("publications_type_three_title").innerHTML =
      enPublicationsPageData.type_three_title;

    setPublicationData(
      "publications_type_three_data",
      enPublicationsPageData.type_three_items
    );

    if (document.getElementById("publications_type_four_title")) {
      const fourthTitle = document.getElementById("publications_type_four_title");
      const fourthData = document.getElementById("publications_type_four_data");
      const hasFourthSection =
        enPublicationsPageData.type_four_title ||
        (enPublicationsPageData.type_four_items &&
          enPublicationsPageData.type_four_items.length > 0);

      fourthTitle.innerHTML = enPublicationsPageData.type_four_title || "";

      if (hasFourthSection) {
        setPublicationData(
          "publications_type_four_data",
          enPublicationsPageData.type_four_items
        );
        fourthTitle.style.display = "";
        fourthData.style.display = "";
      } else {
        fourthTitle.style.display = "none";
        fourthData.style.display = "none";
      }
    }
  }

  if (pathname === "/publications") {
    publicationsData();
  }

  // Study & Seminar page data
  function studySeminarData() {
    document.getElementById("page_title").innerText = "Study & Seminar";

    document.getElementById("study_seminar_title").innerHTML =
      enStudySeminarPageData.title;
    document.getElementById("study_seminar_data").innerHTML =
      enStudySeminarPageData.content;
  }

  if (pathname === "/study-seminar/" || pathname === "/study-seminar/index") {
    studySeminarData();
  }

  // Projects page data
  function projectsData() {
    document.getElementById("page_title").innerText = "Projects";
    document.getElementById("projects_title").innerHTML = enProjectsPageData.title;
    document.getElementById("projects_data").innerHTML = enProjectsPageData.items
      .map(
        (project) =>
          `<div class='publications_item'>
            <div class='publications_header'>
              ${project.period ? `<span>(${project.period}).</span>` : ""}
              <h2>${project.title}</h2>
            </div>
            <p>${project.abstract}</p>
            ${
              project.highlights.length > 0
                ? `<ul class='project_highlights'>
                    ${project.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
                  </ul>`
                : ""
            }
            ${
              project.link || project.github
                ? `<ul class='publications_footer'>
                    ${
                      project.link
                        ? `<li><a href=${project.link} target="_blank">View</a></li>`
                        : ""
                    }
                    ${
                      project.github
                        ? `<li><a href=${project.github} target="_blank">Github</a></li>`
                        : ""
                    }
                  </ul>`
                : ""
            }
          </div>`
      )
      .join("");
  }

  if (pathname === "/projects") {
    projectsData();
  }

  // Jobs page data
  function jobsData() {
    document.getElementById("page_title").innerText = "Experience";

    document.getElementById("jobs_title").innerHTML = enJobsPageData.title;

    document.getElementById("jobs_data").innerHTML = enJobsPageData.items
      .map(
        (job) =>
          `<div class='job_item'>
            <div class='job_header'>
              <div>
                <h1>${job.title},</h1>
                <h2> ${job.company}</h2>
              </div>
              <div>
                <span>${job.startData} - ${
            job.endDate ? job.endDate : "Now"
          }</span>
                <span class='job_location'>${job.location}</span>
              </div>
            </div>
            <p>${job.abstract}</p>
            ${
              job.achievements.length > 0
                ? `<div class="job_achievements">
                  <ul>
                    ${job.achievements
                      .map((achievement) => `<li>${achievement}</li>`)
                      .join("")}
                  </ul>
                </div>`
                : ""
            }
        </div>`
      )
      .join("");
  }

  if (pathname === "/jobs") {
    jobsData();
  }

  // Contact page data
  const contact_data = {
    contact_title: "Contact",
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title: globalData.enAddress,
        active: globalData.enAddress ? true : false,
      },
      {
        img: "../assets/images/icons/phone.png",
        title: globalData.phone,
        active: globalData.phone ? true : false,
      },
      {
        img: "../assets/images/icons/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/icons/twitter.png",
        url: globalData.twitter,
        name: globalData.twitterTitle,
        active: globalData.twitter ? true : false,
      },
      {
        img: "../assets/images/icons/whatsapp.png",
        url: globalData.whatsapp,
        name: globalData.whatsappTitle,
        active: globalData.whatsapp ? true : false,
      },
      {
        img: "../assets/images/icons/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/icons/orcid.png",
        url: globalData.orcid,
        name: globalData.orcidTitle,
        active: globalData.orcid ? true : false,
      },
      {
        img: "../assets/images/icons/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
      {
        img: "../assets/images/icons/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
    ],
  };

  function contactData() {
    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");
  }

  if (pathname === "/contact") {
    contactData();
  }
});
