import JqueryManager from "../managers/JqueryManager.js";

const fansAppealProcessor = () => {
    const jqueryManager = new JqueryManager();

    $(document).ready(() => {
        console.log('Document loaded...');

        $('#submitForm').submit(event => {
            event.preventDefault();
            jqueryManager.onSubmitHandler('APPEALS', '#username', '#title', '#appealBody')
        })


    })
};

fansAppealProcessor();