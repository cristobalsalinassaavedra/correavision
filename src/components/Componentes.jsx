const componentes = [
  {
    titulo: 'Cámara industrial',
    descripcion:
      'Cámara diseñada para entornos industriales, capaz de operar en condiciones de polvo, vibraciones y temperatura variables según el punto de instalación.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="6" y="13" width="36" height="25" rx="4" stroke="#1A5276" strokeWidth="2"/>
        <circle cx="24" cy="25.5" r="7" stroke="#1A5276" strokeWidth="2"/>
        <circle cx="24" cy="25.5" r="3.5" fill="#1A5276" opacity="0.2"/>
        <path d="M16 13V10a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" stroke="#1A5276" strokeWidth="2"/>
        <path d="M6 13 L6 17"  stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 13 L10 13" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 13 L38 13" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 13 L42 17" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 38 L6 34"  stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 38 L10 38" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 38 L38 38" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 38 L42 34" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titulo: 'Protección para ambiente industrial',
    descripcion:
      'Carcasa o gabinete que resguarda la cámara y los componentes electrónicos de las condiciones del entorno: polvo, humedad, impactos y temperatura.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M24 6 L38 12 V24 C38 32 31 39 24 42 C17 39 10 32 10 24 V12 Z" stroke="#1A5276" strokeWidth="2" fill="none"/>
        <path d="M17 24 L22 29 L31 20" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titulo: 'Iluminación auxiliar',
    descripcion:
      'Sistema de iluminación que garantiza condiciones visuales adecuadas en el punto de captura, independientemente de la iluminación ambiental disponible.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="24" cy="22" r="8" stroke="#1A5276" strokeWidth="2"/>
        <circle cx="24" cy="22" r="4" fill="#1A5276" opacity="0.2"/>
        <path d="M24 8 L24 4"   stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 40 L24 36" stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 22 L4 22"   stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
        <path d="M44 22 L40 22" stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13.4 13.4 L10.6 10.6" stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
        <path d="M37.4 13.4 L34.6 10.6" stroke="#1A5276" strokeWidth="2" strokeLinecap="round" transform="scale(-1,1) translate(-48,0)"/>
        <rect x="20" y="30" width="8" height="4" rx="1" stroke="#1ABC9C" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    titulo: 'Unidad de procesamiento',
    descripcion:
      'Equipo de cómputo industrial que ejecuta el análisis de imágenes de forma local, adaptado para operar en condiciones de gabinete industrial.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="8" y="10" width="32" height="26" rx="3" stroke="#1A5276" strokeWidth="2"/>
        <rect x="14" y="16" width="20" height="14" rx="2" stroke="#1A5276" strokeWidth="1.5" fill="none"/>
        <rect x="18" y="20" width="12" height="6" rx="1" fill="#1A5276" opacity="0.2"/>
        <circle cx="16" cy="38" r="2" fill="#1ABC9C"/>
        <circle cx="24" cy="38" r="2" fill="#1ABC9C" opacity="0.4"/>
        <circle cx="32" cy="38" r="2" fill="#1ABC9C" opacity="0.4"/>
      </svg>
    ),
  },
  {
    titulo: 'Inteligencia artificial',
    descripcion:
      'Modelo de procesamiento de imágenes entrenado para identificar condiciones visuales fuera de lo normal en la correa, clasificando los resultados por nivel de relevancia.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="14" y="14" width="20" height="20" rx="3" stroke="#1A5276" strokeWidth="2"/>
        <circle cx="24" cy="24" r="5" stroke="#1ABC9C" strokeWidth="1.5"/>
        <line x1="14" y1="24" x2="8"  y2="24" stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="34" y1="24" x2="40" y2="24" stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="24" y1="14" x2="24" y2="8"  stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="24" y1="34" x2="24" y2="40" stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="17" y1="17" x2="12" y2="12" stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="31" y1="17" x2="36" y2="12" stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="17" y1="31" x2="12" y2="36" stroke="#1A5276" strokeWidth="1.5"/>
        <line x1="31" y1="31" x2="36" y2="36" stroke="#1A5276" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    titulo: 'Plataforma de monitoreo',
    descripcion:
      'Interfaz web o de escritorio donde el equipo de operación y mantenimiento visualiza el estado del sistema, el historial de eventos y las alertas generadas.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="6" y="8" width="36" height="26" rx="3" stroke="#1A5276" strokeWidth="2"/>
        <rect x="10" y="12" width="28" height="18" rx="1" fill="#1A5276" opacity="0.1"/>
        <line x1="10" y1="20" x2="38" y2="20" stroke="#1A5276" strokeWidth="1" strokeDasharray="3 2"/>
        <path d="M14 26 L18 22 L22 24 L26 18 L30 21 L34 16" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="18" y="34" width="12" height="4" rx="1" fill="#1A5276" opacity="0.3"/>
        <line x1="14" y1="38" x2="34" y2="38" stroke="#D0D8DC" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    titulo: 'Conectividad',
    descripcion:
      'Infraestructura de red que permite la transmisión de imágenes, datos y alertas desde el punto de captura hacia la plataforma de monitoreo y el personal de operación.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="24" cy="38" r="3" fill="#1A5276"/>
        <path d="M14 29 Q24 20 34 29" stroke="#1A5276" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M9 22 Q24 10 39 22" stroke="#1A5276" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M4 16 Q24 1 44 16" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
]

export default function Componentes() {
  return (
    <section id="componentes" className="py-20 lg:py-28" style={{ backgroundColor: '#F4F6F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            Componentes del sistema
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Qué integra CorreaVisión
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            El sistema integra hardware y software en un conjunto diseñado para operar
            de forma continua en entornos industriales exigentes.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {componentes.map((c, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
              style={{ borderColor: '#D0D8DC' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#F4F6F8' }}>
                {c.icon}
              </div>
              <h3 className="font-sora font-semibold text-base leading-snug"
                style={{ color: '#0D2B3E' }}>
                {c.titulo}
              </h3>
              <p className="font-sans text-sm leading-relaxed"
                style={{ color: '#5A6A72' }}>
                {c.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p className="mt-8 font-sans text-xs text-center" style={{ color: '#5A6A72' }}>
          Las especificaciones técnicas de cada componente se definen según las condiciones
          del punto de instalación y se detallan en la propuesta de piloto.
        </p>

      </div>
    </section>
  )
}
