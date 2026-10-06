import logoSrc from '../assets/logo-correavision.png'

const NAV_LINKS = [
  { href: '#inicio',         label: 'Inicio' },
  { href: '#problema',       label: 'Problema' },
  { href: '#solucion',       label: 'Solución' },
  { href: '#funcionamiento', label: 'Funcionamiento' },
  { href: '#componentes',    label: 'Componentes' },
  { href: '#piloto',         label: 'Piloto' },
  { href: '#clientes',       label: 'Clientes' },
  { href: '#servicios',      label: 'Servicios' },
  { href: '#equipo',         label: 'Equipo' },
  { href: '#contacto',       label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D2B3E' }} aria-label="Pie de página">

      {/* Cuerpo principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Columna 1 — Identidad */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <a href="#inicio" aria-label="CorreaVisión — ir al inicio">
                <img
                  src={logoSrc}
                  alt="CorreaVisión"
                  className="h-9 w-auto object-contain"
                  style={{ maxHeight: '36px' }}
                />
              </a>
            </div>

            {/* Slogan */}
            <p className="font-sora font-semibold text-sm italic mb-4" style={{ color: '#1ABC9C' }}>
              "Observar, alertar, actuar"
            </p>

            {/* Info académica */}
            <div className="flex flex-col gap-1">
              <p className="font-sans text-xs" style={{ color: '#8ABCCC' }}>
                Proyecto académico
              </p>
              <p className="font-sans text-xs" style={{ color: '#8ABCCC' }}>
                Gestión del Emprendimiento
              </p>
              <p className="font-sans text-xs" style={{ color: '#8ABCCC' }}>
                Ingeniería en Mantenimiento Industrial
              </p>
              <p className="font-sans text-xs" style={{ color: '#8ABCCC' }}>
                2026
              </p>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h3 className="font-sora font-semibold text-xs uppercase tracking-widest mb-4"
              style={{ color: '#1ABC9C' }}>
              Navegación
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: '#8ABCCC' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8ABCCC'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — CTA */}
          <div>
            <h3 className="font-sora font-semibold text-xs uppercase tracking-widest mb-4"
              style={{ color: '#1ABC9C' }}>
              ¿Le interesa el sistema?
            </h3>
            <p className="font-sans text-sm mb-5" style={{ color: '#8ABCCC' }}>
              Si tiene correas transportadoras en operación y quiere conocer más sobre esta propuesta,
              contáctenos a través del formulario.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-sora font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
              style={{ backgroundColor: '#1ABC9C', color: '#0D2B3E' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#17A589'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1ABC9C'}
            >
              Solicitar contacto
            </a>
          </div>

        </div>
      </div>

      {/* Línea divisora */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          {/* Aviso académico discreto — prominente pero no invasivo */}
          <div
            className="rounded-lg p-4 mb-5 border"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <p className="font-sans text-xs leading-relaxed text-center" style={{ color: '#5A6A72' }}>
              CorreaVisión corresponde a una propuesta de emprendimiento desarrollada con fines académicos.
              Las demostraciones, imágenes y resultados presentados en este sitio no representan actualmente
              una implementación comercial en una faena minera.
            </p>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-center" style={{ color: '#3D5A6A' }}>
            © 2026 CorreaVisión · Propuesta académica · Todos los derechos reservados
          </p>

        </div>
      </div>

    </footer>
  )
}
