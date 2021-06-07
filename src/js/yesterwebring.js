// jacked from https://yesterwebring.neocities.org/script-min.js to allow me to customise how the webring is displayed on flamedfury.com

const DATA_FOR_WEBRING = `https://yesterwebring.neocities.org/webring.json`;

const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/css/styles.css" />

<div class="webring-flex">

</div>`;

class WebRing extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // e.g. https://css-tricks.com
    const thisSite = this.getAttribute("site");

    fetch(DATA_FOR_WEBRING)
      .then((response) => response.json())
      .then((sites) => {
        // Find the current site in the data
        const matchedSiteIndex = sites.findIndex(
          (site) => site.url === thisSite
        );

        const matchedSite = sites[matchedSiteIndex];

        let prevSiteIndex = matchedSiteIndex - 1;
        if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

        let nextSiteIndex = matchedSiteIndex + 1;
        if (nextSiteIndex > sites.length - 1) nextSiteIndex = 0;

        // console.log("sites[0].url is " + sites[0].url);
        // console.log("matchedSite.url is " + matchedSite.url);
        // console.log("matchedSite.name is " + matchedSite.name);
        // console.log(sites[0].url);

        const randomSiteIndex = this.getRandomInt(0, sites.length - 1);

        const cp = `
        <div class="prev"><a href="${sites[prevSiteIndex].url}" target="_blank">&#60; previous</a></div>
        <div class="ring"><a href="${sites[randomSiteIndex].url}" target="_blank">random</a> &#124;
        <a href="https://yesterwebring.neocities.org/members.html" target="_blank">members</a> &#124;
        <a href="https://yesterwebring.neocities.org" target="_blank">join</a></div>
        <div class="next"><a href="${sites[nextSiteIndex].url}" target="_blank">next &#62;</a></div>
        `;

        this.shadowRoot
          .querySelector(".webring-flex")
          .insertAdjacentHTML("afterbegin", cp);
      });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

window.customElements.define("yesterweb-css", WebRing);