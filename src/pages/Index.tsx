import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const CAR_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/30ab6287-ff43-487e-aeb3-7fd16a81458b.jpg"
const GIRL_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/6e3f43fc-06f1-4023-9063-21f8274cb960.jpg"
const MONEY_IMG = "https://cdn.poehali.dev/projects/d3e4f3fa-87ba-402e-ad3e-ef01b3f29dd0/files/2b685880-1182-4f81-9662-6afe09472b17.jpg"

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Purple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0018] via-[#1a0035] to-[#0a001f]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2d0060]/40 via-transparent to-[#6600cc]/20" />
        {/* Animated SVG rays */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="30%" stopColor="rgba(160,80,255,1)" />
              <stop offset="70%" stopColor="rgba(120,40,220,0.8)" />
              <stop offset="100%" stopColor="rgba(80,0,180,0)" />
            </radialGradient>
            <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="25%" stopColor="rgba(180,100,255,0.9)" />
              <stop offset="60%" stopColor="rgba(140,60,220,0.7)" />
              <stop offset="100%" stopColor="rgba(100,0,200,0)" />
            </radialGradient>
            <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="20%" stopColor="rgba(140,60,255,0.6)" />
              <stop offset="80%" stopColor="rgba(140,60,255,0.6)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
            <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="15%" stopColor="rgba(100,0,200,0.5)" />
              <stop offset="85%" stopColor="rgba(100,0,200,0.5)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
            <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0)" />
              <stop offset="18%" stopColor="rgba(180,80,255,0.55)" />
              <stop offset="82%" stopColor="rgba(180,80,255,0.55)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </linearGradient>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path id="thread1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#threadFade1)" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
            <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#thread1" /></animateMotion>
          </circle>

          <path id="thread2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#threadFade2)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
            <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#thread2" /></animateMotion>
          </circle>

          <path id="thread3" d="M30 700 Q150 580 300 520 Q450 460 600 490 Q750 520 900 430 Q1050 340 1180 310" stroke="url(#threadFade3)" strokeWidth="1" fill="none" opacity="0.5" />
          <circle r="2.5" fill="url(#neonPulse1)" opacity="0.9" filter="url(#neonGlow)">
            <animateMotion dur="6s" repeatCount="indefinite"><mpath href="#thread3" /></animateMotion>
          </circle>

          <path id="thread4" d="M0 650 Q180 540 320 490 Q460 440 610 470 Q760 500 910 410 Q1060 320 1200 280" stroke="url(#threadFade1)" strokeWidth="0.6" fill="none" opacity="0.4" />
          <circle r="1.8" fill="url(#neonPulse2)" opacity="0.85" filter="url(#neonGlow)">
            <animateMotion dur="7s" repeatCount="indefinite"><mpath href="#thread4" /></animateMotion>
          </circle>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center">
            <Icon name="Car" size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-wide">АвтоВыкуп</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-purple-200/80">
          <a href="#" className="hover:text-white transition-colors">Как это работает</a>
          <a href="#" className="hover:text-white transition-colors">Марки авто</a>
          <a href="#" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#" className="hover:text-white transition-colors">О нас</a>
        </div>

        <div className="hidden md:block">
          <button className="text-sm border border-purple-500/50 text-purple-200 hover:border-purple-400 hover:text-white px-5 py-2 rounded-full transition-all hover:bg-purple-900/30">
            +7 (800) 000-00-00
          </button>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="relative z-20 md:hidden bg-purple-950/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 text-sm text-purple-200">
          <a href="#" className="hover:text-white transition-colors">Как это работает</a>
          <a href="#" className="hover:text-white transition-colors">Марки авто</a>
          <a href="#" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#" className="hover:text-white transition-colors">О нас</a>
          <a href="tel:+78000000000" className="text-purple-300 font-semibold">+7 (800) 000-00-00</a>
        </div>
      )}

      {/* Hero section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 pb-8">

        {/* Headline */}
        <div className="text-center mb-4 md:mb-6 mt-2">
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
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-purple-200 mt-1">
              до 99% рыночной стоимости
            </span>
          </h1>
          <p className="mt-4 text-purple-300/80 text-base md:text-lg max-w-xl mx-auto">
            Оцениваем за 30 минут. Деньги в день обращения. Выезд оценщика бесплатно.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
          <ShimmerButton
            className="text-white font-semibold text-sm px-8 py-3 rounded-full"
            background="linear-gradient(135deg, #7c3aed, #a855f7)"
            shimmerColor="rgba(255,255,255,0.3)"
          >
            Оценить мой автомобиль
          </ShimmerButton>
          <button className="flex items-center gap-2 text-purple-300 hover:text-white border border-purple-600/50 hover:border-purple-400 px-6 py-3 rounded-full text-sm transition-all hover:bg-purple-900/30">
            <Icon name="Phone" size={16} />
            Получить звонок
          </button>
        </div>

        {/* Visual block: car + girl + money */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: 320 }}>

          {/* Girl — left side */}
          <div
            className="absolute bottom-0 left-0 md:left-4 z-10 hidden sm:block"
            style={{ width: "22%", maxWidth: 200 }}
          >
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 40px rgba(168,85,247,0.35), 0 0 80px rgba(124,58,237,0.15)",
                maskImage: "linear-gradient(to top, transparent 0%, black 30%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 30%)",
              }}
            >
              <img src={GIRL_IMG} alt="девушка с деньгами" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* BMW M3 — center, SVG contour overlay */}
          <div className="relative mx-auto" style={{ width: "68%", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            <img
              src={CAR_IMG}
              alt="BMW M3"
              className="w-full h-auto rounded-2xl"
              style={{
                boxShadow: "0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(124,58,237,0.25)",
                filter: "brightness(0.95) saturate(1.1)",
              }}
            />
            {/* SVG running light animation along car contour */}
            <svg
              viewBox="0 0 600 380"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ mixBlendMode: "screen" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="carGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="carGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/*
                BMW M3 (E92/F80 купе, вид сбоку справа налево)
                Изображение: тёмный фон, машина занимает ~80% ширины и ~70% высоты,
                расположена по центру. viewBox 600x380.
                Ключевые точки:
                  - передний бампер (нос): x≈60, y≈290
                  - капот поднимается к лобовому: x≈60→180, y≈290→195
                  - лобовое стекло (наклон назад): x≈180→250, y≈195→130
                  - крыша (горизонт): x≈250→370, y≈130→132
                  - заднее стекло (крутой спуск купе): x≈370→430, y≈132→210
                  - крышка багажника: x≈430→510, y≈210→255
                  - задний бампер: x≈510→540, y≈255→295
                  - днище: x≈540→60, y≈295
                  - передняя арка: центр x≈145, y≈295 r≈38
                  - задняя арка: центр x≈430, y≈295 r≈42
              */}

              {/* Контур кузова без колёс */}
              <path
                id="carContour"
                d="
                  M 62 285
                  C 60 270, 62 255, 68 242
                  C 74 228, 84 218, 96 208
                  C 110 197, 126 192, 142 189
                  L 148 188
                  C 155 187, 160 183, 165 178
                  C 175 165, 185 148, 200 136
                  C 212 126, 226 120, 242 117
                  L 268 113
                  L 340 111
                  L 370 113
                  C 380 115, 388 120, 394 128
                  C 406 143, 415 162, 424 178
                  C 428 186, 433 192, 440 197
                  L 458 205
                  C 476 213, 492 222, 504 234
                  C 514 244, 520 256, 524 268
                  L 528 285
                  L 524 295
                  C 520 300, 514 303, 508 304
                  L 492 305
                  C 486 286, 474 270, 456 265
                  C 444 261, 432 261, 420 265
                  C 402 270, 390 285, 387 302
                  L 386 305
                  L 214 305
                  L 213 302
                  C 210 285, 198 270, 180 265
                  C 168 261, 156 261, 144 265
                  C 126 270, 114 286, 111 305
                  L 96 304
                  C 88 303, 80 299, 74 293
                  Z
                "
                fill="none"
                stroke="rgba(180,80,255,0.18)"
                strokeWidth="1.5"
              />

              {/* Передняя арка колеса */}
              <path
                id="frontWheelArch"
                d="M 111 305 C 111 268, 134 248, 162 248 C 190 248, 213 268, 213 305"
                fill="none"
                stroke="rgba(180,80,255,0.18)"
                strokeWidth="1.5"
              />

              {/* Задняя арка колеса */}
              <path
                id="rearWheelArch"
                d="M 386 305 C 386 266, 410 245, 440 245 C 470 245, 492 266, 492 305"
                fill="none"
                stroke="rgba(180,80,255,0.18)"
                strokeWidth="1.5"
              />

              {/* === АНИМАЦИЯ — полный контур одним путём === */}
              {/* Хвост (trail) */}
              <path
                id="fullContour"
                d="
                  M 62 285
                  C 60 270, 62 255, 68 242
                  C 74 228, 84 218, 96 208
                  C 110 197, 126 192, 142 189
                  L 148 188
                  C 155 187, 160 183, 165 178
                  C 175 165, 185 148, 200 136
                  C 212 126, 226 120, 242 117
                  L 268 113
                  L 340 111
                  L 370 113
                  C 380 115, 388 120, 394 128
                  C 406 143, 415 162, 424 178
                  C 428 186, 433 192, 440 197
                  L 458 205
                  C 476 213, 492 222, 504 234
                  C 514 244, 520 256, 524 268
                  L 528 285
                  L 524 295
                  C 520 300, 514 303, 508 304
                  L 492 305
                  C 486 286, 474 270, 456 265
                  C 444 261, 432 261, 420 265
                  C 402 270, 390 285, 387 302
                  L 386 305
                  L 214 305
                  L 213 302
                  C 210 285, 198 270, 180 265
                  C 168 261, 156 261, 144 265
                  C 126 270, 114 286, 111 305
                  L 96 304
                  C 88 303, 80 299, 74 293
                  Z
                "
                fill="none"
                stroke="rgba(200,120,255,0.55)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="80 9999"
                strokeDashoffset="0"
                filter="url(#carGlow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-1600"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Яркая голова огонька */}
              <path
                d="
                  M 62 285
                  C 60 270, 62 255, 68 242
                  C 74 228, 84 218, 96 208
                  C 110 197, 126 192, 142 189
                  L 148 188
                  C 155 187, 160 183, 165 178
                  C 175 165, 185 148, 200 136
                  C 212 126, 226 120, 242 117
                  L 268 113
                  L 340 111
                  L 370 113
                  C 380 115, 388 120, 394 128
                  C 406 143, 415 162, 424 178
                  C 428 186, 433 192, 440 197
                  L 458 205
                  C 476 213, 492 222, 504 234
                  C 514 244, 520 256, 524 268
                  L 528 285
                  L 524 295
                  C 520 300, 514 303, 508 304
                  L 492 305
                  C 486 286, 474 270, 456 265
                  C 444 261, 432 261, 420 265
                  C 402 270, 390 285, 387 302
                  L 386 305
                  L 214 305
                  L 213 302
                  C 210 285, 198 270, 180 265
                  C 168 261, 156 261, 144 265
                  C 126 270, 114 286, 111 305
                  L 96 304
                  C 88 303, 80 299, 74 293
                  Z
                "
                fill="none"
                stroke="rgba(255,240,255,1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 9999"
                strokeDashoffset="0"
                filter="url(#carGlowStrong)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-1600"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* Money fan — right side */}
          <div
            className="absolute bottom-0 right-0 md:right-4 z-10 hidden sm:block"
            style={{ width: "22%", maxWidth: 200 }}
          >
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 40px rgba(168,85,247,0.35), 0 0 80px rgba(124,58,237,0.15)",
                maskImage: "linear-gradient(to top, transparent 0%, black 30%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 30%)",
              }}
            >
              <img src={MONEY_IMG} alt="купюры 5000 рублей" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 text-center">
          {[
            { value: "2 000+", label: "выкупленных авто" },
            { value: "30 мин", label: "до оценки" },
            { value: "99%", label: "от рыночной цены" },
            { value: "0 руб", label: "выезд оценщика" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl md:text-3xl font-black text-white"
                style={{ textShadow: "0 0 20px rgba(168,85,247,0.8)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-purple-400 mt-0.5 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}