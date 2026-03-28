import https from 'https';

const urls = [
  'https://github.com/tobiasblask.png',
  'https://raw.githubusercontent.com/tobiasblask/tobiasblask/main/2026-01-28_10-18-59.jpg',
  'https://raw.githubusercontent.com/tobiasblask/profile/main/2026-01-28_10-18-59.jpg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(e);
  });
});
