const miembros = [
  {
    nombre: 'Cristóbal Salinas Saavedra',
    rol: 'Coordinación general y comercial',
    descripcion:
      'Responsable de la dirección del proyecto y de la relación con los potenciales clientes. Coordina las áreas del equipo y lidera la propuesta de valor.',
    inicial: 'CS',
    color: '#0D2B3E',
  },
  {
    nombre: 'Juan Alvarado Arancibia',
    rol: 'Operaciones e instalación',
    descripcion:
      'A cargo de la planificación y ejecución de las instalaciones, la logística del piloto y el soporte técnico en terreno.',
    inicial: 'JA',
    color: '#1A5276',
  },
  {
    nombre: 'Manuel Cisternas Castro',
    rol: 'Desarrollo y datos',
    descripcion:
      'Responsable del desarrollo del sistema de análisis de imágenes, la configuración del modelo de inteligencia artificial y la plataforma de monitoreo.',
    inicial: 'MC',
    color: '#1A5276',
  },
  {
    nombre: 'Gabriel Zamora Cornejo',
    rol: 'Administración y finanzas',
    descripcion:
      'A cargo de la gestión administrativa, el seguimiento financiero del proyecto y el apoyo en la estructuración de las propuestas económicas.',
    inicial: 'GZ',
    color: '#0D2B3E',
  },
]

export default function Equipo() {
  return (
    <section id="equipo" className="py-20 lg:py-28" style={{ backgroundColor: '#F4F6F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            Equipo
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Quiénes integran CorreaVisión
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            El proyecto es desarrollado por estudiantes de Ingeniería en Mantenimiento Industrial
            como parte del curso de Gestión del Emprendimiento, año 2026.
          </p>
        </div>

        {/* Tarjetas del equipo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {miembros.map((m, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl overflow-hidden border hover:shadow-md transition-shadow duration-200 bg-white"
              style={{ borderColor: '#D0D8DC' }}
            >
              {/* Avatar */}
              <div
                className="flex items-center justify-center py-8"
                style={{ backgroundColor: m.color }}
              >
                {/* Marco de cámara como detalle en el avatar */}
                <div className="relative">
                  {/* Esquinas del marco */}
                  <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#1ABC9C' }} aria-hidden="true"/>
                  <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#1ABC9C' }} aria-hidden="true"/>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#1ABC9C' }} aria-hidden="true"/>
                  <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#1ABC9C' }} aria-hidden="true"/>

                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-sora font-bold text-xl text-white"
                    style={{ backgroundColor: 'rgba(26,188,156,0.2)', border: '2px solid rgba(26,188,156,0.4)' }}
                    aria-label={`Iniciales de ${m.nombre}`}
                  >
                    {m.inicial}
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-sora font-bold text-base leading-snug mb-1"
                  style={{ color: '#0D2B3E' }}>
                  {m.nombre}
                </h3>
                <p className="font-sans font-semibold text-xs mb-3 uppercase tracking-wide"
                  style={{ color: '#1ABC9C' }}>
                  {m.rol}
                </p>
                <p className="font-sans text-sm leading-relaxed"
                  style={{ color: '#5A6A72' }}>
                  {m.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota académica */}
        <div className="mt-10 flex items-start gap-3 max-w-2xl mx-auto p-4 rounded-lg border"
          style={{ backgroundColor: 'white', borderColor: '#D0D8DC' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <path d="M22 10 L12 5 L2 10 L12 15 Z" stroke="#1A5276" strokeWidth="2" strokeLinejoin="round" fill="none"/>
            <path d="M6 12.5 V18 C6 18 9 21 12 21 C15 21 18 18 18 18 V12.5" stroke="#1A5276" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <line x1="22" y1="10" x2="22" y2="16" stroke="#1A5276" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
            Este equipo desarrolla CorreaVisión como propuesta de emprendimiento en el marco
            del curso <strong style={{ color: '#1C2B33' }}>Gestión del Emprendimiento</strong>,
            carrera de Ingeniería en Mantenimiento Industrial, año 2026.
          </p>
        </div>

      </div>
    </section>
  )
}
