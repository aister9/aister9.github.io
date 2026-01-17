$(document).ready(function () {
  let lang = localStorage.getItem("lang");

  const supportedLanguages = ["en", "kr", "jp"];
  if (!lang || !supportedLanguages.includes(lang)) {
    lang = "en";
    localStorage.setItem("lang", "en");
  }

  const navbarByLang = {
    en: enNavbarData,
    kr: krNavbarData,
    jp: jpNavbarData,
  };
  const activeNavbarData = navbarByLang[lang] || enNavbarData;

  const navbar_data = {
    title: activeNavbarData.title,
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: activeNavbarData.Home,
        url: "/",
      },
      {
        active: navbarLinks.publications ? true : false,
        title: activeNavbarData.publications,
        url: "/publications.html",
      },
      {
        active: navbarLinks.research ? true : false,
        title: activeNavbarData.Research,
        url: "/research.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: activeNavbarData.Jobs,
        url: "/jobs.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: activeNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };

  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              <a
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");
  }

  navbarData();
});
