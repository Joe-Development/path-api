const scrape = require('path-api');

(async () => {
    try {
        const status = await scrape();
        console.log('Status:', status);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
