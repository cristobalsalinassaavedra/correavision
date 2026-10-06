const etapas = [
  {
    num: '01',
    titulo: 'Contacto inicial',
    descripcion:
      'El equipo interesado se comunica con CorreaVisión para dar inicio a la conversación.',
  },
  {
    num: '02',
    titulo: 'Revisión de necesidad',
    descripcion:
      'Se analiza el contexto operacional y se identifica si la propuesta es pertinente para la situación planteada.',
  },
  {
    num: '03',
    titulo: 'Evaluación del punto',
    descripcion:
      'Se revisa el punto de instalación propuesto: accesos, condiciones ambientales, iluminación existente y conectividad disponible.',
  },
  {
    num: '04',
    titulo: 'Propuesta de piloto',
    descripcion:
      'Se elabora una propuesta específica con el alcance, duración, equipamiento y condiciones del piloto demostrativo.',
  },
  {
    num: '05',
    titulo: 'Instalación y prueba',
    descripcion:
      'Se instala el sistema en el punto definido y se realiza la configuración inicial para comenzar la captura y el análisis.',
  },
  {
    num: '06',
    titulo: 'Informe de resultados',
    descripcion:
      'Al término del piloto se entrega un informe con los eventos detectados, el desempeño del sistema y las observaciones del período.',
  },
  {
    num: '07',
    titulo: 'Posible implementación',
    descripcion:
      'Con base en los resultados, el equipo cliente evalúa si continuar con una implementación definitiva.',
  },
  {
    num: '08',
    titulo: 'Soporte y posventa',
    descripcion:
      'En caso de implementación, se define el esquema de soporte técnico, actualizaciones y acompañamiento al equipo de operación.',
  },
]

export default function Piloto() {
  return (
    <section id="piloto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            Prueba piloto
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Cómo sería el proceso de una prueba piloto
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            El piloto es la forma en que CorreaVisión propone demostrar el funcionamiento
            del sistema en condiciones reales, sin comprometer la continuidad operacional.
          </p>
        </div>

        {/* Línea de tiempo — 2 columnas en desktop */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {etapas.map((e, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl border hover:shadow-sm transition-shadow duration-200"
              style={{ borderColor: '#D0D8DC', backgroundColor: '#F4F6F8' }}
            >
              {/* Número */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-sora font-bold text-white text-sm"
                  style={{ backgroundColor: '#1A5276' }}
                >
                  {e.num}
                </div>
                {/* Conector vertical solo en mobile */}
                {i < etapas.length - 1 && (
                  <div
                    className="lg:hidden w-0.5 flex-1 min-h-[1rem]"
                    style={{ backgroundColor: '#D0D8DC' }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Contenido */}
              <div>
                <h3 className="font-sora font-semibold text-sm mb-1"
                  style={{ color: '#0D2B3E' }}>
                  {e.titulo}
                </h3>
                <p className="font-sans text-sm leading-relaxed"
                  style={{ color: '#5A6A72' }}>
                  {e.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha de flujo simplificada (desktop) */}
        <div
          className="hidden lg:flex items-center justify-center gap-2 mt-10 flex-wrap"
          aria-label="Flujo resumido del piloto"
        >
          {['Contacto', 'Evaluación', 'Propuesta', 'Instalación', 'Informe', 'Implementación', 'Soporte'].map((label, i, arr) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="font-sans font-semibold text-xs px-3 py-1.5 rounded-full"
                style={{ backgroundColor: '#0D2B3E', color: '#1ABC9C' }}
              >
                {label}
              </span>
              {i < arr.length - 1 && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7 L11 7 M8 4 L11 7 L8 10" stroke="#1ABC9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
