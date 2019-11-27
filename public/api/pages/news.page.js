import {appendSimpleMessage} from "../ui/appendElements.js";
import LocalStorageManager from '../managers/LocalStorageManager.js';
import {getNews} from "../ui/domBlocks.js";

const localStorageManager = new LocalStorageManager();



const launchPage = () => {
    let allNews = localStorageManager.all('news');

    allNews.forEach(news => appendSimpleMessage('newsBlock', getNews(news)))
};

launchPage();