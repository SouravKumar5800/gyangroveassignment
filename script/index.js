import { populateRecommendedShow } from "./recommendedShow.js";
import { populateUpcomingShow } from "./upcommingShow.js";


const init = () => {
    populateRecommendedShow();
    populateUpcomingShow();
}


init();
