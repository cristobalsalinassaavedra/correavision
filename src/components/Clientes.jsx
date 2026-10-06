const granMineria = [
  {
    area: 'Mantenimiento',
    descripcion:
      'Equipos a cargo de la confiabilidad de los activos, con interés en herramientas que apoyen la detección temprana de condiciones fuera de lo normal.',
  },
  {
    area: 'Confiabilidad',
    descripcion:
      'Especialistas que evalúan el desempeño de activos y buscan reducir la probabilidad de fallas no planificadas.',
  },
  {
    area: 'Operaciones',
    descripcion:
      'Supervisores y operadores responsables de la continuidad del proceso que valoran contar con más visibilidad sobre lo que ocurre en el circuito.',
  },
  {
    area: 'Abastecimiento y contratos',
    descripcion:
      'Equipos que participan en la evaluación y contratación de soluciones tecnológicas para el área de operación.',
  },
  {
    area: 'Procesos con correas transportadoras',
    descripcion:
      'Áreas con circuitos de transporte de material donde la continuidad operacional y el control visual son parte de la gestión diaria.',
  },
]

const medianaMineria = [
  {
    area: 'Plantas de chancado',
    descripcion:
      'Instalaciones donde las correas transportadoras tienen un rol central en la alimentación y el movimiento de material entre etapas del proceso.',
  },
  {
    area: 'Plantas de beneficio',
    descripcion:
      'Operaciones con circuitos de transporte de mineral que requieren vigilancia continua con equipos de menor tamaño.',
  },
  {
    area: 'Equipos de mantenimiento reducidos',
    descripcion:
      'Organizaciones con dotaciones más acotadas, donde el apoyo tecnológico puede ampliar la cobertura de monitoreo sin aumentar la dotación.',
  },
]

export default function Clientes() {
  return (
    <section id="clientes" className="py-20 lg:py-28" style={{ backgroundColor: '#F4F6F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            Clientes objetivo
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            A quiénes se dirige CorreaVisión
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            La propuesta está orientada principalmente a operaciones mineras con correas
            transportadoras en funcionamiento, tanto en gran escala como en instalaciones
            de mediana minería.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Gran minería */}
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#D0D8DC' }}>
            {/* Header */}
            <div className="p-6" style={{ backgroundColor: '#0D2B3E' }}>
              <div className="flex items-center gap-3 mb-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" stroke="#1ABC9C" strokeWidth="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#1ABC9C" strokeWidth="2"/>
                  <line x1="12" y1="12" x2="12" y2="16" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="10" y1="14" x2="14" y2="14" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3 className="font-sora font-bold text-white text-lg">Gran minería</h3>
              </div>
              <p className="font-sans text-sm" style={{ color: '#8ABCCC' }}>
                Operaciones de gran escala con áreas especializadas de mantenimiento y confiabilidad.
              </p>
            </div>

            {/* Áreas */}
            <div className="divide-y" style={{ divideColor: '#D0D8DC' }}>
              {granMineria.map((item, i) => (
                <div key={i} className="p-5 bg-white flex gap-3">
                  <div
                    className="w-1.5 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: '#1ABC9C', minHeight: '1rem' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-sora font-semibold text-sm mb-0.5"
                      style={{ color: '#1A5276' }}>
                      {item.area}
                    </p>
                    <p className="font-sans text-sm leading-relaxed"
                      style={{ color: '#5A6A72' }}>
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mediana minería */}
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#D0D8DC' }}>
            {/* Header */}
            <div className="p-6" style={{ backgroundColor: '#1A5276' }}>
              <div className="flex items-center gap-3 mb-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 21 L3 10 L9 6 L9 21" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M9 21 L9 14 L15 10 L15 21" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M15 21 L15 16 L21 12 L21 21" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <line x1="3" y1="21" x2="21" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3 className="font-sora font-bold text-white text-lg">Mediana minería</h3>
              </div>
              <p className="font-sans text-sm text-blue-100">
                Instalaciones con dotaciones más reducidas donde el apoyo tecnológico cobra mayor valor relativo.
              </p>
            </div>

            {/* Áreas */}
            <div className="divide-y" style={{ divideColor: '#D0D8DC' }}>
              {medianaMineria.map((item, i) => (
                <div key={i} className="p-5 bg-white flex gap-3">
                  <div
                    className="w-1.5 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: '#1A5276', minHeight: '1rem' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-sora font-semibold text-sm mb-0.5"
                      style={{ color: '#0D2B3E' }}>
                      {item.area}
                    </p>
                    <p className="font-sans text-sm leading-relaxed"
                      style={{ color: '#5A6A72' }}>
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Nota */}
        <p className="mt-8 font-sans text-sm text-center" style={{ color: '#5A6A72' }}>
          Las menciones de segmentos son orientativas y no corresponden a clientes actuales de CorreaVisión.
        </p>

      </div>
    </section>
  )
}
