import https from 'https';
https.get('https://svrn-alpha.vercel.app/assets/index-D69i6Mj1.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // Extract long strings that look like human text
    const textMatches = data.match(/"[^"]{15,}"/g);
    if (textMatches) {
      const texts = textMatches
        .map(s => s.replace(/"/g, ''))
        .filter(s => !s.match(/^[a-zA-Z0-9_\-\/.]+$/)) // filter out paths/variables
        .filter(s => s.includes(' ')); // must have spaces
      console.log(texts.join('\n'));
    }
  });
});
