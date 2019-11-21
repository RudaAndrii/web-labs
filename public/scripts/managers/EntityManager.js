import UiManager from "./UiManager.js";
import UserManager from "./UserManager.js";
import NewsManager from "./NewsManager.js";

export default class EntityManager {
    constructor() {
        this.uiManager = new UiManager();
        this.userManager = new UserManager();
        this.newsManager = new NewsManager();
    }

    async save(type, object) {
        this.uiManager.emptyList('#errorBlock');

        if (type === 'APPEALS') {
            await this.userManager.save(object);
        } else if (type === 'NEWS') {
            await this.newsManager.save(object);
        }

        this.uiManager.generateSuccess('#successBlock', 'Successfully saved!');
    }
}