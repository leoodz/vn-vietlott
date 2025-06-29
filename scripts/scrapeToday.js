// scripts/scrapeToday.js
const axios = require('axios');
const cheerio = require('cheerio');

function slugFromDate(d) {
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  return `${dd}-${mm}-${d.getFullYear()}`;
}

function parsePrize($, label) {
  const row = $(`td.giai_thuong_text:contains("${label}")`).closest('tr');
  const count = parseInt(row.find('td[id^="DT6X55_S"]').text().trim().replace(/,/g,''),10);
  const amount = row.find('td.giai_thuong_gia_tri b').text().trim();
  return { count, amount };
}

async function fetchDrawByDate(slug) {
  const url = `https://www.minhngoc.net.vn/ket-qua-xo-so/dien-toan-vietlott/power-6x55/${slug}.html`;
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);
  const raw = $('ul.result-number li div.bool').map((_,el) => $(el).text().trim()).get();
  if (raw.length < 7) throw new Error('No valid numbers');
  return {
    date: slug,
    numbers: raw.slice(0,6),
    bonus: raw[6],
    prizes: {
      jackpot1: parsePrize($, 'Jackpot 1'),
      jackpot2: parsePrize($, 'Jackpot 2'),
      giai_nhat: parsePrize($, 'Giải nhất'),
      giai_nhi: parsePrize($, 'Giải nhì'),
      giai_ba: parsePrize($, 'Giải ba'),
    }
  };
}

module.exports = async function scrapeToday() {
  const today = new Date();
  const slug = slugFromDate(today);
  return await fetchDrawByDate(slug);
};
