import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    cargo: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Formulario demostrativo — sin backend
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ nombre: '', empresa: '', correo: '', cargo: '', mensaje: '' })
    setSubmitted(false)
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Columna izquierda — contexto */}
          <div>
            <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3"
              style={{ color: '#1ABC9C' }}>
              Contacto
            </p>
            <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-5"
              style={{ color: '#0D2B3E' }}>
              Hablemos sobre su operación
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-8"
              style={{ color: '#5A6A72' }}>
              Si tiene correas transportadoras en operación y le interesa conocer más sobre
              CorreaVisión, complete el formulario y el equipo se pondrá en contacto para
              explorar si la propuesta es pertinente a su caso.
            </p>

            {/* Qué esperar */}
            <div className="flex flex-col gap-4">
              {[
                {
                  titulo: 'Conversación sin compromiso',
                  desc: 'La primera comunicación es solo para conocer su contexto y evaluar si la propuesta tiene sentido para su operación.',
                },
                {
                  titulo: 'Evaluación técnica',
                  desc: 'Si existe interés mutuo, se coordina una revisión del punto de instalación propuesto antes de elaborar cualquier propuesta formal.',
                },
                {
                  titulo: 'Propuesta adaptada',
                  desc: 'Cualquier propuesta de piloto se construye en base a las condiciones específicas de su operación.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#1ABC9C' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6 L5 9 L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-sm mb-0.5" style={{ color: '#0D2B3E' }}>
                      {item.titulo}
                    </p>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div>
            {/* Aviso demostrativo */}
            <div
              className="flex items-start gap-2 px-4 py-3 rounded-lg mb-5 border"
              style={{ backgroundColor: 'rgba(243,156,18,0.06)', borderColor: 'rgba(243,156,18,0.3)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                <path d="M10.29 3.86 L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3 L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#F39C12" strokeWidth="2" fill="none"/>
                <line x1="12" y1="9"  x2="12" y2="13" stroke="#F39C12" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="17" r="1" fill="#F39C12"/>
              </svg>
              <p className="font-sans text-xs leading-relaxed" style={{ color: '#8B6914' }}>
                <strong>Formulario demostrativo.</strong> Este formulario no envía datos a ningún servidor.
                Es parte de una propuesta académica y tiene fines ilustrativos.
              </p>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border p-6 lg:p-8 flex flex-col gap-5"
                style={{ borderColor: '#D0D8DC', backgroundColor: '#F4F6F8' }}
              >
                {/* Nombre + Empresa */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="nombre"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}
                    >
                      Nombre <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Su nombre"
                      className="font-sans text-sm rounded-lg px-3.5 py-2.5 border outline-none transition-colors duration-200 bg-white"
                      style={{ borderColor: '#D0D8DC', color: '#1C2B33' }}
                      onFocus={e => e.target.style.borderColor = '#1ABC9C'}
                      onBlur={e => e.target.style.borderColor = '#D0D8DC'}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="empresa"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa"
                      className="font-sans text-sm rounded-lg px-3.5 py-2.5 border outline-none transition-colors duration-200 bg-white"
                      style={{ borderColor: '#D0D8DC', color: '#1C2B33' }}
                      onFocus={e => e.target.style.borderColor = '#1ABC9C'}
                      onBlur={e => e.target.style.borderColor = '#D0D8DC'}
                    />
                  </div>
                </div>

                {/* Correo + Cargo */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="correo"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}
                    >
                      Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="correo@empresa.cl"
                      className="font-sans text-sm rounded-lg px-3.5 py-2.5 border outline-none transition-colors duration-200 bg-white"
                      style={{ borderColor: '#D0D8DC', color: '#1C2B33' }}
                      onFocus={e => e.target.style.borderColor = '#1ABC9C'}
                      onBlur={e => e.target.style.borderColor = '#D0D8DC'}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cargo"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}
                    >
                      Cargo
                    </label>
                    <input
                      id="cargo"
                      name="cargo"
                      type="text"
                      value={formData.cargo}
                      onChange={handleChange}
                      placeholder="Su cargo en la empresa"
                      className="font-sans text-sm rounded-lg px-3.5 py-2.5 border outline-none transition-colors duration-200 bg-white"
                      style={{ borderColor: '#D0D8DC', color: '#1C2B33' }}
                      onFocus={e => e.target.style.borderColor = '#1ABC9C'}
                      onBlur={e => e.target.style.borderColor = '#D0D8DC'}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="mensaje"
                    className="font-sans font-semibold text-xs uppercase tracking-wide"
                    style={{ color: '#1A5276' }}
                  >
                    Mensaje <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntenos brevemente sobre su operación y qué le interesa conocer..."
                    className="font-sans text-sm rounded-lg px-3.5 py-2.5 border outline-none transition-colors duration-200 bg-white resize-none"
                    style={{ borderColor: '#D0D8DC', color: '#1C2B33' }}
                    onFocus={e => e.target.style.borderColor = '#1ABC9C'}
                    onBlur={e => e.target.style.borderColor = '#D0D8DC'}
                  />
                </div>

                <button
                  type="submit"
                  className="font-sora font-semibold text-sm py-3 px-6 rounded-xl transition-colors duration-200 text-white w-full"
                  style={{ backgroundColor: '#1A5276' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0D2B3E'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1A5276'}
                >
                  Solicitar contacto
                </button>
              </form>
            ) : (
              /* Estado de confirmación */
              <div
                className="rounded-2xl border p-8 flex flex-col items-center gap-4 text-center"
                style={{ borderColor: '#1ABC9C', backgroundColor: 'rgba(26,188,156,0.04)' }}
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1ABC9C' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13 L9 17 L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-lg" style={{ color: '#0D2B3E' }}>
                  Formulario enviado (demo)
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
                  Este es un resultado demostrativo. En una implementación real, el equipo
                  de CorreaVisión recibiría su solicitud y se pondría en contacto en un plazo breve.
                </p>
                <p className="font-sans text-xs px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'rgba(243,156,18,0.08)', color: '#8B6914' }}>
                  Recuerde que este formulario no envía datos reales.
                </p>
                <button
                  onClick={handleReset}
                  className="font-sans font-semibold text-sm px-5 py-2 rounded-lg border transition-colors duration-200"
                  style={{ borderColor: '#1A5276', color: '#1A5276' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#1A5276'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#1A5276'
                  }}
                >
                  Completar de nuevo
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
