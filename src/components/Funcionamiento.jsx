const pasos = [
  {
    num: 1,
    etiqueta: 'Captura',
    titulo: 'Captura de imagen',
    descripcion:
      'La cámara industrial registra imágenes del sector asignado de la correa de forma continua durante la operación.',
    color: '#1A5276',
  },
  {
    num: 2,
    etiqueta: 'Calidad',
    titulo: 'Revisión de calidad',
    descripcion:
      'El sistema evalúa automáticamente si la imagen tiene la calidad suficiente (iluminación, enfoque) para ser analizada.',
    color: '#1A5276',
  },
  {
    num: 3,
    etiqueta: 'IA',
    titulo: 'Análisis con inteligencia artificial',
    descripcion:
      'El modelo de IA procesa la imagen y compara las condiciones visuales observadas con los patrones de referencia de operación normal.',
    color: '#1A5276',
  },
  {
    num: 4,
    etiqueta: 'Clasificación',
    titulo: 'Clasificación del resultado',
    descripcion: 'El sistema asigna una categoría a lo observado:',
    badges: [
      { label: 'Normal',  color: '#1ABC9C', bg: 'rgba(26,188,156,0.12)' },
      { label: 'Alerta',  color: '#F39C12', bg: 'rgba(243,156,18,0.12)' },
      { label: 'Crítico', color: '#E74C3C', bg: 'rgba(231,76,60,0.12)' },
    ],
    color: '#1A5276',
  },
  {
    num: 5,
    etiqueta: 'Alerta',
    titulo: 'Alerta y verificación',
    descripcion:
      'Si se detecta una anomalía, el sistema genera una alerta con la imagen como evidencia. El personal recibe la notificación y verifica en terreno.',
    color: '#1A5276',
  },
]

export default function Funcionamiento() {
  return (
    <section id="funcionamiento" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            Funcionamiento
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Del frame a la alerta en cinco pasos
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            El proceso opera de forma continua y automatizada. Cada imagen capturada
            sigue este flujo antes de generar —o descartar— una notificación.
          </p>
        </div>

        {/* Pasos verticales con línea */}
        <div className="relative">
          {/* Línea vertical conectora (desktop) */}
          <div
            className="hidden lg:block absolute left-[2.75rem] top-6 bottom-6 w-0.5"
            style={{ backgroundColor: '#D0D8DC' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {pasos.map((paso, i) => (
              <div key={i} className="flex gap-6 lg:gap-8 items-start">

                {/* Número circular */}
                <div className="relative z-10 flex-shrink-0 w-[5.5rem] flex flex-col items-center gap-1">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-sora font-bold text-white text-base"
                    style={{ backgroundColor: '#1A5276' }}
                  >
                    {paso.num}
                  </div>
                  <span
                    className="font-sora font-semibold text-xs uppercase tracking-wide text-center"
                    style={{ color: '#1ABC9C' }}
                  >
                    {paso.etiqueta}
                  </span>
                </div>

                {/* Contenido */}
                <div
                  className="flex-1 border rounded-xl p-5 lg:p-6"
                  style={{ borderColor: '#D0D8DC', backgroundColor: '#F4F6F8' }}
                >
                  <h3 className="font-sora font-semibold text-base mb-2"
                    style={{ color: '#0D2B3E' }}>
                    {paso.titulo}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed"
                    style={{ color: '#5A6A72' }}>
                    {paso.descripcion}
                  </p>

                  {paso.badges && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {paso.badges.map(b => (
                        <span
                          key={b.label}
                          className="font-sans font-semibold text-xs px-3 py-1 rounded-full"
                          style={{ color: b.color, backgroundColor: b.bg }}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Detalle extra para el último paso */}
                  {paso.num === 5 && (
                    <div className="mt-3 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-sans text-xs" style={{ color: '#1ABC9C' }}>
                        El personal valida la situación y decide la acción a tomar
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
