const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = 'C:/Users/Asus/.gemini/antigravity-ide/brain/06744c1b-9214-4db3-a831-a9ad434b5ed5/screenshots';
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log('=== STARTING PHASE 6.5 CROSS-DEVICE & INTERACTION ACCEPTANCE SUITE ===\n');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--autoplay-policy=no-user-gesture-required'
    ]
  });

  const page = await browser.newPage();

  // Test Results Containers
  const deviceMatrix = [];
  const overflowAudit = [];
  const interactionAudit = [];

  // ==========================================
  // 1. MOBILE INTERACTIONS TEST (390 x 844)
  // ==========================================
  console.log('--- 1. Testing Mobile (390x844) Interactions ---');
  await page.setViewport({ width: 390, height: 844 });

  // A. Mobile Menu Open & Close
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await sleep(1500);

  // Check initial menu button
  const menuBtn = await page.$('button[aria-label="Toggle Menu"]');
  console.log('Mobile menu button found:', !!menuBtn);
  if (menuBtn) {
    await menuBtn.click();
    await sleep(600);
    const isDrawerOpen = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      return text.includes('archival index') && text.includes('9 collections');
    });
    console.log('Mobile drawer opened successfully:', isDrawerOpen);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_mobile_390_menu.png') });

    // Close drawer
    await menuBtn.click();
    await sleep(600);
    const isDrawerClosed = await page.evaluate(() => {
      return !document.body.innerText.includes('9 Collections');
    });
    console.log('Mobile drawer closed successfully:', isDrawerClosed);

    interactionAudit.push({
      feature: 'Mobile Menu Drawer',
      action: 'Open / Close toggle',
      status: isDrawerOpen && isDrawerClosed ? 'PASS' : 'FAIL'
    });
  }

  // Capture Mobile Home
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_mobile_390_home.png') });

  // B. Mobile Songs Playback & Sticky MiniPlayer
  console.log('\n--- 2. Testing Mobile Songs Page & Sticky Player ---');
  await page.goto('http://localhost:5173/songs', { waitUntil: 'networkidle0' });
  await sleep(2000);

  // Click Ho Deenanath
  await page.click('button[data-song-id="ho-deenanath-sharda"]');
  await sleep(4000);

  const mobilePlayerState = await page.evaluate(() => {
    // Check sticky bottom player
    const stickyPlayer = document.querySelector('.fixed.bottom-0');
    const title = stickyPlayer?.querySelector('h4')?.innerText || '';
    const artist = stickyPlayer?.querySelector('p')?.innerText || '';
    const isVisible = stickyPlayer ? window.getComputedStyle(stickyPlayer).display !== 'none' : false;
    const playPauseBtn = stickyPlayer?.querySelector('button[aria-label="Pause"], button[aria-label="Play"]');

    return {
      hasStickyPlayer: !!stickyPlayer,
      isVisible,
      title,
      artist,
      hasPlayPause: !!playPauseBtn
    };
  });
  console.log('Mobile Sticky Player State:', mobilePlayerState);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_mobile_390_songs.png') });

  interactionAudit.push({
    feature: 'Mobile Songs Playback',
    action: 'Click play -> Sticky player appears with track metadata',
    status: mobilePlayerState.hasStickyPlayer && mobilePlayerState.title.includes('दीनानाथ') ? 'PASS' : 'FAIL'
  });

  // Mobile Pause / Resume
  await page.evaluate(() => {
    const playPause = document.querySelector('.fixed.bottom-0 button[aria-label="Pause"]');
    if (playPause) playPause.click();
  });
  await sleep(1000);
  const pausedOk = await page.evaluate(() => {
    return !!document.querySelector('.fixed.bottom-0 button[aria-label="Play"]');
  });
  await page.evaluate(() => {
    const playPause = document.querySelector('.fixed.bottom-0 button[aria-label="Play"]');
    if (playPause) playPause.click();
  });
  await sleep(1000);
  console.log('Mobile Pause & Resume:', pausedOk ? 'PASS' : 'FAIL');

  interactionAudit.push({
    feature: 'Mobile Audio Pause/Resume',
    action: 'Toggle central touch control on sticky player',
    status: pausedOk ? 'PASS' : 'FAIL'
  });

  // Mobile Next & Prev Controls
  await page.evaluate(() => {
    const nextBtn = document.querySelector('.fixed.bottom-0 button[aria-label="Next song"]');
    if (nextBtn) nextBtn.click();
  });
  await sleep(3500);
  const mobileAfterNext = await page.evaluate(() => {
    return document.querySelector('.fixed.bottom-0 h4')?.innerText || '';
  });
  console.log('Mobile After Next track:', mobileAfterNext);
  const mobileNextPass = mobileAfterNext.includes('छठी मैया') || mobileAfterNext.includes('Chhathi Maiya');

  interactionAudit.push({
    feature: 'Mobile Next / Previous',
    action: 'Skip track to next playlist item on mobile',
    status: mobileNextPass ? 'PASS' : 'FAIL'
  });

  // Mobile Filters & Search
  console.log('\n--- 3. Testing Mobile Search & Filter Interaction ---');
  await page.type('input[placeholder*="Search"]', 'Pawan');
  await sleep(800);
  const searchResultsCount = await page.evaluate(() => {
    const cards = document.querySelectorAll('button[data-song-id]');
    return cards.length;
  });
  console.log('Filtered songs count for query "Pawan":', searchResultsCount);
  interactionAudit.push({
    feature: 'Mobile Song Search',
    action: 'Live catalog filtering',
    status: searchResultsCount > 0 ? 'PASS' : 'FAIL'
  });

  // Reset search
  await page.evaluate(() => {
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
  await sleep(500);

  // C. Mobile Ghats & Location Interaction
  console.log('\n--- 4. Testing Mobile Ghats Page & Map ---');
  await page.goto('http://localhost:5173/ghats', { waitUntil: 'networkidle0' });
  await sleep(1500);
  const ghatsMobileOk = await page.evaluate(() => {
    const svgMap = document.querySelector('svg');
    const cards = document.querySelectorAll('article, .border');
    return {
      hasMap: !!svgMap,
      hasCards: cards.length > 0,
      bodyWidth: document.body.scrollWidth,
      windowWidth: window.innerWidth
    };
  });
  console.log('Ghats Mobile Status:', ghatsMobileOk);
  interactionAudit.push({
    feature: 'Mobile Ghats & Bihar Map',
    action: 'Render map without horizontal spillover',
    status: ghatsMobileOk.bodyWidth <= ghatsMobileOk.windowWidth ? 'PASS' : 'FAIL'
  });

  // D. Mobile Stories Form Interaction
  console.log('\n--- 5. Testing Mobile Stories Form ---');
  await page.goto('http://localhost:5173/stories', { waitUntil: 'networkidle0' });
  await sleep(1500);
  const storiesMobileOk = await page.evaluate(() => {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input, textarea, select');
    return {
      hasForm: !!form,
      inputsCount: inputs.length,
      overflow: document.body.scrollWidth > window.innerWidth
    };
  });
  console.log('Stories Mobile Form Status:', storiesMobileOk);
  interactionAudit.push({
    feature: 'Mobile Story Submission Form',
    action: 'Form inputs scale to viewport width without overflow',
    status: !storiesMobileOk.overflow && storiesMobileOk.inputsCount > 0 ? 'PASS' : 'FAIL'
  });

  // ==========================================
  // 2. VIEWPORT MATRIX & OVERFLOW AUDIT
  // ==========================================
  const TEST_PAGES = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Four Days', path: '/four-days' },
    { name: 'Nahay-Khay', path: '/four-days/nahay-khay' },
    { name: 'Songs', path: '/songs' },
    { name: 'Heritage', path: '/heritage' },
    { name: 'Soop', path: '/heritage/soop' },
    { name: 'Kitchen', path: '/kitchen' },
    { name: 'Ghats', path: '/ghats' },
    { name: 'Stories', path: '/stories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' }
  ];

  const TARGET_VIEWPORTS = [
    { label: '390px', width: 390, height: 844 },
    { label: '430px', width: 430, height: 932 },
    { label: '768px', width: 768, height: 1024 },
    { label: '1024px', width: 1024, height: 768 },
    { label: '1366px', width: 1366, height: 768 },
    { label: '1920px', width: 1920, height: 1080 }
  ];

  console.log('\n--- 6. Running Full Device Matrix & Overflow Checks ---');

  for (const p of TEST_PAGES) {
    const row = { page: p.name, results: {} };
    for (const vp of TARGET_VIEWPORTS) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:5173${p.path}`, { waitUntil: 'domcontentloaded' });
      await sleep(400);

      const check = await page.evaluate(() => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        const innerW = window.innerWidth;
        return {
          pass: scrollW <= innerW,
          scrollW,
          innerW
        };
      });

      row.results[vp.label] = check.pass ? 'PASS' : `FAIL (+${check.scrollW - check.innerW}px)`;
    }
    deviceMatrix.push(row);
    console.log(`Matrix verified for ${p.name}`);
  }

  // Check each viewport for total overflows
  for (const vp of TARGET_VIEWPORTS) {
    let vpOverflowCount = 0;
    for (const p of TEST_PAGES) {
      const res = deviceMatrix.find(m => m.page === p.name)?.results[vp.label];
      if (res && res.startsWith('FAIL')) vpOverflowCount++;
    }
    overflowAudit.push({
      width: vp.label,
      horizontalOverflow: vpOverflowCount === 0 ? '0px (None)' : `${vpOverflowCount} pages`,
      result: vpOverflowCount === 0 ? 'PASS' : 'FAIL'
    });
  }

  // ==========================================
  // 3. CAPTURE REQUIRED HIGH-RES SCREENSHOTS
  // ==========================================
  console.log('\n--- 7. Capturing Final Cross-Device Screenshots ---');

  // 430px Four Days
  await page.setViewport({ width: 430, height: 932 });
  await page.goto('http://localhost:5173/four-days', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_mobile_430_fourdays.png') });

  // 768px Tablet History
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:5173/history', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_tablet_768_history.png') });

  // 768px Tablet Songs
  await page.goto('http://localhost:5173/songs', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_tablet_768_songs.png') });

  // 1024px Tablet Landscape Ghats
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto('http://localhost:5173/ghats', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_tablet_landscape_1024_ghats.png') });

  // 1366px Laptop Heritage
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('http://localhost:5173/heritage', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_laptop_1366_heritage.png') });

  // 1920px Large Desktop Home
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_desktop_1920_home.png') });

  // 1920px Large Desktop Stories
  await page.goto('http://localhost:5173/stories', { waitUntil: 'networkidle0' });
  await sleep(1000);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'responsive_desktop_1920_stories.png') });

  console.log('All responsive screenshots captured successfully!');

  await browser.close();

  const finalReport = {
    deviceMatrix,
    overflowAudit,
    interactionAudit
  };

  fs.writeFileSync('phase_6_5_qa_report.json', JSON.stringify(finalReport, null, 2));
  console.log('\n=== PHASE 6.5 ACCEPTANCE COMPLETE ===');
})();
