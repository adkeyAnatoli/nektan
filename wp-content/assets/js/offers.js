document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.adkey-seo.com/api/website/get-website/671")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {

      const allMainLinks = document.querySelectorAll(".js-href-main");
      const allSecondLinks = document.querySelectorAll(".card");
      let j = 0;

      for (let i = 0; i < allSecondLinks.length; i++) {
        j += 1;
        if (j >= data.offers.length) {
          j = 0;
        }
        const linkList = allSecondLinks[i].querySelectorAll(".js-href-second");
        linkList.forEach((el) => {
          el.setAttribute("href", data.offers[j].link);
        });
      }

      allMainLinks.forEach((el) => {
        el.setAttribute("href", data.offers[0].link);
      });
    })
    .catch((error) => {
      console.error("Request error:", error);
    });
});
