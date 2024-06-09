const fetch = require('node-fetch')
const cheerio = require('cheerio');
const fs = require('fs')
var i = 0
urls = ["https://www.pinterest.com/ideas/mens-fashion/924581335376/"]
doNotCrawl = new Array()

async function crawl(url) {
  console.log(doNotCrawl)
  if (doNotCrawl.includes(url)) return;
fetch(url)
  .then(async data => {
    const html = await data.text()
    const $ = cheerio.load(html)
    const images = $('img')
    for (image of images) {
      if (image.attribs.src.startsWith("/")){ source = url + image.attribs.src } else { source = image.attribs.src }
      if (source.startsWith("data:")) return;
      console.log(source)
      fetch(source).then(async raw => {
        buffer = Buffer.from(await raw.arrayBuffer())
        fs.createWriteStream("./images/" + i + ".jfif").write(buffer)
        i++
      })
    }
    const links = $('a')
    for (link of links) {
      urls.push(link.attribs.href)
      //console.log(urls)
    }
  })
  doNotCrawl.push(url)
}



for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)
for (url of urls) crawl(url)

