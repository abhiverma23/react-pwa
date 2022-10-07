function register() {
    if ('serviceWorker' in navigator) {
        const url = `${process.env.PUBLIC_URL}/sw.js`;
        console.log("URL: ", url);
        /*navigator.serviceWorker.register(url).then(response => {
            console.warn("Response: ", response);
        });*/
    } else {
        console.error("Service workder service not available");
    }
}

const serviceWorker = {
    register
};

export default serviceWorker;