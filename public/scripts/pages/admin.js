import JqueryManager from "../managers/JqueryManager.js";

const adminProcessor = () => {
    const jqueryManager = new JqueryManager();

    $(document).ready(() => {
        console.log('Document loaded...');

        $('#submitForm').submit(event => {
            event.preventDefault();
            jqueryManager.onSubmitHandler('NEWS', '#title', '#newsBody')
        })
    })
};

adminProcessor();