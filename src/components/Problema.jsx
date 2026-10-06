const anomalias = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="18" width="32" height="8" rx="2" stroke="#1A5276" strokeWidth="2"/>
        <path d="M14 18 L14 8 M26 18 L26 8" stroke="#1A5276" strokeWidth="1.5" strokeDasharray="3 2"/>
        <path d="M10 22 L16 22 M24 22 L30 22" stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 26 Q12 30 20 24 Q28 18 36 26" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    titulo: 'Desalineamiento',
    descripcion:
      'La correa puede desplazarse lateralmente respecto a su trayectoria normal, lo que genera desgaste irregular y riesgo de derrame.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="16" width="32" height="10" rx="2" stroke="#1A5276" strokeWidth="2"/>
        <path d="M14 26 Q14 34 10 36 Q18 34 16 26" fill="#F39C12" opacity="0.6"/>
        <path d="M22 26 Q24 32 20 36 Q26 32 28 26" fill="#F39C12" opacity="0.6"/>
        <path d="M8 16 Q12 10 16 16" stroke="#1A5276" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    titulo: 'Derrame de material',
    descripcion:
      'El material transportado puede caer fuera de la correa, acumulándose en zonas donde representa un riesgo operacional.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="16" width="32" height="10" rx="2" stroke="#1A5276" strokeWidth="2"/>
        <ellipse cx="14" cy="26" rx="5" ry="3" fill="#8B7355" opacity="0.7"/>
        <ellipse cx="26" cy="28" rx="7" ry="4" fill="#8B7355" opacity="0.7"/>
        <ellipse cx="20" cy="25" rx="4" ry="2" fill="#8B7355" opacity="0.5"/>
      </svg>
    ),
    titulo: 'Acumulación de material',
    descripcion:
      'Depósitos progresivos de material sobre rodillos, soportes u otras superficies pueden afectar el movimiento y generar sobrecarga.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="16" width="32" height="10" rx="2" stroke="#1A5276" strokeWidth="2"/>
        <rect x="16" y="19" width="8" height="4" rx="1" fill="#E74C3C" opacity="0.8"/>
        <path d="M16 19 L24 23 M24 19 L16 23" stroke="white" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="20" cy="21" r="5" stroke="#E74C3C" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    titulo: 'Objetos extraños',
    descripcion:
      'Elementos ajenos al material transportado pueden introducirse en la correa, generando daños mecánicos si no se detectan a tiempo.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="16" width="32" height="10" rx="2" stroke="#1A5276" strokeWidth="2"/>
        <path d="M10 20 Q12 18 14 22 Q16 18 18 20" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <line x1="22" y1="16" x2="22" y2="26" stroke="#E74C3C" strokeWidth="2" strokeDasharray="2 1"/>
        <path d="M26 18 L30 18 L30 24 L26 24" stroke="#E74C3C" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    titulo: 'Daños visibles en la correa',
    descripcion:
      'Cortes, desgarros, perforaciones o deformaciones superficiales que son detectables visualmente antes de convertirse en una falla mayor.',
  },
]

export default function Problema() {
  return (
    <section id="problema" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            El problema
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Lo que ocurre entre una inspección y la siguiente también importa
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            Las correas transportadoras operan de forma continua en entornos exigentes.
            Entre una ronda de inspección y la siguiente pueden aparecer condiciones que
            se desarrollan gradualmente y que son visibles, pero que permanecen sin
            atención hasta que alguien las observa directamente.
          </p>
        </div>

        {/* Tarjetas de anomalías */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {anomalias.map((a, i) => (
            <div
              key={i}
              className="group border rounded-lg p-5 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-md bg-white"
              style={{ borderColor: '#D0D8DC' }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#F4F6F8' }}>
                {a.icon}
              </div>
              <h3 className="font-sora font-semibold text-base"
                style={{ color: '#1C2B33' }}>
                {a.titulo}
              </h3>
              <p className="font-sans text-sm leading-relaxed"
                style={{ color: '#5A6A72' }}>
                {a.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Nota de contexto */}
        <div className="mt-10 flex items-start gap-3 max-w-2xl p-4 rounded-lg border"
          style={{ backgroundColor: '#F4F6F8', borderColor: '#D0D8DC' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#1A5276" strokeWidth="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#1A5276"/>
          </svg>
          <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
            Estas situaciones no implican necesariamente una detención inmediata de la operación,
            pero sí requieren atención oportuna. El personal es quien evalúa y decide la acción
            a tomar en cada caso.
          </p>
        </div>

      </div>
    </section>
  )
}
