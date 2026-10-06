import { useState, useEffect } from 'react'
import logoSrc from '../assets/logo-correavision.png'

const NAV_LINKS = [
  { href: '#inicio',         label: 'Inicio' },
  { href: '#problema',       label: 'Problema' },
  { href: '#solucion',       label: 'Solución' },
  { href: '#funcionamiento', label: 'Funcionamiento' },
  { href: '#servicios',      label: 'Servicios' },
  { href: '#equipo',         label: 'Equipo' },
  { href: '#contacto',       label: 'Contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: '#0D2B3E' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center flex-shrink-0"
          aria-label="CorreaVisión — ir al inicio"
        >
          <img
            src={logoSrc}
            alt="CorreaVisión"
            className="h-9 sm:h-11 w-auto object-contain"
            style={{ maxHeight: '44px' }}
          />
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-white font-sans text-sm px-3 py-2 rounded transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 text-sm font-sora font-semibold px-4 py-2 rounded transition-colors duration-200 text-petroleum"
          style={{ backgroundColor: '#1ABC9C' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#17A589'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1ABC9C'}
        >
          Solicitar demostración
        </a>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden text-gray-300 hover:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: '#0D2B3E', borderColor: '#1A5276' }}
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-gray-300 hover:text-white font-sans text-sm px-3 py-2.5 rounded transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={handleNavClick}
                className="block text-center text-sm font-sora font-semibold px-4 py-2.5 rounded transition-colors duration-200"
                style={{ backgroundColor: '#1ABC9C', color: '#0D2B3E' }}
              >
                Solicitar demostración
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
