import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'
import { LanguageProvider } from './context/LanguageContext'
// ... other imports

const App = () => {
    return (
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate to="/uz" replace />} />
                        <Route path=":language" element={<Main />} />
                        {/* Add other routes here */}
                    </Route>
                </Routes>
            </Router>
        </LanguageProvider>
    )
}

export default App 