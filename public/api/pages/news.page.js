import {appendSimpleMessage} from "../ui/appendElements.js";
import {getNews} from "../ui/domBlocks.js";

const launchPage = () => {
    let allNews = fetch("http://localhost:3000/allnews", {
        credentials: 'same-origin',
        method: "GET",
    }).then((response) => {
        response.json()
            .then(newsList => {
                newsList.forEach(news => {
                        console.log(news);
                        appendSimpleMessage('newsBlock', getNews(news))
                    }
                )}
            );
    });

};

launchPage();