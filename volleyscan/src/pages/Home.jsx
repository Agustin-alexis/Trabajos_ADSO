import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import Logo from '../assets/img/Logo.Vs.jpg'
import Img from '../assets/img/imagen1.jpg'

/* ── Datos ── */
const STATS = [
  { value: 38,      suffix: '%+', label: 'Mejora Promedio',      color: 'gold' },
  { value: 120,     suffix: '+',  label: 'Atletas Analizados',   color: 'cyan' },
  { value: 95,      suffix: '%',  label: 'Satisfacción',         color: 'gold' },
  { value: 10000,   suffix: '+',  label: 'Sesiones Procesadas',  color: 'cyan' },
]

const TECH = [
  { icon: '⌁', color: 'cyan', title: 'Mapeo Esquelético Avanzado',   desc: 'Rastreo en tiempo real de 33 puntos articulares para análisis biomecánico completo de cada movimiento.' },
  { icon: '▮▮',color: 'gold', title: 'Comparación Profesional',       desc: 'Compara tus métricas con atletas profesionales y detecta áreas de mejora con precisión milimétrica.' },
  { icon: '◎', color: 'cyan', title: 'Retroalimentación Estratégica', desc: 'Recibe consejos personalizados generados por IA para mejorar técnica, posición y estrategia de juego.' },
  { icon: '⚡',color: 'gold', title: 'Análisis en Tiempo Real',       desc: 'Procesamiento instantáneo de video con detección automática de errores técnicos y patrones de movimiento.' },
]

const PLANS = [
  {
    name: 'Novato', featured: false,
    desc: 'Perfecto para comenzar tu camino en el análisis deportivo.',
    price: 'Gratis', priceSuffix: '',
    features: ['5 análisis por mes', 'Detección básica de pose', 'Historial de sesiones', 'Soporte por email'],
    btn: 'Comenzar Gratis', btnClass: 'btn-plan outline',
  },
  {
    name: 'Atleta Profesional', featured: true,
    desc: 'Para atletas serios que buscan el máximo rendimiento.',
    price: '$19.99', priceSuffix: '/ mes',
    features: ['Análisis ilimitados', 'IA avanzada en tiempo real', 'Comparación con pros', 'Retroalimentación personalizada', 'Exportar reportes', 'Soporte prioritario'],
    btn: 'Elegir Plan Pro', btnClass: 'btn-plan gold-btn',
  },
  {
    name: 'Club', featured: false,
    desc: 'Gestión completa para equipos y clubes deportivos.',
    price: '$49.99', priceSuffix: '/ mes',
    features: ['Todo el plan Pro', 'Hasta 30 atletas', 'Panel del entrenador', 'Estadísticas del equipo', 'API de integración', 'Soporte dedicado'],
    btn: 'Contactar Ventas', btnClass: 'btn-plan outline cyan',
  },
]

const FOOTER_LINKS = [
  { title: 'Producto',  links: ['Características', 'Precios', 'Actualizaciones', 'Roadmap'] },
  { title: 'Recursos',  links: ['Documentación', 'Tutoriales', 'Blog', 'Comunidad'] },
  { title: 'Compañía',  links: ['Sobre nosotros', 'Contacto', 'Privacidad', 'Términos'] },
]

