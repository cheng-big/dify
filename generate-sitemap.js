const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.toop.club'; // 你的域名
const PUBLIC_DIR = path.join(__dirname, 'public');
const EXCLUDE = ['404.html', 'favicon.ico']; // 可排除不想收录的文件

function walk(dir, baseUrl = '') {
    let urls = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const relPath = path.relative(PUBLIC_DIR, fullPath);
        if (fs.statSync(fullPath).isDirectory()) {
            urls = urls.concat(walk(fullPath, path.join(baseUrl, file)));
        } else if (file.endsWith('.html') && !EXCLUDE.includes(file)) {
            let url = '/' + relPath.replace(/\\/g, '/');
            if (url.endsWith('index.html')) url = url.replace(/index\.html$/, '');
            urls.push(url);
        }
    }
    return urls;
}

let urls = walk(PUBLIC_DIR);
// 确保首页 '/' 总是在 sitemap 中
if (!urls.includes('/')) {
    urls.unshift('/');
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${DOMAIN}${url}</loc>
  </url>
`).join('')}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap, 'utf8');
console.log('Sitemap generated with', urls.length, 'URLs.'); 