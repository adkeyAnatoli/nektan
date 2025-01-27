document.addEventListener("DOMContentLoaded", function () {
  const navElement = document.querySelector(".navbar-toggler");
  const navbar = document.querySelector(".navbar-collapse");
  navElement.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  const collapseSummary = document.querySelector("#collapseSummary");
  const collapse = document.querySelector("#read");
  if (collapse) {
    collapse.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("collapsed");
      collapseSummary.classList.toggle("collapse");
    });
  }

  const summary = document.querySelector("#summary-review");
  if (summary) {
    const navLinkBonuses = document.querySelector("#resume-tab");
    const navLinkDetails = document.querySelector("#details-tab");
    const contentBonuses = document.querySelector("#resume");
    const contentDetails = document.querySelector("#details");

    navLinkBonuses.addEventListener("click", function (e) {
      e.preventDefault();
      if (!this.classList.contains("active")) {
        this.classList.add("active");
        navLinkDetails.classList.remove("active");
        contentBonuses.classList.add("show", "active");
        contentDetails.classList.remove("show", "active");
      }
    });

    navLinkDetails.addEventListener("click", function (e) {
      e.preventDefault();
      if (!this.classList.contains("active")) {
        this.classList.add("active");
        navLinkBonuses.classList.remove("active");
        contentDetails.classList.add("show", "active");
        contentBonuses.classList.remove("show", "active");
      }
    });
  }
});