export default function Home() {
  const cursorCoreRef = useRef(null)
  const cursorAuraRef = useRef(null)
  const heroRef       = useRef(null)
  const heroImgRef    = useRef(null)
  const countersRef   = useRef([])
  const resultsSectionRef = useRef(null)
  const countersStarted   = useRef(false)

  /* ── Cursor personalizado ── */
  useEffect(() => {
    const core = cursorCoreRef.current
    const aura = cursorAuraRef.current
    if (!core || !aura) return

    let mx = 0, my = 0, ax = 0, ay = 0
    let rafId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      core.style.left = mx + 'px'
      core.style.top  = my + 'px'
    }

    function animateCursor() {
      ax += (mx - ax) * 0.12
      ay += (my - ay) * 0.12
      aura.style.left = ax - 60 + 'px'
      aura.style.top  = ay - 60 + 'px'
      rafId = requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animateCursor)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  /* ── Parallax + contadores al scroll ── */
  useEffect(() => {
    const hero    = heroRef.current
    const heroImg = heroImgRef.current
    const results = resultsSectionRef.current

    function onScroll() {
      const scrollY  = window.scrollY
      const trigger  = window.innerHeight * 0.85

      // Parallax hero
      if (hero)    hero.style.transform    = `translateY(${scrollY * 0.15}px)`
      if (heroImg) heroImg.style.transform = `translateY(${scrollY * -0.15}px)`

      // Reveal elements
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < trigger) el.classList.add('active')
      })

      // Contadores
      if (!countersStarted.current && results &&
          results.getBoundingClientRect().top < window.innerHeight * 0.8) {
        countersStarted.current = true
        countersRef.current.forEach((el, i) => {
          if (!el) return
          const stat   = STATS[i]
          const target = stat.value
          let value    = 0
          const step   = Math.max(1, target / 80)
          function update() {
            value += step
            if (value < target) {
              el.textContent = Math.floor(value) + stat.suffix
              requestAnimationFrame(update)
            } else {
              el.textContent = target + stat.suffix
            }
          }
          update()
        })
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Breathing hero ── */
  useEffect(() => {
    let breath = 0, rafId
    const hero = document.querySelector('.hero')
    function breathe() {
      breath += 0.003
      if (hero) hero.style.transform = `translateY(${Math.sin(breath) * 8}px)`
      rafId = requestAnimationFrame(breathe)
    }
    rafId = requestAnimationFrame(breathe)
    return () => cancelAnimationFrame(rafId)
  }, [])

  /* ── Floating image ── */
  useEffect(() => {
    let t = 0, rafId
    function float() {
      t += 0.01
      const img = heroImgRef.current
      if (img) img.style.transform = `translateY(${Math.sin(t) * 12}px) rotate(${Math.sin(t * 0.6) * 1.5}deg)`
      rafId = requestAnimationFrame(float)
    }
    rafId = requestAnimationFrame(float)
    return () => cancelAnimationFrame(rafId)
  }, [])

  /* ── Efecto scramble en spans de h1 ── */
  function handleScramble(e) {
    const el = e.currentTarget
    const original = el.innerText
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let iteration = 0
    clearInterval(el._interval)
    el._interval = setInterval(() => {
      el.innerText = original.split('').map((char, i) =>
        i < iteration ? char : letters[Math.floor(Math.random() * letters.length)]
      ).join('')
      iteration += 1 / 3
      if (iteration >= original.length) { el.innerText = original; clearInterval(el._interval) }
    }, 30)
  }

  /* ── Glow en cards ── */
  function handleCardMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div className="home-page1">

      {/* Cursor */}
      <span ref={cursorCoreRef} className="cursor-core1" aria-hidden="true" />
      <span ref={cursorAuraRef} className="cursor-aura1" aria-hidden="true" />

      {/* ── NAVBAR ── */}
      <header className="topbar1">
        <nav className="navigation">
          <Link className="brand" to="/">
            <img src={Logo} alt="Logo VolleyScan" className="logo-1" />
            VolleyScan <span>AI</span>
          </Link>
          <ul className="menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#tecnologia">Tecnología</a></li>
            <li><a href="#metricas">Métricas</a></li>
            <li><a href="#planes">Planes</a></li>
          </ul>
          <div className="nav-actions">
            <a className="btn-outline" href="#planes">Ver Planes</a>
            <Link className="btn-nav-login" to="/login">Iniciar sesión</Link>
          </div>
        </nav>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="hero" id="inicio">
          <article className="hero-text reveal" ref={heroRef}>
            <h1>
              Transforma tu{' '}
              <span className="gold" onMouseEnter={handleScramble}>rendimiento</span>{' '}
              en el voleibol con{' '}
              <span className="blue" onMouseEnter={handleScramble}>IA</span>
            </h1>
            <p>
              Detecta errores técnicos, analiza el movimiento de cada jugador
              y optimiza el rendimiento deportivo con nuestra plataforma de
              análisis biomecánico avanzado.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" to="/registro">Crear Cuenta Gratis →</Link>
            </div>
          </article>

          <div className="img-frame img-center reveal">
            <img className="img-pro" src={Img} alt="Atleta de voleibol" ref={heroImgRef} />
          </div>
        </section>

        {/* ── RESULTADOS ── */}
        <section className="results-1" id="metricas" ref={resultsSectionRef}>
          <article className="results-header reveal">
            <h1>Resultados que <span onMouseEnter={handleScramble}>Hablan</span></h1>
            <p className="subtitle">
              Nuestros algoritmos de IA han demostrado mejoras significativas<br />
              en el rendimiento de los atletas.
            </p>
          </article>
          <div className="stats">
            {STATS.map((stat, i) => (
              <article
                key={stat.label}
                className={`card ${stat.color} glow reveal`}
                onMouseMove={handleCardMove}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h2 ref={el => countersRef.current[i] = el}>
                  {stat.value}{stat.suffix}
                </h2>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── TECNOLOGÍA ── */}
        <section className="tech" id="tecnologia">
          <header className="tech-header reveal">
            <h1>Tecnología de <span onMouseEnter={handleScramble}>Alto Rendimiento</span></h1>
            <p>
              Nuestra plataforma combina visión por computadora, aprendizaje profundo y
              análisis biomecánico para ofrecer retroalimentación precisa y accionable.
            </p>
          </header>
          <div className="tech-grid">
            {TECH.map((item, i) => (
              <article
                key={item.title}
                className="tech-card glow reveal"
                onMouseMove={handleCardMove}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className={`icon ${item.color}`}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PLANES ── */}
        <section className="pricing" id="planes">
          <header className="pricing-header reveal">
            <h1>Elige tu <span onMouseEnter={handleScramble}>Plan</span></h1>
            <p>Desde atletas individuales hasta clubes completos, tenemos el plan perfecto para ti.</p>
          </header>
          <div className="pricing-grid">
            {PLANS.map((plan, i) => (
              <article
                key={plan.name}
                className={`plan glow reveal${plan.featured ? ' featured' : ''}`}
                onMouseMove={handleCardMove}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {plan.featured && <span className="plan-badge">⭐ Más popular</span>}
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="price">
                  {plan.featured ? <span className="gold">{plan.price}</span> : plan.price}
                  {plan.priceSuffix && <small> {plan.priceSuffix}</small>}
                </div>
                <ul>
                  {plan.features.map(f => <li key={f}><span className="check">✓</span> {f}</li>)}
                </ul>
                <Link to="/registro" className={plan.btnClass}>{plan.btn}</Link>
              </article>
            ))}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <section className="footer-brand">
          <h3>VolleyScan AI</h3>
          <p>Plataforma de análisis deportivo con inteligencia artificial aplicada al voleibol. Proyecto universitario.</p>
          <nav className="socials" aria-label="Redes sociales">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </nav>
        </section>
        {FOOTER_LINKS.map(col => (
          <section key={col.title} className="footer-links">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(link => <li key={link}><a href="#">{link}</a></li>)}
            </ul>
          </section>
        ))}
      </footer>

    </div>
  )
}