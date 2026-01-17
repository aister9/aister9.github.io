var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Language Handler
  const supportedLanguages = ["en", "kr", "jp"];
  const languageOrder = ["en", "kr", "jp"];
  const languageMeta = {
    en: { label: "EN", icon: "../assets/images/icons/en.png" },
    kr: { label: "KR", icon: "../assets/images/icons/en.png" },
    jp: { label: "JP", icon: "../assets/images/icons/en.png" },
  };

  if (!lang || !supportedLanguages.includes(lang)) {
    lang = "en";
    localStorage.setItem("lang", "en");
  }

  document.getElementById("content_wrapper").classList.add("ltr_wrapper");

  const nextLanguage =
    languageOrder[(languageOrder.indexOf(lang) + 1) % languageOrder.length];

  if (
    document.getElementById("languageIcon") &&
    document.getElementById("languageText")
  ) {
    document.getElementById("languageIcon").src =
      languageMeta[nextLanguage].icon;
    document.getElementById("languageText").innerText =
      languageMeta[nextLanguage].label;
  }

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
    const homePageData = {
      en: enHomePageData,
      kr: krHomePageData,
      jp: jpHomePageData,
    };
    const activeHomeData = homePageData[lang] || enHomePageData;

    document.getElementById("page_title").innerText = activeHomeData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText = activeHomeData.name;
    document.getElementById("home_job_title").innerText =
      activeHomeData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText =
      activeHomeData.home_title;
    document.getElementById("home_content").innerHTML =
      activeHomeData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Publications page data
  const setPublicationData = (id, data) => {
    const uiLabels = {
      en: { view: "View", github: "Github" },
      kr: { view: "보기", github: "깃허브" },
      jp: { view: "表示", github: "GitHub" },
    };
    const activeLabels = uiLabels[lang] || uiLabels.en;

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
                <a href=${publication.link} target="_blank"> ${
              activeLabels.view
            } </a>
              </li>`
          }
            ${
              publication.github &&
              `<li>
                  <a href=${publication.github} target="_blank">  ${
                activeLabels.github
              }</a>
                </li>`
            }
          
        </ul>
      </div>
     `
      )
      .join("");
  };

  function publicationsData() {
    const publicationsPageData = {
      en: enPublicationsPageData,
      kr: krPublicationsPageData,
      jp: jpPublicationsPageData,
    };
    const activePublicationsData =
      publicationsPageData[lang] || enPublicationsPageData;
    const pageTitles = {
      en: "Publications",
      kr: "출판물",
      jp: "出版物",
    };

    document.getElementById("page_title").innerText =
      pageTitles[lang] || pageTitles.en;

    document.getElementById("publications_type_one_title").innerHTML =
      activePublicationsData.type_one_title;

    setPublicationData(
      "publications_type_one_data",
      activePublicationsData.type_one_items
    );

    document.getElementById("publications_type_two_title").innerHTML =
      activePublicationsData.type_two_title;

    setPublicationData(
      "publications_type_two_data",
      activePublicationsData.type_two_items
    );

    document.getElementById("publications_type_three_title").innerHTML =
      activePublicationsData.type_three_title;

    setPublicationData(
      "publications_type_three_data",
      activePublicationsData.type_three_items
    );
  }

  if (pathname === "/publications") {
    publicationsData();
  }

  // Research page data
  function researchData() {
    const researchPageData = {
      en: enResearchPageData,
      kr: krResearchPageData,
      jp: jpResearchPageData,
    };
    const activeResearchData = researchPageData[lang] || enResearchPageData;
    const pageTitles = {
      en: "Research",
      kr: "연구",
      jp: "研究",
    };

    document.getElementById("page_title").innerText =
      pageTitles[lang] || pageTitles.en;

    document.getElementById("research_title").innerHTML =
      activeResearchData.title;
    document.getElementById("research_data").innerHTML =
      activeResearchData.content;
  }

  if (pathname === "/research") {
    researchData();
  }

  // Jobs page data
  function jobsData() {
    const jobsPageData = {
      en: enJobsPageData,
      kr: krJobsPageData,
      jp: jpJobsPageData,
    };
    const activeJobsData = jobsPageData[lang] || enJobsPageData;
    const pageTitles = {
      en: "Jobs",
      kr: "경력",
      jp: "職歴",
    };
    const nowLabels = {
      en: "Now",
      kr: "현재",
      jp: "現在",
    };

    document.getElementById("page_title").innerText =
      pageTitles[lang] || pageTitles.en;

    document.getElementById("jobs_title").innerHTML = activeJobsData.title;

    document.getElementById("jobs_data").innerHTML = activeJobsData.items
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
            job.endDate ? job.endDate : nowLabels[lang] || nowLabels.en
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
    contact_title:
      (lang === "en" && "Contact") ||
      (lang === "kr" && "연락처") ||
      (lang === "jp" && "連絡先") ||
      "Contact",
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title:
          (lang === "en" && globalData.enAddress) ||
          (lang === "kr" && globalData.krAddress) ||
          (lang === "jp" && globalData.jpAddress) ||
          globalData.enAddress,
        active:
          globalData.enAddress || globalData.krAddress || globalData.jpAddress
            ? true
            : false,
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
