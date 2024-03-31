import { getDate } from "./utils.js";

const RECOMMENDED_SHOW_URL = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ%3D%3D&type=reco";


const getRecommendedShowCard = (showDetails) => {
    return `
    <div class="recommended-show__card">
            <div class="recommended-show__card-details">
                <div class="show-details">
                    <p class="show-name text-align--left">${showDetails.eventName}</p>
                    <p class="show-date text-align--right">${getDate(showDetails.date)}</p>
                </div>
                <div class="show-desc">
                    <p class="show-location text-align--left">
                        <img src="./assets/icons/location.svg" alt="location">
                        <span>${showDetails.cityName}</span>
                    </p>
                    <p class="location-data text-align--right">${showDetails.weather} | ${parseFloat(showDetails.distanceKm).toFixed(2)} km</p>
                </div>
            </div>
        </div>
    `;
}

export const populateRecommendedShow = async () => {
    const recommendedShow = document.querySelector(".recommended-show__data");
    const showData = await fetch(RECOMMENDED_SHOW_URL).then(data => data.json());

    const showHtml = showData.events.map((event) => {
        return getRecommendedShowCard(event);
    }).join("\n");

    recommendedShow.innerHTML = showHtml;
}
