const fs = require('fs');

let pagePath = 'app/page.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');

const regex = /https:\/\/www\.thebackstorymedia\.com\/wp-content\/[^"']+/g;
const matches = pageContent.match(regex);
console.log('Found ' + (matches ? matches.length : 0) + ' broken image URLs in page.tsx');

pageContent = pageContent.replace(regex, 'https://placehold.co/600x400?text=Placeholder');
fs.writeFileSync(pagePath, pageContent);
console.log('Replaced broken images with placeholders in page.tsx');
