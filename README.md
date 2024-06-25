# Path-api

A simple npm package to scrape the status from Path.net using Axios and Cheerio.

## Installation

To install the package, use npm:

```bash
npm install path-api
```

## Usage

Import the package and call the `scrape()` function to retrieve the status:

```js
const scrape = require('path-api');

async function getStatus() {
    try {
        const status = await scrape();
        console.log('Path.net status:', status);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getStatus();
```


### Dependencies
Axios: "^0.24.0"
Cheerio: "^1.0.0-rc.12"
- License
- | This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
- Axios: For making HTTP requests simple.
- Cheerio: For parsing HTML and manipulating the DOM.

