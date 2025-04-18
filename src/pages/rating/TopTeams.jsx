import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const TopTeams = () => {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen pt-[90px] bg-gray-900 text-white">
            <div className="max-w-[1440px] mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Top Teams</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">PUBGM Teams</h2>
                        <p className="text-gray-300">Coming soon...</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">DOTA 2 Teams</h2>
                        <p className="text-gray-300">Coming soon...</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">CS 2 Teams</h2>
                        <p className="text-gray-300">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTeams 