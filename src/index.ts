import axios from 'axios';
import cheerio from 'cheerio';

async function scrapePathStatus(): Promise<string> {
    const url = 'https://status.path.net';
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const statusText = $('.status.font-large').text().trim();
        return statusText;
    } catch (error) {
        throw new Error(`Error fetching or parsing data: ${error}`);
    }
}

export default scrapePathStatus;
