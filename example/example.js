const status = require('path-api');

(async () => {
    try {
        const path = await status();
        console.log('Status:', path);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
