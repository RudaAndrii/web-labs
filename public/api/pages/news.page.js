import {appendSimpleMessage} from "../ui/appendElements.js";
import DBManager from '../managers/DBManager.js';
import {getNews} from "../ui/domBlocks.js";
import useLocalStorage from '../constant/DBConfig.js';

const dbManager = new DBManager();



const launchPage = () => {
    if(useLocalStorage) {
        let allNews = dbManager.all('news');
        allNews.forEach(news => appendSimpleMessage('newsBlock', getNews(news)));
    } else {
        dbManager.all('news').then((items) => {
            items.forEach(news => appendSimpleMessage('newsBlock', getNews(news)));
        });
    }
};

launchPage();