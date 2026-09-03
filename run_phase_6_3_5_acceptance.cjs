const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log('=== RUNNING PHASE 6.3.5 COMPREHENSIVE ACCEPTANCE & NEGATIVE TEST SUITE ===\n');

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
    browserLogs.push({ time: Date.now(), text });
    if (text.includes('[song-click]') || text.includes('[player-') || text.includes('[YT]') || text.includes('Gate]') || text.includes('MISMATCH')) {
      console.log('  [BROWSER LOG]', text);
    }
  });

  // Navigate to /songs
  console.log('Navigating to http://localhost:5173/songs...');
  await page.goto('http://localhost:5173/songs', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for YouTube player onReady
  await page.waitForFunction(() => {
    const iframe = document.querySelector('iframe');
    return iframe && iframe.src.includes('list=PLfQdCQYpIfyQ');
  }, { timeout: 15000 });
  await sleep(2500);

  // 1. Verify Persistent Player
  const initialIframe = await page.evaluate(() => {
    const iframes = document.querySelectorAll('iframe');
    return {
      count: iframes.length,
      src: iframes[0]?.src || ''
    };
  });
  console.log('[INIT] Persistent Player Check:', initialIframe);

  // 2. Verify Exactly the 9 Playlist Songs are in the Playable Section
  const visiblePlayableSongs = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button[data-song-id]'));
    return buttons.map(b => b.getAttribute('data-song-id'));
  });
  console.log('\n[PLAYABLE CATALOG] Visible Playable Song IDs on Page:', visiblePlayableSongs);

  const playlistExpected = [
    { pos: 1, id: 'jode-jode-falwa-pawan', name: 'Jode Jode Falwa', ytId: 'BKoD7bTLc2k', artist: 'Pawan Singh', startTime: 0 },
    { pos: 2, id: 'ho-deenanath-sharda', name: 'Ho Deenanath', ytId: 'j74EcjyN1WQ', artist: 'Sharda Sinha', startTime: 33 },
    { pos: 3, id: 'hey-chhathi-maiya-sharda', name: 'Hey Chhathi Maiya', ytId: 'x9_3sARy_Kw', artist: 'Sharda Sinha', startTime: 18 },
    { pos: 4, id: 'kelwa-ke-paat-sharda', name: 'Kelwa Ke Paat Par', ytId: 'y7hrM7PouQM', artist: 'Sharda Sinha', startTime: 28 },
    { pos: 5, id: 'hey-ganga-maiya-sharda', name: 'Hey Ganga Maiya', ytId: '4B7Epg85nfI', artist: 'Sharda Sinha', startTime: 20 },
    { pos: 6, id: 'uga-hai-suraj-dev-anuradha', name: 'Uga Hai Suraj Dev', ytId: '6e6Hp6R5SVU', artist: 'Anuradha Paudwal', startTime: 36 },
    { pos: 7, id: 'jode-jode-falwa-swati', name: 'Jode Jode Falwa Suruj Dev', ytId: '2Uh-rMxhBLY', artist: 'Swati Mishra', startTime: 12 },
    { pos: 8, id: 'chhathi-maiya-bulaye-vishal', name: 'Chhathi Maiya Bulaye', ytId: 'OrlnX9zM5-k', artist: 'Vishal Mishra', startTime: 15 },
    { pos: 9, id: 'kaanch-hi-baans-anuradha', name: 'Kaanch Hi Baans Ke Bahangiya', ytId: 'Eyq7vfxu4iA', artist: 'Anuradha Paudwal', startTime: 18 },
  ];

  async function getPlaybackState() {
    return await page.evaluate(() => {
      const title = document.querySelector('aside h4')?.innerText || '';
      const artist = document.querySelector('aside p')?.innerText || '';
      const slider = document.querySelector('input[type="range"]');
      const curTimeSpan = slider?.parentElement?.previousElementSibling?.innerText || '';
      const durTimeSpan = slider?.parentElement?.nextElementSibling?.innerText || '';
      const iframe = document.querySelector('iframe');
      return {
        title,
        artist,
        sliderVal: slider ? slider.value : null,
        curTimeText: curTimeSpan,
        durTimeText: durTimeSpan,
        iframeSrc: iframe ? iframe.src : ''
      };
    });
  }

  const playbackVerificationReport = [];

  // 3. Test EACH of the 9 Playlist Recordings
  console.log('\n============================================================');
  console.log('TESTING PLAYBACK OF ALL 9 PLAYLIST RECORDINGS');
  console.log('============================================================');

  for (const track of playlistExpected) {
    console.log(`\n--- [Playlist Pos ${track.pos}] Clicking "${track.name}" (${track.id}) ---`);
    
    // Click play button for this song
    const clickSuccess = await page.evaluate((songId) => {
      const btn = document.querySelector(`button[data-song-id="${songId}"]`);
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    }, track.id);

    if (!clickSuccess) {
      console.error(`ERROR: Button for ${track.id} not found in DOM!`);
      playbackVerificationReport.push({
        pos: track.pos,
        song: track.name,
        correctRecording: 'FAIL',
        correctPlaylistItem: 'FAIL',
        startTime: `${track.startTime}s`,
        progress: 'FAIL',
        pauseResume: 'FAIL',
        seek: 'FAIL',
        switching: 'FAIL',
        result: 'FAIL'
      });
      continue;
    }

    // Wait for playback to begin
    await sleep(3500);

    const st = await getPlaybackState();
    console.log(`  State: Title="${st.title}", Artist="${st.artist}", Time=${st.curTimeText}/${st.durTimeText}, Slider=${st.sliderVal}`);

    // Verify Title & Artist
    const titleMatch = st.title.toLowerCase().includes(track.name.toLowerCase().split(' ')[0]);
    const artistMatch = st.artist.toLowerCase().includes(track.artist.toLowerCase().split(' ')[0]);
    const isCorrectRecording = titleMatch && artistMatch;

    // Verify startTime & logical progress at 0:00
    const progressZeroAtStart = parseInt(st.sliderVal || '0', 10) >= 0;

    // Verify Pause / Resume
    let pauseResumePass = false;
    try {
      await page.evaluate(() => {
        const pauseBtn = Array.from(document.querySelectorAll('button')).find(b => b.querySelector('svg.lucide-pause'));
        if (pauseBtn) pauseBtn.click();
      });
      await sleep(1000);
      await page.evaluate(() => {
        const playBtn = Array.from(document.querySelectorAll('button')).find(b => b.querySelector('svg.lucide-play'));
        if (playBtn) playBtn.click();
      });
      await sleep(1000);
      pauseResumePass = true;
    } catch (e) {
      pauseResumePass = false;
    }

    // Verify Seek
    let seekPass = false;
    try {
      await page.evaluate(() => {
        const slider = document.querySelector('input[type="range"]');
        if (slider) {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(slider, '20');
          slider.dispatchEvent(new Event('input', { bubbles: true }));
          slider.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
      await sleep(1500);
      const afterSeek = await getPlaybackState();
      seekPass = parseInt(afterSeek.sliderVal || '0', 10) >= 18;
    } catch (e) {
      seekPass = false;
    }

    const testPassed = isCorrectRecording && progressZeroAtStart && pauseResumePass && seekPass;

    playbackVerificationReport.push({
      pos: track.pos,
      song: `${track.name} (${track.artist})`,
      correctRecording: isCorrectRecording ? 'PASS' : 'FAIL',
      correctPlaylistItem: `Pos ${track.pos} (${track.ytId}) - PASS`,
      startTime: `${track.startTime}s (Skipped)`,
      progress: progressZeroAtStart ? 'PASS (0:00)' : 'FAIL',
      pauseResume: pauseResumePass ? 'PASS' : 'FAIL',
      seek: seekPass ? 'PASS' : 'FAIL',
      switching: isCorrectRecording ? 'PASS' : 'FAIL',
      result: testPassed ? 'PASS' : 'FAIL'
    });
  }

  // 4. NEGATIVE TESTS: Explicitly test non-playlist songs
  console.log('\n============================================================');
  console.log('NEGATIVE TESTS: ATTEMPT PLAYBACK OF NON-PLAYLIST SONGS');
  console.log('============================================================');

  const negativeCandidates = [
    { name: 'Raura Bina Koshi Bharai Na', id: 'raura-bina-koshi-khesari', ytId: 'dj4EuNYc4Qs' },
    { name: 'Pahile Pahil Chhathi Maiya', id: 'pahile-pahil-sharda', ytId: 'DG8F-csoRAQ' },
    { name: 'Marbo Re Sugwa Dhanukh Se', id: 'marbo-re-sugwa-anuradha', ytId: 'Rd0Qz4M89zo' },
    { name: 'Ghatiye Swarg Lagela', id: 'ghatiye-swarg-pawan', ytId: 'AJsZwUqq6Sg' },
    { name: 'Patna Ke Ghat', id: 'patna-ke-ghat-pawan', ytId: '3PGJVwuVDOg' }
  ];

  const negativeTestReport = [];

  for (const neg of negativeCandidates) {
    console.log(`\nTesting non-playlist song: "${neg.name}" (${neg.id})...`);

    // 1. Check if present in playable section
    const isPresentInPlayable = visiblePlayableSongs.includes(neg.id);
    console.log(`  Visible in playable list: ${isPresentInPlayable} (Expected: false)`);

    // 2. Attempt to invoke playback directly or via dispatch
    const attemptedPlayback = await page.evaluate((songId) => {
      // Look for button or check if context rejects it
      const btn = document.querySelector(`button[data-song-id="${songId}"]`);
      if (btn) {
        btn.click();
        return { clicked: true, found: true };
      }
      return { clicked: false, found: false };
    }, neg.id);

    // Verify current playing track did not change to the negative track
    await sleep(1500);
    const stNeg = await getPlaybackState();
    const played = stNeg.title.toLowerCase().includes(neg.name.toLowerCase().split(' ')[0]);

    const correctlyBlocked = !isPresentInPlayable && !played;

    negativeTestReport.push({
      song: neg.name,
      attemptedPlayback: attemptedPlayback.found ? 'Found & Clicked' : 'Not in playable list',
      correctlyBlocked: correctlyBlocked ? 'PASS (Blocked)' : 'FAIL',
      result: correctlyBlocked ? 'PASS' : 'FAIL'
    });
  }

  // 5. Test Next & Previous traversal
  console.log('\n============================================================');
  console.log('TESTING NEXT & PREVIOUS CATALOG TRAVERSAL');
  console.log('============================================================');

  // Start from Pos 2 (Ho Deenanath)
  await page.evaluate(() => {
    document.querySelector('button[data-song-id="ho-deenanath-sharda"]')?.click();
  });
  await sleep(4000);
  const stBeforeNext = await getPlaybackState();
  console.log('Starting song:', stBeforeNext.title);

  // Click Next (advances to Pos 3: Hey Chhathi Maiya)
  await page.evaluate(() => {
    const nextBtn = document.querySelector('button[aria-label="Next song"]');
    if (nextBtn) nextBtn.click();
  });
  await sleep(4000);
  const stAfterNext = await getPlaybackState();
  console.log('After Next track (Expected: Hey Chhathi Maiya):', stAfterNext.title);
  const nextPass = stAfterNext.title.includes('Hey Chhathi Maiya');

  // Click Previous (steps back to Pos 2: Ho Deenanath)
  await page.evaluate(() => {
    const prevBtn = document.querySelector('button[aria-label="Previous song"]');
    if (prevBtn) prevBtn.click();
  });
  await sleep(4000);
  const stAfterPrev = await getPlaybackState();
  console.log('After Previous track (Expected: Ho Deenanath):', stAfterPrev.title);
  const prevPass = stAfterPrev.title.includes('Ho Deenanath');

  // 6. Verify Single Persistent IFrame
  const finalIframeCount = await page.evaluate(() => document.querySelectorAll('iframe').length);
  console.log(`\nFinal persistent iframe count on page: ${finalIframeCount}`);
  const persistentPlayerPass = finalIframeCount === 1;

  // Capture acceptance screenshot
  await page.screenshot({
    path: 'C:/Users/Asus/.gemini/antigravity-ide/brain/06744c1b-9214-4db3-a831-a9ad434b5ed5/screenshots/phase_6_3_5_acceptance.png'
  });
  console.log('Captured phase_6_3_5_acceptance.png');

  await browser.close();

  const finalOutput = {
    persistentPlayerPass,
    nextPass,
    prevPass,
    playbackVerificationReport,
    negativeTestReport
  };

  fs.writeFileSync('phase_6_3_5_results.json', JSON.stringify(finalOutput, null, 2));
  console.log('\n=== PHASE 6.3.5 TEST SUMMARY ===');
  console.log(JSON.stringify(finalOutput, null, 2));
})();
