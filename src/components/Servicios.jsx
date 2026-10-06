const servicios = [
  {
    titulo: 'Piloto demostrativo',
    descripcion:
      'Instalación temporal del sistema en un punto de la correa del cliente para demostrar el funcionamiento en condiciones reales de operación. Incluye configuración, monitoreo activo durante el período acordado e informe de resultados.',
    detalle: [
      'Duración definida en la propuesta',
      'Instalación y retiro del equipo',
      'Informe de eventos detectados',
      'Sin compromiso de continuidad',
    ],
    highlight: true,
  },
  {
    titulo: 'Implementación por punto',
    descripcion:
      'Instalación permanente del sistema en un punto de monitoreo definido, con configuración adaptada a las condiciones del lugar y conectividad con la plataforma de visualización.',
    detalle: [
      'Evaluación del punto de instalación',
      'Equipamiento e instalación',
      'Configuración del modelo de IA',
      'Capacitación al equipo operacional',
    ],
    highlight: false,
  },
  {
    titulo: 'Monitoreo y soporte',
    descripcion:
      'Servicio continuo que incluye el mantenimiento del sistema instalado, actualización del modelo de análisis, resolución de incidencias técnicas y acompañamiento al equipo de operación.',
    detalle: [
      'Soporte técnico remoto',
      'Actualizaciones del software',
      'Revisión periódica del sistema',
      'Acceso a historial de eventos',
    ],
    highlight: false,
  },
  {
    titulo: 'Servicios adicionales',
    descripcion:
      'Adaptaciones específicas según las necesidades de cada operación: integración con sistemas de gestión existentes, configuración de alertas personalizadas, reportes periódicos y otros requerimientos específicos.',
    detalle: [
      'Integración con sistemas del cliente',
      'Reportes personalizados',
      'Configuración de umbrales de alerta',
      'Consultoría técnica',
    ],
    highlight: false,
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: '#1ABC9C' }}>
            Servicios
          </p>
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
            style={{ color: '#0D2B3E' }}>
            Qué contempla la propuesta
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#5A6A72' }}>
            CorreaVisión articula su propuesta en torno a cuatro servicios principales,
            desde el primer contacto hasta el acompañamiento en operación continua.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl overflow-hidden border transition-shadow duration-200 hover:shadow-md"
              style={{
                borderColor: s.highlight ? '#1ABC9C' : '#D0D8DC',
                boxShadow: s.highlight ? '0 0 0 1px #1ABC9C' : undefined,
              }}
            >
              {/* Header de tarjeta */}
              <div
                className="p-5 pb-4"
                style={{ backgroundColor: s.highlight ? '#1ABC9C' : '#0D2B3E' }}
              >
                {s.highlight && (
                  <span
                    className="inline-block font-sans font-semibold text-xs px-2 py-0.5 rounded-full mb-3"
                    style={{ backgroundColor: '#0D2B3E', color: '#1ABC9C' }}
                  >
                    Punto de entrada recomendado
                  </span>
                )}
                <h3
                  className="font-sora font-bold text-base leading-snug"
                  style={{ color: s.highlight ? '#0D2B3E' : 'white' }}
                >
                  {s.titulo}
                </h3>
              </div>

              {/* Cuerpo */}
              <div className="flex flex-col flex-1 p-5 gap-4 bg-white">
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
                  {s.descripcion}
                </p>

                <ul className="flex flex-col gap-2 mt-auto">
                  {s.detalle.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M3 8 L6.5 11.5 L13 5" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-sans text-xs leading-relaxed" style={{ color: '#5A6A72' }}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="mt-3 block text-center font-sora font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors duration-200"
                  style={
                    s.highlight
                      ? { backgroundColor: '#0D2B3E', color: '#1ABC9C' }
                      : { backgroundColor: '#F4F6F8', color: '#1A5276' }
                  }
                  onMouseEnter={e =>
                    e.currentTarget.style.backgroundColor = s.highlight ? '#1A5276' : '#D0D8DC'
                  }
                  onMouseLeave={e =>
                    e.currentTarget.style.backgroundColor = s.highlight ? '#0D2B3E' : '#F4F6F8'
                  }
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de precios */}
        <div className="mt-10 flex items-start gap-3 max-w-xl mx-auto p-4 rounded-lg border text-center justify-center"
          style={{ backgroundColor: '#F4F6F8', borderColor: '#D0D8DC' }}>
          <p className="font-sans text-sm" style={{ color: '#5A6A72' }}>
            Los valores de cada servicio se definen según las condiciones del proyecto
            y se detallan en la propuesta específica.
          </p>
        </div>

      </div>
    </section>
  )
}
