import { getDate } from "./utils.js";

const getUpcomingShowUrl = (pageNumber) => `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ%3D%3D&page=${pageNumber}&type=upcoming`;

let pageData = {currentPage: 1, totalPages: null};
let observedChild;

const getUpcomingShowCard = (showDetails) => {
    return `
    <div class="upcoming-show__card">
                <div class="upcoming-show__image">
                    <img src="./assets/images/card2.svg" alt="">
                    <p>${getDate(showDetails.date)}</p>
                </div>
                <div class="upcoming-show__details color-gray">
                    <p class="title">${showDetails.eventName}</p>
                    <p class="show-details">
                        <span class="address text-align--left">
                            <img src="./assets/icons/location.svg" alt="location">
                            <span>${showDetails.cityName}</span>
                        </span>
                        <span>
                        ${showDetails.weather} | ${parseFloat(showDetails.distanceKm).toFixed(2)} km
                        </span>
                    </p>
                </div>
            </div>
    `;
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        observer.unobserve(observedChild);
        if (pageData.currentPage < pageData.totalPages) {
            pageData.currentPage += 1;
            populateUpcomingShow(pageData.currentPage);
        }
      }
    });
  }

const fetchNextPages = () => {
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
      };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observedChild = document.querySelector(".upcoming-show__data").lastElementChild;

    observer.observe(observedChild);
}


export const populateUpcomingShow = async (page = 1) => {
    const upcomingShow = document.querySelector(".upcoming-show__data");

    const showData = await fetch(getUpcomingShowUrl(page)).then(data => data.json());

    pageData = {currentPage: showData.page, totalPages: showData.totalPages}

    const showHtml = showData.events.map((event) => {
        return getUpcomingShowCard(event);
    }).join("\n");

    upcomingShow.innerHTML += showHtml;

    fetchNextPages();
}
