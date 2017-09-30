/* globals Promise */

const HTMLS_PATH = './views/';

const htmlHandler = (function() {
    function getHtml(htmlName) {
        const htmlPath = `${HTMLS_PATH}${htmlName}.html`;

        return new Promise((resolve, reject) => {
            $.get(htmlPath)
                .done(resolve)
                .fail(reject);
        });
    }

    function setHtml(htmlName, targetSelector) {
        targetSelector = targetSelector || '#content';

        return getHtml(htmlName)
            .then(html => {
                $(targetSelector).html(html);
            }).catch(console.log);
    }

    return {
        getHtml,
        setHtml,
    };
}());

export default htmlHandler;
