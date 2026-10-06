export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-16 min-h-screen flex items-center"
      style={{ backgroundColor: '#0D2B3E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <div>
            {/* Badge académico */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-sans font-semibold tracking-wide uppercase"
              style={{ borderColor: '#1ABC9C', color: '#1ABC9C', backgroundColor: 'rgba(26,188,156,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" style={{ backgroundColor: '#1ABC9C' }} />
              Proyecto académico · 2026
            </div>

            <h1 className="font-sora font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Monitoreo visual inteligente para correas transportadoras
            </h1>

            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              CorreaVisión utiliza cámaras e inteligencia artificial para apoyar la detección
              de anomalías visibles y entregar alertas con evidencia al personal de operación
              y mantenimiento.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#solucion"
                className="inline-flex items-center gap-2 font-sora font-semibold text-sm px-5 py-3 rounded border-2 transition-colors duration-200 text-white"
                style={{ borderColor: '#1ABC9C' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(26,188,156,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                Conocer la solución
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 font-sora font-semibold text-sm px-5 py-3 rounded transition-colors duration-200"
                style={{ backgroundColor: '#1ABC9C', color: '#0D2B3E' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#17A589'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1ABC9C'}
              >
                Solicitar demostración
              </a>
            </div>
          </div>

          {/* Mockup SVG — interfaz de monitoreo con marco de cámara */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Marco de detección */}
              <svg
                viewBox="0 0 480 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full drop-shadow-2xl"
                aria-label="Mockup del sistema de monitoreo CorreaVisión"
                role="img"
              >
                {/* Panel de fondo */}
                <rect width="480" height="340" rx="10" fill="#0A1F2E"/>
                <rect x="0" y="0" width="480" height="34" rx="10" fill="#071824"/>
                <rect x="0" y="24" width="480" height="10" fill="#071824"/>

                {/* Barra de título */}
                <circle cx="18" cy="17" r="5" fill="#E74C3C" opacity="0.8"/>
                <circle cx="34" cy="17" r="5" fill="#F39C12" opacity="0.8"/>
                <circle cx="50" cy="17" r="5" fill="#2ECC71" opacity="0.8"/>
                <text x="170" y="21" fill="#5A6A72" fontSize="10" fontFamily="monospace">CorreaVisión — Monitor v1.0</text>

                {/* Área de video principal */}
                <rect x="12" y="44" width="300" height="200" rx="4" fill="#071824"/>

                {/* Correa simulada */}
                <rect x="12" y="120" width="300" height="60" fill="#152535"/>
                <rect x="12" y="126" width="300" height="4"  fill="#1a3040" opacity="0.8"/>
                <rect x="12" y="136" width="300" height="4"  fill="#1a3040" opacity="0.8"/>
                <rect x="12" y="146" width="300" height="4"  fill="#1a3040" opacity="0.8"/>
                <rect x="12" y="156" width="300" height="4"  fill="#1a3040" opacity="0.8"/>
                <rect x="12" y="166" width="300" height="4"  fill="#1a3040" opacity="0.8"/>

                {/* Objeto extraño simulado */}
                <ellipse cx="180" cy="148" rx="18" ry="8" fill="#8B4513" opacity="0.85"/>

                {/* Marco de detección (elemento distintivo) */}
                <rect x="154" y="130" width="52" height="36" rx="2"
                  stroke="#1ABC9C" strokeWidth="1.5" strokeDasharray="4 2" fill="none"/>
                {/* Esquinas del marco */}
                <path d="M154 130 L154 136" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M154 130 L160 130" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M206 130 L200 130" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M206 130 L206 136" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M154 166 L154 160" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M154 166 L160 166" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M206 166 L200 166" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M206 166 L206 160" stroke="#1ABC9C" strokeWidth="2.5" strokeLinecap="round"/>

                {/* Etiqueta de detección */}
                <rect x="154" y="118" width="52" height="12" rx="2" fill="#1ABC9C"/>
                <text x="158" y="127" fill="#0D2B3E" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ALERTA</text>
                <text x="196" y="127" fill="#0D2B3E" fontSize="6" fontFamily="monospace">89%</text>

                {/* Crosshair */}
                <line x1="180" y1="140" x2="180" y2="158" stroke="#1ABC9C" strokeWidth="0.75" opacity="0.6"/>
                <line x1="168" y1="149" x2="192" y2="149" stroke="#1ABC9C" strokeWidth="0.75" opacity="0.6"/>

                {/* Timestamps y overlay */}
                <text x="18" y="58"  fill="#1ABC9C" fontSize="7.5" fontFamily="monospace">REC ●</text>
                <text x="240" y="58" fill="#5A6A72" fontSize="7.5" fontFamily="monospace">14:32:07</text>
                <text x="18" y="236" fill="#5A6A72" fontSize="7"   fontFamily="monospace">CAM-01 · PT-NORTE · FPS: 25</text>

                {/* Panel lateral de estado */}
                <rect x="320" y="44" width="148" height="200" rx="4" fill="#071824"/>
                <text x="334" y="60" fill="#5A6A72" fontSize="8.5" fontFamily="monospace" fontWeight="bold">ESTADO DEL SISTEMA</text>

                {/* Indicadores */}
                {[
                  { label: 'Cámara',       val: 'ACTIVA',  color: '#1ABC9C', y: 80  },
                  { label: 'IA Engine',    val: 'OK',      color: '#1ABC9C', y: 100 },
                  { label: 'Conexión',     val: 'ONLINE',  color: '#1ABC9C', y: 120 },
                  { label: 'Último frame', val: '0.04s',   color: '#F39C12', y: 140 },
                  { label: 'Detecciones',  val: '1',       color: '#E74C3C', y: 160 },
                ].map(item => (
                  <g key={item.label}>
                    <text x="334" y={item.y}   fill="#5A6A72" fontSize="7.5" fontFamily="monospace">{item.label}</text>
                    <text x="334" y={item.y+12} fill={item.color} fontSize="8" fontFamily="monospace" fontWeight="bold">{item.val}</text>
                  </g>
                ))}

                {/* Alerta panel */}
                <rect x="320" y="190" width="148" height="54" rx="3" fill="#1ABC9C" opacity="0.12"/>
                <rect x="320" y="190" width="148" height="54" rx="3" stroke="#1ABC9C" strokeWidth="1" fill="none"/>
                <text x="334" y="206" fill="#1ABC9C" fontSize="8"   fontFamily="monospace" fontWeight="bold">⚠ ANOMALÍA DETECTADA</text>
                <text x="334" y="219" fill="#8ABCCC" fontSize="7"   fontFamily="monospace">Objeto extraño</text>
                <text x="334" y="231" fill="#5A6A72" fontSize="7"   fontFamily="monospace">Zona: Centro-correa</text>
                <text x="334" y="243" fill="#5A6A72" fontSize="7"   fontFamily="monospace">Confianza: 89%</text>

                {/* Barra inferior — historial */}
                <rect x="12" y="254" width="456" height="74" rx="4" fill="#071824"/>
                <text x="20" y="268" fill="#5A6A72" fontSize="8" fontFamily="monospace" fontWeight="bold">HISTORIAL RECIENTE</text>

                {[
                  { t: '14:31:02', tipo: 'Normal',    c: '#1ABC9C' },
                  { t: '14:31:28', tipo: 'Normal',    c: '#1ABC9C' },
                  { t: '14:32:07', tipo: 'Alerta',    c: '#F39C12' },
                  { t: '14:32:07', tipo: 'Crítico',   c: '#E74C3C' },
                ].map((item, i) => (
                  <g key={i}>
                    <rect x={20 + i * 112} y="274" width="104" height="44" rx="3"
                      fill={item.c} opacity="0.08"/>
                    <rect x={20 + i * 112} y="274" width="104" height="44" rx="3"
                      stroke={item.c} strokeWidth="0.75" fill="none"/>
                    <text x={28 + i * 112} y="288" fill={item.c}  fontSize="7.5" fontFamily="monospace" fontWeight="bold">{item.tipo}</text>
                    <text x={28 + i * 112} y="300" fill="#5A6A72" fontSize="7"   fontFamily="monospace">{item.t}</text>
                    <text x={28 + i * 112} y="311" fill="#5A6A72" fontSize="6.5" fontFamily="monospace">Frame capturado</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 opacity-50">
          <a href="#problema" aria-label="Ir a la sección Problema">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1ABC9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
