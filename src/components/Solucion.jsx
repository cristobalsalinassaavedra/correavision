const pasos = [
  {
    num: '01',
    titulo: 'La cámara observa',
    descripcion:
      'Una cámara industrial instalada sobre un sector de la correa captura imágenes de forma continua durante la operación.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="14" width="36" height="24" rx="4" stroke="white" strokeWidth="2"/>
        <circle cx="24" cy="26" r="7" stroke="white" strokeWidth="2"/>
        <circle cx="24" cy="26" r="3" fill="white" opacity="0.3"/>
        <path d="M16 14V11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" stroke="white" strokeWidth="2"/>
        {/* esquinas */}
        <path d="M6 14 L6 18"  stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 14 L10 14" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 14 L38 14" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 14 L42 18" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 38 L6 34"  stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 38 L10 38" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 38 L38 38" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 38 L42 34" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    titulo: 'Las imágenes son analizadas',
    descripcion:
      'Cada imagen es procesada por un modelo de inteligencia artificial que compara lo que se ve con patrones de referencia.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="white" strokeWidth="2"/>
        <line x1="16" y1="24" x2="32" y2="24" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="24" y1="16" x2="24" y2="32" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="20" cy="20" r="3" stroke="#1ABC9C" strokeWidth="1.5" fill="none"/>
        <circle cx="28" cy="28" r="3" stroke="#1ABC9C" strokeWidth="1.5" fill="none"/>
        <rect x="26" y="18" width="6" height="6" rx="1" stroke="#1ABC9C" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    num: '03',
    titulo: 'El sistema identifica cambios',
    descripcion:
      'El modelo identifica variaciones visuales que se alejan de las condiciones normales de operación y las registra.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2"/>
        <path d="M16 24 L21 29 L32 18" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    titulo: 'Genera una alerta con evidencia',
    descripcion:
      'El sistema registra el evento con la imagen capturada, el tipo de anomalía detectada y la hora, y genera una notificación.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M24 8 L28 18 L40 20 L32 28 L34 40 L24 34 L14 40 L16 28 L8 20 L20 18 Z" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="24" r="3" fill="#1ABC9C"/>
      </svg>
    ),
  },
  {
    num: '05',
    titulo: 'El personal verifica y actúa',
    descripcion:
      'El operador o técnico recibe la alerta, revisa la evidencia y evalúa la situación en terreno para tomar la decisión correspondiente.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="16" r="6" stroke="white" strokeWidth="2"/>
        <path d="M12 38 C12 30 36 30 36 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 22 L36 26 L44 18" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Solucion() {
  return (
    <section id="solucion" className="py-20 lg:py-28" style={{ backgroundColor: '#F4F6F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            La solución
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Observación continua con soporte de inteligencia artificial
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            CorreaVisión instala una cámara industrial sobre un punto de la correa y analiza
            automáticamente las imágenes para identificar cambios visuales que merezcan atención,
            entregando alertas con evidencia al equipo de operación o mantenimiento.
          </p>
        </div>

        {/* Flujo de 5 pasos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {pasos.map((paso, i) => (
            <div key={i} className="relative flex flex-col gap-4 p-5 rounded-xl"
              style={{ backgroundColor: '#0D2B3E' }}>
              {/* Número */}
              <span className="font-sora font-bold text-4xl leading-none select-none"
                style={{ color: 'rgba(26,188,156,0.15)' }}>
                {paso.num}
              </span>
              {/* Ícono */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#1A5276' }}>
                {paso.icon}
              </div>
              <h3 className="font-sora font-semibold text-white text-sm leading-snug">
                {paso.titulo}
              </h3>
              <p className="font-sans text-xs leading-relaxed" style={{ color: '#8ABCCC' }}>
                {paso.descripcion}
              </p>
              {/* Conector entre pasos (no en el último) */}
              {i < pasos.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 8 L12 8 M9 5 L12 8 L9 11" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nota de alcance */}
        <div className="flex items-start gap-3 max-w-3xl mx-auto p-5 rounded-xl border"
          style={{ backgroundColor: '#fff', borderColor: '#1ABC9C', borderLeftWidth: '4px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z"
              stroke="#1ABC9C" strokeWidth="2" fill="none"/>
          </svg>
          <div>
            <p className="font-sora font-semibold text-sm mb-1" style={{ color: '#0D2B3E' }}>
              Alcance del sistema
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
              CorreaVisión complementa las inspecciones del personal y <strong>no detiene
              automáticamente la correa</strong>. Su función es observar, identificar condiciones
              visibles fuera de lo normal y notificar al equipo con evidencia para que tome
              la decisión que corresponda.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
