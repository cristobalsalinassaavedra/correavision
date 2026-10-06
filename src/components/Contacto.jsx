import { useForm, ValidationError } from '@formspree/react'

/* ─── Estilos reutilizables ──────────────────────────────────────────────── */
const inputBase =
  'font-sans text-sm rounded-lg px-3.5 py-2.5 border outline-none transition-colors duration-200 bg-white w-full'
const inputStyle = { borderColor: '#D0D8DC', color: '#1C2B33' }
const onFocus = e => (e.target.style.borderColor = '#1ABC9C')
const onBlur  = e => (e.target.style.borderColor = '#D0D8DC')

/* ─── Componente principal ───────────────────────────────────────────────── */
export default function Contacto() {
  /**
   * useForm('mdeaaewo') — Formspree form ID
   * - handleSubmit: recibe el SyntheticEvent del form, llama e.preventDefault()
   *   internamente y envía los datos vía fetch a formspree.io/f/mdeaaewo
   * - reset: restaura state a su valor inicial (para "enviar otro")
   * - state.submitting: true mientras el fetch está en curso
   * - state.succeeded: true cuando Formspree responde con éxito
   * - state.errors: objeto SubmissionError | null con .getFormErrors() / .getFieldErrors(field)
   */
  const [state, handleSubmit, reset] = useForm('mdeaaewo')

  /* ── Diagnóstico: imprime el estado completo en cada render ── */
  if (import.meta.env.DEV) {
    console.log('[Formspree state]', {
      submitting: state.submitting,
      succeeded:  state.succeeded,
      errors:     state.errors,
    })
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Columna izquierda ─────────────────────────────────────────── */}
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
                      <path d="M2 6 L5 9 L10 3" stroke="white" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-sm mb-0.5"
                      style={{ color: '#0D2B3E' }}>{item.titulo}</p>
                    <p className="font-sans text-sm leading-relaxed"
                      style={{ color: '#5A6A72' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha ───────────────────────────────────────────── */}
          <div>

            {/* ── PANEL DE ÉXITO: sólo cuando state.succeeded === true ── */}
            {state.succeeded ? (
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
                    <path d="M5 13 L9 17 L19 7" stroke="white" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-lg" style={{ color: '#0D2B3E' }}>
                  Solicitud enviada correctamente
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6A72' }}>
                  Nos pondremos en contacto contigo.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="font-sans font-semibold text-sm px-5 py-2 rounded-lg border
                             transition-colors duration-200"
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
                  Enviar otra solicitud
                </button>
              </div>

            ) : (
              /* ── FORMULARIO — onSubmit={handleSubmit} es todo lo que Formspree necesita ── */
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border p-6 lg:p-8 flex flex-col gap-5"
                style={{ borderColor: '#D0D8DC', backgroundColor: '#F4F6F8' }}
              >

                {/* Banner de error general (errores de red o de Formspree) */}
                {state.errors && state.errors.getFormErrors().length > 0 && (
                  <div
                    className="flex items-start gap-2 px-4 py-3 rounded-lg border"
                    style={{
                      backgroundColor: 'rgba(231,76,60,0.06)',
                      borderColor: 'rgba(231,76,60,0.3)',
                    }}
                    role="alert"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="#E74C3C" strokeWidth="2"/>
                      <line x1="12" y1="8" x2="12" y2="12"
                        stroke="#E74C3C" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="16" r="1" fill="#E74C3C"/>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <p className="font-sans text-xs leading-relaxed" style={{ color: '#922B21' }}>
                        No fue posible enviar la solicitud. Intente nuevamente.
                      </p>
                      {/* Detalle del error para diagnóstico (visible en todos los entornos) */}
                      <p className="font-sans text-xs" style={{ color: '#922B21', opacity: 0.7 }}>
                        {state.errors.getFormErrors().map(e => e.message).join(' · ')}
                      </p>
                    </div>
                  </div>
                )}

                {/* Nombre + Empresa */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}>
                      Nombre <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Su nombre"
                      className={inputBase}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                    <ValidationError field="name" prefix="Nombre" errors={state.errors}
                      className="font-sans text-xs" style={{ color: '#E74C3C' }}/>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}>
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nombre de la empresa"
                      className={inputBase}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </div>

                {/* Correo + Cargo */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}>
                      Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="correo@empresa.cl"
                      className={inputBase}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                    <ValidationError field="email" prefix="Correo" errors={state.errors}
                      className="font-sans text-xs" style={{ color: '#E74C3C' }}/>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="role"
                      className="font-sans font-semibold text-xs uppercase tracking-wide"
                      style={{ color: '#1A5276' }}>
                      Cargo
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Su cargo en la empresa"
                      className={inputBase}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message"
                    className="font-sans font-semibold text-xs uppercase tracking-wide"
                    style={{ color: '#1A5276' }}>
                    Mensaje <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Cuéntenos brevemente sobre su operación y qué le interesa conocer..."
                    className={`${inputBase} resize-none`}
                    style={inputStyle}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                  <ValidationError field="message" prefix="Mensaje" errors={state.errors}
                    className="font-sans text-xs" style={{ color: '#E74C3C' }}/>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="font-sora font-semibold text-sm py-3 px-6 rounded-xl
                             transition-colors duration-200 text-white w-full
                             disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#1A5276' }}
                  onMouseEnter={e => {
                    if (!state.submitting) e.currentTarget.style.backgroundColor = '#0D2B3E'
                  }}
                  onMouseLeave={e => {
                    if (!state.submitting) e.currentTarget.style.backgroundColor = '#1A5276'
                  }}
                >
                  {state.submitting ? 'Enviando...' : 'Solicitar contacto'}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
