import { NextResponse } from 'next/server'

export async function GET() {
    // 这里可以根据实际情况动态生成 sitemap 内容
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.toop.club/</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/ai-therapy.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/anxiety-relief.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/emergency.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/emotional-wellbeing.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/how-to-talk.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/loneliness.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/mood-tracking.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/social-anxiety.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/guides/stress-management.html</loc>
  </url>
  <url>
    <loc>https://www.toop.club/hot-emotion-guide.html</loc>
  </url>
</urlset>`
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'X-Robots-Tag': 'all',
            'Access-Control-Allow-Origin': '*',
        },
    })
} 