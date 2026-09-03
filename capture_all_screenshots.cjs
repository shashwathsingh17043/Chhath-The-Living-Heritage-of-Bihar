const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const pagesToCapture = [
  { name: '01_Home', path: '/', title: 'Home Page' },
  { name: '02_History', path: '/history', title: 'History & Vedic Origins' },
  { name: '03_Four_Days_Overview', path: '/four-days', title: '4 Days Rituals Overview' },
  { name: '04_Nahay_Khay', path: '/four-days/nahay-khay', title: 'Day 1: Nahay Khay' },
  { name: '05_Kharna', path: '/four-days/kharna', title: 'Day 2: Kharna' },
  { name: '06_Sandhya_Arghya', path: '/four-days/sandhya-arghya', title: 'Day 3: Sandhya Arghya' },
  { name: '07_Usha_Arghya', path: '/four-days/usha-arghya', title: 'Day 4: Usha Arghya' },
  { name: '08_Songs', path: '/songs', title: 'Traditional Songs Archive' },
  { name: '09_Verify_Songs', path: '/verify-songs', title: 'Song Verification' },
  { name: '10_Heritage', path: '/heritage', title: 'Living Heritage' },
  { name: '11_Heritage_Soop', path: '/heritage/soop', title: 'Heritage Object: Soop' },
  { name: '12_Heritage_Daura', path: '/heritage/daura', title: 'Heritage Object: Daura' },
  { name: '13_Heritage_Thekua', path: '/heritage/thekua', title: 'Heritage Object: Thekua' },
  { name: '14_Heritage_Kosi', path: '/heritage/kosi', title: 'Heritage Object: Kosi' },
  { name: '15_Heritage_Diya', path: '/heritage/diya', title: 'Heritage Object: Diya' },
  { name: '16_Heritage_Sugarcane', path: '/heritage/sugarcane', title: 'Heritage Object: Sugarcane' },
  { name: '17_Kitchen', path: '/kitchen', title: 'Traditional Chhath Kitchen' },
  { name: '18_Ghats', path: '/ghats', title: 'Sacred Ghats & Sun Temples' },
  { name: '19_Ghat_Patna', path: '/ghats/patna', title: 'Ghat Detail: Patna Ghats' },
  { name: '20_Ghat_Deo', path: '/ghats/deo', title: 'Ghat Detail: Deo Sun Temple' },
  { name: '21_Stories', path: '/stories', title: 'Oral Histories & Memories' },
  { name: '22_Story_Dadi_Ka_Chhath', path: '/stories/dadi-ka-chhath', title: 'Story Detail: Grandmother\'s Chhath' },
  { name: '23_Gallery', path: '/gallery', title: 'Visual Archive Gallery' },
  { name: '24_About', path: '/about', title: 'About & Project Mission' }
];

const artifactDir = 'C:\\Users\\Asus\\.gemini\\antigravity-ide\\brain\\06744c1b-9214-4db3-a831-a9ad434b5ed5\\screenshots';
const localScreenshotsDir = path.join(__dirname, 'screenshots');

[localScreenshotsDir, artifactDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function captureAll() {
  console.log(`Starting capture of ${pagesToCapture.length} pages...`);
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  for (let i = 0; i < pagesToCapture.length; i++) {
    const item = pagesToCapture[i];
    const targetUrl = `http://localhost:5173${item.path}`;
    console.log(`[${i + 1}/${pagesToCapture.length}] Capturing ${item.name} (${targetUrl})...`);

    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 20000 });
      // Short delay for React framer-motion animations and image assets
      await new Promise(r => setTimeout(r, 600));

      const localFile = path.join(localScreenshotsDir, `${item.name}.png`);
      const artifactFile = path.join(artifactDir, `${item.name}.png`);

      await page.screenshot({ path: localFile, fullPage: false });
      fs.copyFileSync(localFile, artifactFile);

      console.log(`  ✓ Saved: ${item.name}.png`);
    } catch (err) {
      console.error(`  ✗ Error capturing ${item.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

captureAll().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
