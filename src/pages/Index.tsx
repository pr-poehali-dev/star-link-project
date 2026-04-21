import { ShimmerButton } from "@/components/shimmer-button"
import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"

const CAR_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/30ab6287-ff43-487e-aeb3-7fd16a81458b.jpg"
const GIRL_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/6e3f43fc-06f1-4023-9063-21f8274cb960.jpg"
const MONEY_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/2b685880-1182-4f81-9662-6afe09472b17.jpg"
const APPRAISER_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/c4a7379e-7f2a-4fdf-a74d-775025ccdc38.jpg"
const DEAL_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/431faeac-a659-4bdf-b029-9dd02d5451a6.jpg"
const SHOWROOM_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/734ea3e0-2461-4e8e-a5a1-bad5fba8071a.jpg"

const BMW_CONTOUR: [number, number][] = [
  [42, 310], [38, 295], [36, 278], [38, 262], [44, 248],
  [55, 238], [68, 228], [84, 220], [102, 213],
  [124, 208], [148, 204], [168, 200],
  [182, 196], [192, 184], [204, 168], [216, 152],
  [234, 138], [258, 128], [290, 122], [324, 120],
  [354, 122], [378, 126],
  [396, 132], [410, 146], [422, 164], [430, 182],
  [438, 196], [448, 210], [456, 224],
  [466, 236], [476, 250], [482, 264], [484, 280],
  [482, 296], [476, 308], [466, 316],
  [452, 320], [436, 322],
  [420, 328], [406, 330],
  [390, 328], [360, 326], [330, 326], [300, 326],
  [270, 326], [240, 326], [210, 328],
  [194, 330], [178, 328], [162, 322],
  [148, 316], [136, 308],
  [120, 318], [100, 318], [78, 316],
  [60, 314], [48, 312], [42, 310],
]

const SOLD_CARS = [
  { brand: "BMW M3", year: 2020, price: "3 200 000 ₽", days: 1 },
  { brand: "Mercedes C200", year: 2019, price: "2 450 000 ₽", days: 2 },
  { brand: "Toyota Camry", year: 2021, price: "2 100 000 ₽", days: 1 },
  { brand: "Audi A6", year: 2018, price: "1 850 000 ₽", days: 3 },
  { brand: "Kia K5", year: 2022, price: "1 600 000 ₽", days: 1 },
  { brand: "Hyundai Sonata", year: 2020, price: "1 350 000 ₽", days: 2 },
]

const REVIEWS = [
  {
    name: "Алексей К.",
    city: "Москва",
    text: "Продал BMW за один день, без лишних вопросов. Оценили честно — дали 98% от рынка. Рекомендую всем!",
    rating: 5,
    date: "март 2025",
  },
  {
    name: "Марина Р.",
    city: "Санкт-Петербург",
    text: "Сначала сомневалась, но всё прошло быстро и прозрачно. Деньги получила в тот же день. Спасибо команде!",
    rating: 5,
    date: "февраль 2025",
  },
  {
    name: "Дмитрий С.",
    city: "Екатеринбург",
    text: "Машина была в небольшом ДТП — всё равно выкупили по нормальной цене. Ни один салон не предложил столько.",
    rating: 5,
    date: "январь 2025",
  },
]

const FAQ = [
  {
    q: "Выкупаете ли вы авто с обременением или кредитом?",
    a: "Да, мы выкупаем автомобили в кредите. Досрочно погашаем остаток долга и передаём вам разницу.",
  },
  {
    q: "Как долго ждать оценки?",
    a: "Оценка занимает от 30 минут. После отправки фото наш специалист свяжется с вами в течение часа.",
  },
  {
    q: "Нужно ли готовить документы заранее?",
    a: "Достаточно ПТС, СТС и паспорта. Всё остальное оформляем мы.",
  },
  {
    q: "Выезжаете ли вы на осмотр?",
    a: "Да, выезд оценщика полностью бесплатный — в любой район города и пригород.",
  },
  {
    q: "В каком состоянии принимаете авто?",
    a: "В любом: битые, с пробегом, после ДТП, с неисправностями. Цену снижаем только честно.",
  },
]

function NeonBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0018] via-[#1a0035] to-[#0a001f]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2d0060]/40 via-transparent to-[#6600cc]/20" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg-neonPulse1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
            <stop offset="30%" stopColor="rgba(160,80,255,1)" />
            <stop offset="100%" stopColor="rgba(80,0,180,0)" />
          </radialGradient>
          <linearGradient id="bg-tf1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="20%" stopColor="rgba(140,60,255,0.5)" />
            <stop offset="80%" stopColor="rgba(140,60,255,0.5)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <filter id="bg-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path id="bg-t1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#bg-tf1)" strokeWidth="0.8" fill="none" opacity="0.7" />
        <circle r="2" fill="url(#bg-neonPulse1)" filter="url(#bg-glow)">
          <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#bg-t1" /></animateMotion>
        </circle>
        <path id="bg-t2" d="M30 700 Q150 580 300 520 Q450 460 600 490 Q750 520 900 430 Q1050 340 1180 310" stroke="url(#bg-tf1)" strokeWidth="1" fill="none" opacity="0.5" />
        <circle r="2.5" fill="url(#bg-neonPulse1)" filter="url(#bg-glow)">
          <animateMotion dur="6s" repeatCount="indefinite"><mpath href="#bg-t2" /></animateMotion>
        </circle>
      </svg>
    </div>
  )
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">{children}</h2>
      {sub && <p className="mt-3 text-purple-300/70 text-base md:text-lg max-w-xl mx-auto">{sub}</p>}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border border-purple-700/40 rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/60 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-white font-semibold text-sm md:text-base">{q}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={20} className="text-purple-400 shrink-0 ml-4" />
      </div>
      {open && (
        <div className="px-6 pb-5 text-purple-300/80 text-sm md:text-base border-t border-purple-700/30 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [photoForm, setPhotoForm] = useState({ name: "", phone: "", comment: "" })
  const [contactForm, setContactForm] = useState({ name: "", phone: "", car: "" })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf: number
    let progress = 0
    const TRAIL = 28
    const SPEED = 0.6

    const resize = () => {
      const img = imgRef.current
      if (!img || !img.naturalWidth) return
      canvas.width = img.offsetWidth
      canvas.height = img.offsetHeight
    }

    const imgEl = imgRef.current
    if (imgEl?.complete) resize()
    else imgEl?.addEventListener("load", resize)
    window.addEventListener("resize", resize)

    const getScaled = () => {
      const w = canvas.width || 600
      const h = canvas.height || 400
      return BMW_CONTOUR.map(([x, y]) => [(x / 600) * w, (y / 400) * h] as [number, number])
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const pts = getScaled()
      const n = pts.length

      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      for (let i = 1; i < n; i++) ctx.lineTo(pts[i][0], pts[i][1])
      ctx.closePath()
      ctx.strokeStyle = "rgba(180,80,255,0.12)"
      ctx.lineWidth = 1.2
      ctx.stroke()

      const head = Math.floor(progress) % n
      for (let t = 0; t < TRAIL; t++) {
        const idx = (head - t + n * 10) % n
        const [x, y] = pts[idx]
        const frac = 1 - t / TRAIL
        const alpha = frac * frac * 0.85
        const r = 180 + Math.round(75 * frac)
        const g = 60 + Math.round(40 * frac)
        const size = 1.2 + frac * 3.5
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},255,${alpha})`
        ctx.fill()
      }

      const [hx, hy] = pts[head]
      const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, 18)
      grd.addColorStop(0, "rgba(255,240,255,1)")
      grd.addColorStop(0.3, "rgba(210,120,255,0.9)")
      grd.addColorStop(0.7, "rgba(160,60,255,0.4)")
      grd.addColorStop(1, "rgba(120,0,220,0)")
      ctx.beginPath()
      ctx.arc(hx, hy, 18, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      ctx.beginPath()
      ctx.arc(hx, hy, 3, 0, Math.PI * 2)
      ctx.fillStyle = "white"
      ctx.fill()

      progress = (progress + SPEED) % n
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      imgEl?.removeEventListener("load", resize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a001f] text-white overflow-x-hidden">

      {/* ───────────── 1. ПЕРВЫЙ ЭКРАН ───────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <NeonBackground />

        {/* Nav */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center">
              <Icon name="Car" size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">АвтоВыкуп</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-purple-200/80">
            <a href="#how" className="hover:text-white transition-colors">Как работаем</a>
            <a href="#why" className="hover:text-white transition-colors">Почему мы</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="hidden md:block">
            <a href="tel:+78000000000" className="text-sm border border-purple-500/50 text-purple-200 hover:border-purple-400 hover:text-white px-5 py-2 rounded-full transition-all hover:bg-purple-900/30">
              +7 (800) 000-00-00
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="relative z-20 md:hidden bg-purple-950/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 text-sm text-purple-200">
            <a href="#how" className="hover:text-white" onClick={() => setMobileMenuOpen(false)}>Как работаем</a>
            <a href="#why" className="hover:text-white" onClick={() => setMobileMenuOpen(false)}>Почему мы</a>
            <a href="#reviews" className="hover:text-white" onClick={() => setMobileMenuOpen(false)}>Отзывы</a>
            <a href="#faq" className="hover:text-white" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="tel:+78000000000" className="text-purple-300 font-semibold">+7 (800) 000-00-00</a>
          </div>
        )}

        {/* Hero content */}
        <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 pb-12 pt-4">
          <div className="text-center mb-6">
            <div className="inline-block text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase mb-3 border border-purple-600/40 rounded-full px-4 py-1">
              Срочно · Выгодно · Без торга
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              <span className="block">СРОЧНЫЙ</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #7c3aed 70%, #d8b4fe 100%)",
                  filter: "drop-shadow(0 0 30px rgba(168,85,247,0.8))",
                }}
              >
                ВЫКУП АВТО
              </span>
              <span className="block text-2xl md:text-3xl font-bold text-purple-200 mt-1">
                до 99% рыночной стоимости
              </span>
            </h1>
            <p className="mt-4 text-purple-300/80 text-base md:text-lg max-w-xl mx-auto">
              Оцениваем за 30 минут. Деньги в день обращения. Выезд оценщика бесплатно.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#photo-form">
              <ShimmerButton
                className="text-white font-semibold text-sm px-8 py-3 rounded-full"
                background="linear-gradient(135deg, #7c3aed, #a855f7)"
                shimmerColor="rgba(255,255,255,0.3)"
              >
                Оценить мой автомобиль
              </ShimmerButton>
            </a>
            <a href="tel:+78000000000" className="flex items-center justify-center gap-2 text-purple-300 hover:text-white border border-purple-600/50 hover:border-purple-400 px-6 py-3 rounded-full text-sm transition-all hover:bg-purple-900/30">
              <Icon name="Phone" size={16} />
              Получить звонок
            </a>
          </div>

          {/* Car visual */}
          <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: 300 }}>
            <div className="absolute bottom-0 left-0 md:left-4 z-10 hidden sm:block" style={{ width: "22%", maxWidth: 200 }}>
              <div className="w-full rounded-2xl overflow-hidden" style={{ boxShadow: "0 0 40px rgba(168,85,247,0.35)", maskImage: "linear-gradient(to top, transparent 0%, black 30%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 30%)" }}>
                <img src={GIRL_IMG} alt="довольный клиент" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="relative mx-auto" style={{ width: "68%", maxWidth: 600 }}>
              <img ref={imgRef} src={CAR_IMG} alt="BMW M3" className="w-full h-auto rounded-2xl" style={{ boxShadow: "0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(124,58,237,0.25)", filter: "brightness(0.95) saturate(1.1)" }} />
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none" style={{ mixBlendMode: "screen" }} />
            </div>
            <div className="absolute bottom-0 right-0 md:right-4 z-10 hidden sm:block" style={{ width: "22%", maxWidth: 200 }}>
              <div className="w-full rounded-2xl overflow-hidden" style={{ boxShadow: "0 0 40px rgba(168,85,247,0.35)", maskImage: "linear-gradient(to top, transparent 0%, black 30%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 30%)" }}>
                <img src={MONEY_IMG} alt="деньги" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-center">
            {[
              { value: "2 000+", label: "выкупленных авто" },
              { value: "30 мин", label: "до оценки" },
              { value: "99%", label: "от рыночной цены" },
              { value: "0 руб", label: "выезд оценщика" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-black text-white" style={{ textShadow: "0 0 20px rgba(168,85,247,0.8)" }}>{s.value}</div>
                <div className="text-xs text-purple-400 mt-0.5 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </main>
      </section>

      {/* ───────────── 2. ВЫКУПАЕМ В ЛЮБОМ СОСТОЯНИИ ───────────── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#110028] to-[#0a001f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle sub="Не важно, в каком состоянии ваш автомобиль — мы его выкупим">
            Выкупаем ваше авто<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#c084fc,#a855f7)" }}>в любом состоянии</span>
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "Wrench", title: "После ДТП", desc: "С любыми повреждениями кузова и механики" },
              { icon: "AlertTriangle", title: "На штрафстоянке", desc: "Выкупаем даже с арестованных стоянок" },
              { icon: "CreditCard", title: "В кредите", desc: "Гасим долг и отдаём вам разницу" },
              { icon: "Gauge", title: "С большим пробегом", desc: "Оцениваем честно, без занижения цены" },
              { icon: "Droplets", title: "После затопления", desc: "Принимаем авто после любых стихийных бедствий" },
              { icon: "Settings", title: "Неисправное", desc: "Не заводится, нет документов — всё равно купим" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-purple-700/30 rounded-2xl p-5 hover:border-purple-500/50 hover:bg-purple-900/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center mb-3 group-hover:bg-purple-600/30 transition-colors">
                  <Icon name={item.icon} size={20} className="text-purple-400" />
                </div>
                <div className="font-bold text-white text-sm md:text-base mb-1">{item.title}</div>
                <div className="text-purple-300/60 text-xs md:text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-purple-900/30 border border-purple-600/40 rounded-2xl px-6 py-4 text-sm text-purple-200">
              <Icon name="ShieldCheck" size={20} className="text-purple-400 shrink-0" />
              Оформляем сделку официально — договор купли-продажи, расчёт по перечислению или наличными
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 3. ОЦЕНИМ ПО ФОТО ───────────── */}
      <section id="photo-form" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#160030] to-[#0a001f]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionTitle sub="Отправьте фото — получите предварительную стоимость за 30 минут">
            Оценим вашу машину<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#c084fc,#a855f7)" }}>прямо по фото</span>
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 0 50px rgba(124,58,237,0.3)" }}>
              <img src={APPRAISER_IMG} alt="оценщик авто" className="w-full h-auto object-cover" />
            </div>

            <div className="bg-white/[0.03] border border-purple-700/40 rounded-3xl p-6 md:p-8">
              <div className="text-lg font-bold text-white mb-6">Оставьте заявку на оценку</div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-purple-400 uppercase tracking-widest mb-1.5 block">Ваше имя</label>
                  <input
                    className="w-full bg-white/5 border border-purple-700/40 rounded-xl px-4 py-3 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Алексей"
                    value={photoForm.name}
                    onChange={e => setPhotoForm({ ...photoForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-purple-400 uppercase tracking-widest mb-1.5 block">Телефон</label>
                  <input
                    className="w-full bg-white/5 border border-purple-700/40 rounded-xl px-4 py-3 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                    value={photoForm.phone}
                    onChange={e => setPhotoForm({ ...photoForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-purple-400 uppercase tracking-widest mb-1.5 block">Марка, модель, год</label>
                  <input
                    className="w-full bg-white/5 border border-purple-700/40 rounded-xl px-4 py-3 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="BMW M3 2020, 80 000 км"
                    value={photoForm.comment}
                    onChange={e => setPhotoForm({ ...photoForm, comment: e.target.value })}
                  />
                </div>
                <div className="border-2 border-dashed border-purple-700/40 rounded-xl p-6 text-center cursor-pointer hover:border-purple-500/60 transition-colors">
                  <Icon name="ImagePlus" size={28} className="text-purple-500 mx-auto mb-2" />
                  <div className="text-sm text-purple-300/60">Прикрепите фото автомобиля</div>
                  <div className="text-xs text-purple-400/40 mt-1">до 10 фото, JPG / PNG / HEIC</div>
                </div>
                <ShimmerButton
                  className="w-full text-white font-semibold text-sm py-3 rounded-xl"
                  background="linear-gradient(135deg, #7c3aed, #a855f7)"
                  shimmerColor="rgba(255,255,255,0.3)"
                >
                  Получить оценку за 30 минут
                </ShimmerButton>
                <p className="text-xs text-purple-400/40 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 4. ЭТАПЫ РАБОТЫ ───────────── */}
      <section id="how" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#0f0025] to-[#0a001f]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionTitle sub="Весь процесс от звонка до денег — за 1 день">
            Этапы работы
          </SectionTitle>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", icon: "Phone", title: "Звонок или заявка", desc: "Оставьте заявку онлайн или позвоните нам" },
                { step: "02", icon: "ImagePlus", title: "Фото авто", desc: "Отправьте фотографии — оценим удалённо" },
                { step: "03", icon: "ClipboardCheck", title: "Оценка", desc: "Специалист приедет и осмотрит авто бесплатно" },
                { step: "04", icon: "FileSignature", title: "Договор", desc: "Оформляем документы прямо на месте" },
                { step: "05", icon: "Banknote", title: "Деньги", desc: "Получаете деньги наличными или на карту" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-18 h-18 w-16 h-16 rounded-full bg-purple-900/50 border-2 border-purple-600/60 flex items-center justify-center" style={{ boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}>
                      <Icon name={item.icon} size={24} className="text-purple-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black flex items-center justify-center">
                      {item.step.replace("0", "")}
                    </div>
                  </div>
                  <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                  <div className="text-purple-300/60 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 5. ПОЧЕМУ ВЫБИРАЮТ НАС ───────────── */}
      <section id="why" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#140030] to-[#0a001f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.1)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle sub="Более 2 000 довольных клиентов за 7 лет работы">
            Почему выбирают нас?
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "Zap", title: "Быстро", desc: "Оценка за 30 минут, деньги в день обращения" },
                { icon: "TrendingUp", title: "Максимальная цена", desc: "До 99% от рыночной стоимости — честно, без занижений" },
                { icon: "MapPin", title: "Выезд бесплатно", desc: "Приедем в любую точку города и области" },
                { icon: "Shield", title: "Юридическая чистота", desc: "Официальный договор, полная прозрачность сделки" },
                { icon: "Clock", title: "Работаем 24/7", desc: "Принимаем заявки в любое время суток" },
                { icon: "Star", title: "Рейтинг 4.9/5", desc: "На Авито, Яндекс Картах и Google Maps" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-white/[0.02] border border-purple-700/30 rounded-2xl hover:bg-purple-900/10 hover:border-purple-500/40 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-purple-600/20 flex items-center justify-center shrink-0 group-hover:bg-purple-600/30 transition-colors mt-0.5">
                    <Icon name={item.icon} size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="text-purple-300/60 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 0 60px rgba(124,58,237,0.3)" }}>
              <img src={SHOWROOM_IMG} alt="автосалон" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 6. ОТЗЫВЫ И ПРОДАННЫЕ АВТО ───────────── */}
      <section id="reviews" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#110028] to-[#0a001f]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle sub="Реальные истории наших клиентов">
            Отзывы и уже проданные авто
          </SectionTitle>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white/[0.03] border border-purple-700/30 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-purple-200/80 text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">{r.name}</div>
                    <div className="text-purple-400/60 text-xs">{r.city}</div>
                  </div>
                  <div className="text-purple-400/40 text-xs">{r.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Sold cars */}
          <div className="mb-6 text-center text-purple-300/60 text-sm uppercase tracking-widest">Недавно выкупленные</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SOLD_CARS.map((car) => (
              <div key={car.brand + car.year} className="bg-white/[0.02] border border-purple-700/20 rounded-2xl p-4 flex items-center gap-3 hover:border-purple-600/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-700/20 flex items-center justify-center shrink-0">
                  <Icon name="Car" size={20} className="text-purple-400" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-sm truncate">{car.brand}</div>
                  <div className="text-purple-400/70 text-xs">{car.year} · {car.days} {car.days === 1 ? "день" : "дня"}</div>
                  <div className="text-purple-300 text-sm font-semibold">{car.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-purple-300/50 text-xs">
              <Icon name="RefreshCw" size={12} />
              Обновляется в реальном времени
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 7. FAQ ───────────── */}
      <section id="faq" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#130028] to-[#0a001f]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <SectionTitle sub="Ответы на самые частые вопросы">
            Ответы на популярные вопросы
          </SectionTitle>
          <div className="space-y-3">
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── 8. ФОРМА ОБРАТНОЙ СВЯЗИ ───────────── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f] via-[#1a0040] to-[#0a001f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_65%)]" />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <div className="inline-block text-xs font-semibold tracking-[0.3em] text-purple-400 uppercase mb-4 border border-purple-600/40 rounded-full px-4 py-1">
            Бесплатная консультация
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Оставьте заявку —<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#c084fc,#a855f7)" }}>
              перезвоним за 5 минут
            </span>
          </h2>
          <p className="text-purple-300/70 text-sm mb-8">Работаем без выходных, с 8:00 до 22:00</p>

          <div className="bg-white/[0.03] border border-purple-700/40 rounded-3xl p-6 md:p-8 text-left">
            <div className="space-y-4">
              <div>
                <label className="text-xs text-purple-400 uppercase tracking-widest mb-1.5 block">Ваше имя</label>
                <input
                  className="w-full bg-white/5 border border-purple-700/40 rounded-xl px-4 py-3 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Имя"
                  value={contactForm.name}
                  onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs text-purple-400 uppercase tracking-widest mb-1.5 block">Телефон</label>
                <input
                  className="w-full bg-white/5 border border-purple-700/40 rounded-xl px-4 py-3 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="+7 (___) ___-__-__"
                  type="tel"
                  value={contactForm.phone}
                  onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs text-purple-400 uppercase tracking-widest mb-1.5 block">Ваш автомобиль</label>
                <input
                  className="w-full bg-white/5 border border-purple-700/40 rounded-xl px-4 py-3 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Toyota Camry 2019"
                  value={contactForm.car}
                  onChange={e => setContactForm({ ...contactForm, car: e.target.value })}
                />
              </div>
              <ShimmerButton
                className="w-full text-white font-bold text-sm py-3.5 rounded-xl"
                background="linear-gradient(135deg, #7c3aed, #a855f7)"
                shimmerColor="rgba(255,255,255,0.3)"
              >
                Жду звонка от специалиста
              </ShimmerButton>
              <p className="text-xs text-purple-400/40 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:+78000000000" className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors">
              <Icon name="Phone" size={16} className="text-purple-500" />
              +7 (800) 000-00-00
            </a>
            <span className="hidden sm:block text-purple-700">·</span>
            <a href="https://wa.me/78000000000" className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors">
              <Icon name="MessageCircle" size={16} className="text-purple-500" />
              WhatsApp
            </a>
            <span className="hidden sm:block text-purple-700">·</span>
            <a href="https://t.me/avtovykup" className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors">
              <Icon name="Send" size={16} className="text-purple-500" />
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── 9. ПОДВАЛ ───────────── */}
      <footer className="relative border-t border-purple-900/50 py-10 px-4">
        <div className="absolute inset-0 bg-[#060012]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center">
                  <Icon name="Car" size={14} className="text-white" />
                </div>
                <span className="text-white font-bold tracking-wide">АвтоВыкуп</span>
              </div>
              <p className="text-purple-400/50 text-xs max-w-xs">
                Срочный выкуп автомобилей в любом состоянии. Честно, быстро, выгодно.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-xs text-purple-400/60">
              <div className="space-y-2">
                <div className="text-purple-300/80 font-semibold mb-1">Навигация</div>
                <a href="#how" className="block hover:text-purple-300 transition-colors">Как работаем</a>
                <a href="#why" className="block hover:text-purple-300 transition-colors">Почему мы</a>
                <a href="#reviews" className="block hover:text-purple-300 transition-colors">Отзывы</a>
                <a href="#faq" className="block hover:text-purple-300 transition-colors">FAQ</a>
              </div>
              <div className="space-y-2">
                <div className="text-purple-300/80 font-semibold mb-1">Контакты</div>
                <a href="tel:+78000000000" className="block hover:text-purple-300 transition-colors">+7 (800) 000-00-00</a>
                <a href="mailto:info@avtovykup.ru" className="block hover:text-purple-300 transition-colors">info@avtovykup.ru</a>
                <div>г. Москва, ул. Примерная, 1</div>
                <div>Пн–Вс: 08:00 – 22:00</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-400/40">
            <div>© 2025 АвтоВыкуп. Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-300 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}