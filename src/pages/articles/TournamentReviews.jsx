import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const TournamentReviews = () => {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen pt-[90px] bg-gray-900 text-white">
            <div className="max-w-[1440px] mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Tournament Reviews</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Major Tournaments</h2>
                        <p className="text-gray-300">Coming soon...</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Local Tournaments</h2>
                        <p className="text-gray-300">Coming soon...</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">International Tournaments</h2>
                        <p className="text-gray-300">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TournamentReviews 