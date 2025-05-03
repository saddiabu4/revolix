import React from "react"
import {
    FaArrowLeft,
    FaBullhorn,
    FaCog,
    FaCubes,
    FaGamepad,
    FaGift,
    FaSignOutAlt,
    FaTrophy,
    FaUsers,
    FaWallet
} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import Banner1 from "../assets/banner1.png"
import Banner2 from "../assets/banner2.png"

const menu = [
    { to: "/games", icon: <FaGamepad />, label: "O‘yinlar" },
    { to: "/teams", icon: <FaUsers />, label: "Jamoalar" },
    { to: "/tournaments", icon: <FaTrophy />, label: "Turnirlar" },
    { to: "/rewards", icon: <FaGift />, label: "Yutuqlar" },
    { to: "/settings", icon: <FaCog />, label: "Sozlamalar" },
    { to: "/topup", icon: <FaWallet />, label: "Hisobni to‘ldirish", sparkle: true },
    { to: "/accessories", icon: <FaCubes />, label: "Aksessuarlar" },
    { to: "/ads", icon: <FaBullhorn />, label: "Aksiya va E’lonlar" },
    { to: "/logout", icon: <FaSignOutAlt />, label: "Chiqish", danger: true },
]

const Sidebar = () => (
    <aside className="h-screen w-72 bg-[#181818] flex flex-col justify-between py-6 px-4 border-r border-[#232323]">
        <div>
            {/* Logo va orqaga */}
            <div className="flex items-center gap-3 mb-8">
                <img src={Logo} alt="Revolix" className="h-10" />
                <span className="text-gray-400 text-2xl">|</span>
                <div>
                    <div className="text-white font-bold text-xl leading-5"> </div>
                    <div className="text-[9px] text-gray-400 leading-3">ВЫСШАЯ ЛИГА<br />КИБЕРСПОРТА В ОДНОМ МЕСТЕ</div>
                </div>
            </div>
            <NavLink
                to="/"
                className="flex items-center gap-2 bg-[#232323] text-white px-4 py-2 rounded-lg mb-6 font-semibold hover:bg-[#2c2c2c] transition text-base w-full justify-center"
            >
                <FaArrowLeft className="text-[#ff9600]" />
                <span>Orqaga</span>
            </NavLink>
            {/* Menu */}
            <nav className="flex flex-col gap-1">
                {menu.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition
              ${isActive ? "bg-[#232323] text-[#ff9600]" : "text-white hover:bg-[#232323]"}
              ${item.danger ? "text-red-400 hover:text-red-500" : ""}`
                        }
                    >
                        <span className={`text-xl ${item.danger ? "" : "text-[#ff9600]"}`}>{item.icon}</span>
                        <span className="flex-1">{item.label}</span>
                        {item.sparkle && (
                            <span className="ml-2 text-xs text-green-400 animate-pulse">✨</span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
        {/* Socials */}
        <div className="flex gap-3 justify-center mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-xl text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-80 transition">
                {/* Instagram SVG */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 1.7 353.3 0C317.7-1.7 130.3-1.7 94.7 0 59.4 1.7 28 9.9 2.6 36.2S1.7 123.4 0 158.7C-1.7 194.3-1.7 381.7 0 417.3c1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c35.6 1.7 223 1.7 258.6 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.6 1.7-223 0-258.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.2 9 191 11.6 224.1 11.6s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z" /></svg>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-xl text-white bg-[#229ED9] hover:opacity-80 transition">
                {/* Telegram SVG */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm104.6 169.1l-36.5 172.2c-2.7 12.1-9.8 15.1-19.8 9.4l-54.7-40.4-26.4 25.4c-2.9 2.9-5.3 5.3-10.8 5.3l3.9-55.3 100.8-91c4.4-3.9-1-6.1-6.8-2.2l-124.6 78.4-53.7-16.8c-11.7-3.7-11.9-11.7 2.4-17.2l209.6-81.1c9.6-3.5 18 2.3 14.9 17.1z" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-xl text-white bg-[#FF0000] hover:opacity-80 transition">
                {/* YouTube SVG */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.725-24.926-42.37-48.651-48.651C465.281 64 288 64 288 64s-177.281 0-212.004 11.432c-23.725 6.281-42.37 24.926-48.651 48.651C16 158.806 16 256 16 256s0 97.194 11.345 131.917c6.281 23.725 24.926 42.37 48.651 48.651C110.719 448 288 448 288 448s177.281 0 212.004-11.432c23.725-6.281 42.37-24.926 48.651-48.651C560 353.194 560 256 560 256s0-97.194-10.345-131.917zM232 336V176l142.745 80L232 336z" /></svg>
            </a>
        </div>
    </aside>
)

const Profile = () => (
    <div className="flex w-full min-h-screen bg-[#181818]">
        <Sidebar />
        <main className="flex-1 p-8">
            {/* Banner 1 */}
            <div className="w-full rounded-2xl mb-8 p-8 flex items-center justify-between bg-gradient-to-r from-[#232323] via-[#ff9600]/80 to-[#ff9600] shadow-lg relative overflow-hidden" style={{ minHeight: 180 }}>
                <div className="z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Rasmiy va xavfsiz o‘yin hisobni to‘ldirish xizmati.</h2>
                    <p className="text-white/80 mb-4">100% kafolatlangan tranzaksiyalar.</p>
                    <button className="bg-[#ff9600] hover:bg-[#ffb84d] text-white font-bold py-2 px-6 rounded-lg transition">HISOBNI TO‘LDIRISH</button>
                </div>
                <img
                    src={Banner1}
                    alt="Banner1"
                    className="absolute right-6 bottom-0 h-40 object-contain z-0"
                    style={{ maxHeight: 160 }}
                />
                <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none"></div>
            </div>
            {/* Banner 2 */}
            <div className="w-full rounded-2xl mb-8 p-8 flex items-center justify-between bg-gradient-to-r from-[#232323] via-[#00c853]/80 to-[#00c853] shadow-lg relative overflow-hidden" style={{ minHeight: 180 }}>
                <div className="z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Har daqiqani g‘alabaga aylantir!</h2>
                    <p className="text-white/80 mb-4">Professional aksessuarlar bilan o‘yinda va ishingda birinchi bo‘l!<br />Sifat — Tezlik — G‘alaba!</p>
                    <button className="bg-[#00c853] hover:bg-[#00e676] text-white font-bold py-2 px-6 rounded-lg transition">MAHSULOTLARNI KO‘RISH</button>
                </div>
                <img
                    src={Banner2}
                    alt="Banner2"
                    className="absolute right-6 bottom-0 h-40 object-contain z-0"
                    style={{ maxHeight: 160 }}
                />
                <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none"></div>
            </div>
            {/* Qolgan kontent */}
            <div className="h-[300px]"></div>
        </main>
    </div>
)

export default Profile