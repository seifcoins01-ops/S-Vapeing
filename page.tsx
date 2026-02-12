'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SmokeEffect from '@/components/SmokeEffect'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { ShoppingBag, Menu, X, Search, User, ShoppingCart } from 'lucide-react'

export default function Home() {
  const { t } = useTranslation()
  const [isSmokeActive, setIsSmokeActive] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // تنشيط تأثير الدخان عند التفاعل
  const handleInteraction = () => {
    if (!isSmokeActive) {
      setIsSmokeActive(true)
      setTimeout(() => setIsSmokeActive(false), 10000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-white">
      <SmokeEffect isActive={isSmokeActive} />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-dark/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                VapeEgypt
              </h1>

              <div className="hidden md:flex items-center gap-6">
                {['home', 'products', 'about', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={handleInteraction}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {t(`nav.${item}`)}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <Search className="w-5 h-5" />
              </button>
              
              <button className="p-2 hover:bg-gray-800 rounded-lg">
                <User className="w-5 h-5" />
              </button>
              
              <button className="p-2 hover:bg-gray-800 rounded-lg relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'products', 'about', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => {
                    handleInteraction()
                    setIsMenuOpen(false)
                  }}
                  className="block py-2 hover:text-primary-400"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home"
        onClick={handleInteraction}
        className="py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t('products.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t('products.categories', { returnObjects: true })).map(([key, value]) => (
              <div
                key={key}
                onClick={handleInteraction}
                className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/80 transition-all hover:scale-105 cursor-pointer border border-gray-700"
              >
                <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value}</h3>
                <p className="text-gray-400">
                  Discover our premium collection of {key}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center text-gray-400">
            <p>© 2024 VapeEgypt. All rights reserved.</p>
            <p className="mt-2">Must be 21+ to purchase. Products contain nicotine.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}