import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/footer/Footer";
import { Home } from "../pages/Home";
import { PageShell } from "../pages/PageShell";
import { HistoryPage } from "../pages/HistoryPage";
import { SongsPage } from "../pages/SongsPage";
import { VerifySongsPage } from "../pages/VerifySongsPage";
import { AudioPlayerProvider, useAudioPlayer } from "../context/AudioPlayerContext";
import { MiniPlayer } from "../components/music/MiniPlayer";
import { HeritagePage } from "../pages/HeritagePage";
import { KitchenPage } from "../pages/KitchenPage";
import { SoopPage } from "../pages/heritage/SoopPage";
import { DauraPage } from "../pages/heritage/DauraPage";
import { ThekuaPage } from "../pages/heritage/ThekuaPage";
import { KosiPage } from "../pages/heritage/KosiPage";
import { DiyaPage } from "../pages/heritage/DiyaPage";
import { SugarcanePage } from "../pages/heritage/SugarcanePage";
import { GhatsPage } from "../pages/GhatsPage";
import { GhatDetailPage } from "../pages/GhatDetailPage";
import { StoriesPage } from "../pages/StoriesPage";
import { StoryDetailPage } from "../pages/StoryDetailPage";

// Layout wrapper to inject global header/footer and scroll-to-top on route changes
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentSong } = useAudioPlayer();

  // Ensure we scroll to top on routing
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8EC] text-[#2B1B16] font-sans overflow-x-hidden">
      <Navbar />
      <main className={`flex-1 transition-[padding] duration-200 ${currentSong ? "pb-28 sm:pb-32" : ""}`}>{children}</main>
      <MiniPlayer />
      <Footer />
    </div>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AudioPlayerProvider>
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          {/* Curation Index Pages */}
          <Route
            path="/history"
            element={
              <Layout>
                <HistoryPage />
              </Layout>
            }
          />
          <Route
            path="/four-days"
            element={
              <Layout>
                <PageShell />
              </Layout>
            }
          />
          <Route
            path="/songs"
            element={
              <Layout>
                <SongsPage />
              </Layout>
            }
          />
          <Route
            path="/verify-songs"
            element={
              <Layout>
                <VerifySongsPage />
              </Layout>
            }
          />
        <Route
          path="/heritage"
          element={
            <Layout>
              <HeritagePage />
            </Layout>
          }
        />
        <Route
          path="/kitchen"
          element={
            <Layout>
              <KitchenPage />
            </Layout>
          }
        />
        <Route
          path="/ghats"
          element={
            <Layout>
              <GhatsPage />
            </Layout>
          }
        />
        <Route
          path="/ghats/:id"
          element={
            <Layout>
              <GhatDetailPage />
            </Layout>
          }
        />
        <Route
          path="/stories"
          element={
            <Layout>
              <StoriesPage />
            </Layout>
          }
        />
        <Route
          path="/stories/:id"
          element={
            <Layout>
              <StoryDetailPage />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />

        {/* Day-by-Day Ritual Subroutes */}
        <Route
          path="/four-days/nahay-khay"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />
        <Route
          path="/four-days/kharna"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />
        <Route
          path="/four-days/sandhya-arghya"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />
        <Route
          path="/four-days/usha-arghya"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />

        {/* Heritage Artifact Subroutes */}
        <Route
          path="/heritage/soop"
          element={
            <Layout>
              <SoopPage />
            </Layout>
          }
        />
        <Route
          path="/heritage/daura"
          element={
            <Layout>
              <DauraPage />
            </Layout>
          }
        />
        <Route
          path="/heritage/thekua"
          element={
            <Layout>
              <ThekuaPage />
            </Layout>
          }
        />
        <Route
          path="/heritage/kosi"
          element={
            <Layout>
              <KosiPage />
            </Layout>
          }
        />
        <Route
          path="/heritage/diya"
          element={
            <Layout>
              <DiyaPage />
            </Layout>
          }
        />
        <Route
          path="/heritage/sugarcane"
          element={
            <Layout>
              <SugarcanePage />
            </Layout>
          }
        />
        <Route
          path="/heritage/ikh"
          element={
            <Layout>
              <SugarcanePage />
            </Layout>
          }
        />

        {/* Fallback Catch-All Route */}
        <Route
          path="*"
          element={
            <Layout>
              <PageShell />
            </Layout>
          }
        />
      </Routes>
      </AudioPlayerProvider>
    </Router>
  );
};
