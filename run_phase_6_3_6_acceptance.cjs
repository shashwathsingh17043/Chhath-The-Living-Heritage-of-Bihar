const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log('=== RUNNING PHASE 6.3.6 ACCEPTANCE: NO VISIBLE YT VIDEO PLAYER ===\n');

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
  await page.setViewport({ width: 1440, height: 950 });

  const browserLogs = [];
  page.on('console', msg => {
    const text = msg.text();
    browserLogs.push(text);
    if (text.includes('[song-click]') || text.includes('[player-') || text.includes('[YT]') || text.includes('Gate]')) {
      console.log('  [BROWSER LOG]', text);
    }
  });

  // 1. Navigate to /songs
  console.log('Navigating to http://localhost:5173/songs...');
  await page.goto('http://localhost:5173/songs', { waitUntil: 'networkidle0', timeout: 30000 });
  await sleep(3000);

  // 2. VERIFY NO VISIBLE YOUTUBE VIDEO PLAYER
  console.log('\n--- VERIFICATION 1: Checking YouTube IFrame Visibility ---');
  const iframeVisibility = await page.evaluate(() => {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    if (iframes.length === 0) return { count: 0, visible: false };

    const visibleIframes = iframes.filter(iframe => {
      const rect = iframe.getBoundingClientRect();
      const style = window.getComputedStyle(iframe);
      return (
        rect.width > 10 &&
        rect.height > 10 &&
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        parseFloat(style.opacity || '1') > 0.1
      );
    });

    return {
      totalCount: iframes.length,
      visibleCount: visibleIframes.length,
      isCompletelyInvisible: visibleIframes.length === 0,
      dimensions: iframes.map(f => ({
        width: f.getBoundingClientRect().width,
        height: f.getBoundingClientRect().height,
        opacity: window.getComputedStyle(f).opacity
      }))
    };
  });

  console.log('IFrame Visibility Assessment:', iframeVisibility);
  const noVisibleYouTubePass = iframeVisibility.isCompletelyInvisible;
  console.log('No Visible YouTube Player Check:', noVisibleYouTubePass ? 'PASS' : 'FAIL');

  // 3. VERIFY CUSTOM ARCHIVE PLAYBACK CONSOLE
  console.log('\n--- VERIFICATION 2: Custom Archive Playback Console Elements ---');
  const consoleElements = await page.evaluate(() => {
    const aside = document.querySelector('aside');
    if (!aside) return { found: false };

    const hasNowPlayingHeader = aside.innerText.includes('NOW PLAYING');
    const hasOfficialAudioBadge = aside.innerText.includes('Official Audio');
    const hasAttribution = aside.innerText.includes('Playback source: YouTube');
    const hasSlider = !!aside.querySelector('input[type="range"]');
    const hasArtwork = !!aside.querySelector('img');
    const hasControls = !!aside.querySelector('button[aria-label*="audio"]') || !!aside.querySelector('button[aria-label*="Play"]');

    return {
      found: true,
      hasNowPlayingHeader,
      hasOfficialAudioBadge,
      hasAttribution,
      hasSlider,
      hasArtwork,
      hasControls
    };
  });
  console.log('Custom Console Inspection:', consoleElements);

  // Helper to read current player state
  async function getConsoleState() {
    return await page.evaluate(() => {
      const aside = document.querySelector('aside');
      const title = aside?.querySelector('h4')?.innerText || '';
      const artist = aside?.querySelector('p')?.innerText || '';
      const slider = aside?.querySelector('input[type="range"]');
      const curTime = slider?.parentElement?.previousElementSibling?.innerText || '';
      const durTime = slider?.parentElement?.nextElementSibling?.innerText || '';
      const artworkSrc = aside?.querySelector('img')?.src || '';
      const attributionText = aside?.querySelector('.border-t')?.innerText || '';

      return {
        title,
        artist,
        sliderVal: slider ? slider.value : null,
        curTime,
        durTime,
        artworkSrc,
        attributionText
      };
    });
  }

  // 4. TEST CLICK "Ho Deenanath"
  console.log('\n--- VERIFICATION 3: Playback of Ho Deenanath ---');
  await page.click('button[data-song-id="ho-deenanath-sharda"]');
  await sleep(4000);

  const hoState = await getConsoleState();
  console.log('Playback state after clicking Ho Deenanath:', hoState);

  const hoPass = hoState.title.includes('Ho Deenanath') &&
                 hoState.artist.includes('Sharda Sinha') &&
                 hoState.curTime !== '' &&
                 hoState.attributionText.includes('YouTube');

  // 5. TEST PAUSE & RESUME
  console.log('\n--- VERIFICATION 4: Custom Pause & Resume ---');
  await page.evaluate(() => {
    const playPauseBtn = Array.from(document.querySelectorAll('aside button')).find(b =>
      b.getAttribute('aria-label')?.includes('Pause') || b.getAttribute('aria-label')?.includes('Play')
    );
    if (playPauseBtn) playPauseBtn.click();
  });
  await sleep(1500);
  console.log('Pause action triggered.');

  await page.evaluate(() => {
    const playPauseBtn = Array.from(document.querySelectorAll('aside button')).find(b =>
      b.getAttribute('aria-label')?.includes('Play') || b.getAttribute('aria-label')?.includes('Pause')
    );
    if (playPauseBtn) playPauseBtn.click();
  });
  await sleep(1500);
  console.log('Resume action triggered.');

  // 6. TEST SEEK
  console.log('\n--- VERIFICATION 5: Custom Seek ---');
  await page.evaluate(() => {
    const slider = document.querySelector('aside input[type="range"]');
    if (slider) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(slider, '25');
      slider.dispatchEvent(new Event('input', { bubbles: true }));
      slider.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
  await sleep(2500);
  const seekState = await getConsoleState();
  console.log('State after seeking to 25s:', seekState.curTime, seekState.sliderVal);
  const seekPass = parseInt(seekState.sliderVal || '0', 10) >= 20;

  // 7. TEST TRACK SWITCHING (Click another song: Hey Chhathi Maiya)
  console.log('\n--- VERIFICATION 6: Track Switching (Hey Chhathi Maiya) ---');
  await page.click('button[data-song-id="hey-chhathi-maiya-sharda"]');
  await sleep(4000);
  const heyState = await getConsoleState();
  console.log('State after switching to Hey Chhathi Maiya:', heyState.title, heyState.artist);
  const switchPass = heyState.title.includes('Hey Chhathi Maiya');

  // 8. TEST NEXT & PREVIOUS BUTTONS
  console.log('\n--- VERIFICATION 7: Next and Previous in Custom Console ---');
  await page.evaluate(() => {
    const nextBtn = document.querySelector('aside button[aria-label="Next recording"]');
    if (nextBtn) nextBtn.click();
  });
  await sleep(4000);
  const afterNext = await getConsoleState();
  console.log('After Next in Console (Expected: Kelwa Ke Paat Par):', afterNext.title);
  const nextPass = afterNext.title.includes('Kelwa Ke Paat');

  await page.evaluate(() => {
    const prevBtn = document.querySelector('aside button[aria-label="Previous recording"]');
    if (prevBtn) prevBtn.click();
  });
  await sleep(4000);
  const afterPrev = await getConsoleState();
  console.log('After Prev in Console (Expected: Hey Chhathi Maiya):', afterPrev.title);
  const prevPass = afterPrev.title.includes('Hey Chhathi Maiya');

  // 9. CAPTURE FINAL SCREENSHOTS
  await page.screenshot({
    path: 'C:/Users/Asus/.gemini/antigravity-ide/brain/06744c1b-9214-4db3-a831-a9ad434b5ed5/screenshots/phase_6_3_6_no_yt_video.png',
    fullPage: false
  });
  console.log('\nSaved screenshot: phase_6_3_6_no_yt_video.png');

  // Capture full page screenshot
  await page.screenshot({
    path: 'C:/Users/Asus/.gemini/antigravity-ide/brain/06744c1b-9214-4db3-a831-a9ad434b5ed5/screenshots/phase_6_3_6_fullpage.png',
    fullPage: true
  });
  console.log('Saved screenshot: phase_6_3_6_fullpage.png');

  await browser.close();

  const report = {
    noVisibleYouTubePass,
    consoleElements,
    hoPass,
    seekPass,
    switchPass,
    nextPass,
    prevPass
  };

  fs.writeFileSync('phase_6_3_6_report.json', JSON.stringify(report, null, 2));
  console.log('\n=== PHASE 6.3.6 ACCEPTANCE REPORT ===');
  console.log(JSON.stringify(report, null, 2));
})();
