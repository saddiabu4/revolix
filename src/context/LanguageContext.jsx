import React, { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  uz: {
    // Navbar
    home: 'Bosh sahifa',
    aboutUs: 'Biz haqimizda',
    tournaments: 'Turnirlar',
    articles: 'Maqolalar',
    news: 'Yangiliklar',
    rating: 'Reyting',
    createAccount: "Ro'yxatdan o'tish",
    login: 'Kirish',

    // Auth forms
    usernamePlaceholder: 'Username kiriting',
    emailPlaceholder: 'Email kiriting',
    passwordPlaceholder: 'Parol kiriting',
    haveAccount: 'Hisobingiz bormi?',
    noAccount: "Hisobingiz yo'qmi?",
    createAccountLink: 'Hisob ochish',

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
    aboutUs: 'О нас',
    tournaments: 'Турниры',
    articles: 'Статьи',
    news: 'Новости',
    rating: 'Рейтинг',
    createAccount: 'Регистрация',
    login: 'Войти',

    // Auth forms
    usernamePlaceholder: 'Введите имя пользователя',
    emailPlaceholder: 'Введите email',
    passwordPlaceholder: 'Введите пароль',
    haveAccount: 'Уже есть аккаунт?',
    noAccount: 'Нет аккаунта?',
    createAccountLink: 'Создать аккаунт',

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
    aboutUs: 'About Us',
    tournaments: 'Tournaments',
    articles: 'Articles',
    news: 'News',
    rating: 'Rating',
    createAccount: 'Sign Up',
    login: 'Login',

    // Auth forms
    usernamePlaceholder: 'Enter username',
    emailPlaceholder: 'Enter email',
    passwordPlaceholder: 'Enter password',
    haveAccount: 'Already have an account?',
    noAccount: 'Don\'t have an account?',
    createAccountLink: 'Create account',

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
    // Force a state update to trigger re-render
    setLanguage(prev => {
      if (prev === newLang) {
        // If the language is the same, return a new object to force re-render
        return { ...prev, timestamp: Date.now() }
      }
      return newLang
    })
  }

  const t = (key) => {
    return translations[language]?.[key] || key
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