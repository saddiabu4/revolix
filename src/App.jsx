import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'
import { LanguageProvider } from './context/LanguageContext'

// Sahifalar va turnirlar
import Articles from './pages/Articles'
import News from './pages/News'
import Profile from './pages/Profile'
import Rating from './pages/Rating'
import Turnirlar from './pages/Turnirlar'
import Interviews from './pages/articles/Interviews'
import Tips from './pages/articles/Tips'
import TournamentReviews from './pages/articles/TournamentReviews'
import EsportsNews from './pages/news/EsportsNews'
import GameUpdates from './pages/news/GameUpdates'
import SiteUpdates from './pages/news/SiteUpdates'
import TopPlayers from './pages/rating/TopPlayers'
import TopTeams from './pages/rating/TopTeams'
import Cs2Tournaments from './pages/tournaments/Cs2Tournaments'
import Dota1Tournaments from './pages/tournaments/Dota1Tournaments'
import Dota2Tournaments from './pages/tournaments/Dota2Tournaments'
import FreeFireTournaments from './pages/tournaments/FreeFireTournaments'
import MlbbTournaments from './pages/tournaments/MlbbTournaments'
import PubgmTournaments from './pages/tournaments/PubgmTournaments'
import ValorantTournaments from './pages/tournaments/ValorantTournaments'

// Auth sahifalar
import Login from './pages/auth/Login'
import Sign from './pages/auth/Sign'

const App = () => {
    return (
        <BrowserRouter>
            <LanguageProvider>
                <Routes>
                    {/* Redirect root to uz */}
                    <Route path="/" element={<Navigate to="/uz" replace />} />

                    {/* Auth routes - outside Layout */}
                    <Route path="/:lang/signup" element={<Sign />} />
                    <Route path="/:lang/login" element={<Login />} />

                    {/* All language-based routes */}
                    <Route path="/:lang" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="turnirlar" element={<Turnirlar />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="articles" element={<Articles />} />
                        <Route path="news" element={<News />} />
                        <Route path="rating" element={<Rating />} />

                        {/* Turnirlar turlari */}
                        <Route path="tournaments/pubgm" element={<PubgmTournaments />} />
                        <Route path="tournaments/dota2" element={<Dota2Tournaments />} />
                        <Route path="tournaments/cs2" element={<Cs2Tournaments />} />
                        <Route path="tournaments/mlbb" element={<MlbbTournaments />} />
                        <Route path="tournaments/dota1" element={<Dota1Tournaments />} />
                        <Route path="tournaments/valorant" element={<ValorantTournaments />} />
                        <Route path="tournaments/freefire" element={<FreeFireTournaments />} />

                        {/* Articles */}
                        <Route path="articles/tips" element={<Tips />} />
                        <Route path="articles/interviews" element={<Interviews />} />
                        <Route path="articles/tournament-reviews" element={<TournamentReviews />} />

                        {/* News */}
                        <Route path="news/site-updates" element={<SiteUpdates />} />
                        <Route path="news/esports" element={<EsportsNews />} />
                        <Route path="news/game-updates" element={<GameUpdates />} />

                        {/* Rating */}
                        <Route path="rating/teams" element={<TopTeams />} />
                        <Route path="rating/players" element={<TopPlayers />} />
                    </Route>

                    {/* Catch-all fallback */}
                    <Route path="*" element={<Navigate to={"/uz"} replace />} />
                </Routes>
            </LanguageProvider>
        </BrowserRouter>
    )
}

export default App 