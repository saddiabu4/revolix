import React, { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  uz: {
    // Navbar
    home: 'Bosh sahifa',
    tournaments: 'Turnirlar',
    articles: 'Maqolalar',
    news: 'Yangiliklar',
    rating: 'Reyting',
    createAccount: 'Hisob yaratish',
    login: 'Kirish',
    
    // Tournaments
    pubg: 'PUBGM',
    dota2: 'DOTA 2',
    cs2: 'CS 2',
    mlbb: 'MLBB',
    dota1: 'DOTA 1',
    valorant: 'VALORANT',
    freeFire: 'FREE FIRE',
    
    // Articles
    tips: 'MASLAHATLAR',
    interviews: 'INTERVYULAR',
    tournamentReviews: 'TURNIR SHARHLARI',
    
    // News
    siteChanges: 'SAYTDAGI O\'ZGARISHLARI',
    esportsNews: 'ESPORTS YANGILIKLARI',
    gameUpdates: 'O\'YIN YANGILANISHLARI',
    
    // Rating
    topTeams: 'TOP JAMOALAR',
    topPlayers: 'TOP O\'YINCHILAR'
  },
  ru: {
    // Navbar
    home: 'Главная',
    tournaments: 'Турниры',
    articles: 'Статьи',
    news: 'Новости',
    rating: 'Рейтинг',
    createAccount: 'Создать аккаунт',
    login: 'Войти',
    
    // Tournaments
    pubg: 'PUBGM',
    dota2: 'DOTA 2',
    cs2: 'CS 2',
    mlbb: 'MLBB',
    dota1: 'DOTA 1',
    valorant: 'VALORANT',
    freeFire: 'FREE FIRE',
    
    // Articles
    tips: 'СОВЕТЫ',
    interviews: 'ИНТЕРВЬЮ',
    tournamentReviews: 'ОБЗОРЫ ТУРНИРОВ',
    
    // News
    siteChanges: 'ИЗМЕНЕНИЯ НА САЙТЕ',
    esportsNews: 'НОВОСТИ ESPORTS',
    gameUpdates: 'ОБНОВЛЕНИЯ ИГР',
    
    // Rating
    topTeams: 'ТОП КОМАНДЫ',
    topPlayers: 'ТОП ИГРОКИ'
  },
  en: {
    // Navbar
    home: 'Home',
    tournaments: 'Tournaments',
    articles: 'Articles',
    news: 'News',
    rating: 'Rating',
    createAccount: 'Create Account',
    login: 'Login',
    
    // Tournaments
    pubg: 'PUBGM',
    dota2: 'DOTA 2',
    cs2: 'CS 2',
    mlbb: 'MLBB',
    dota1: 'DOTA 1',
    valorant: 'VALORANT',
    freeFire: 'FREE FIRE',
    
    // Articles
    tips: 'TIPS',
    interviews: 'INTERVIEWS',
    tournamentReviews: 'TOURNAMENT REVIEWS',
    
    // News
    siteChanges: 'SITE CHANGES',
    esportsNews: 'ESPORTS NEWS',
    gameUpdates: 'GAME UPDATES',
    
    // Rating
    topTeams: 'TOP TEAMS',
    topPlayers: 'TOP PLAYERS'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('lang')
    return savedLang || 'uz'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const changeLanguage = (newLang) => {
    setLanguage(newLang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 