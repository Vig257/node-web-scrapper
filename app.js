// console.log('nodejs working')
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
    try {
        const response = await axios.get(url);
        const dom = cheerio.load(response.data);
        const title = dom('title').text();
        const text = dom.html()
        console.log('Title:', text);
        // Add more scraping logic here

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the scraper function
scrapeWebsite('https://www.salonsupremo.com');
