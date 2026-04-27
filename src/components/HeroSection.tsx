import { ArrowRight } from "lucide-react";

const PHONE = "79274501100";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
              <span>МЕДИЦИНСКИЙ ЦЕНТР · БЫСТРО И УДОБНО</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
              Все справки
              <br />
              в одном месте.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              Медосмотры на права, работу и медкнижки. Анализы, капельницы, уколы — без очередей и лишней суеты.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Записаться на приём
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://t.me/+${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative bg-secondary/50 rounded-3xl p-8 border border-border/50">
              {/* Top labels */}
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-4">
                <span>№01 — МЕДИЦИНСКИЙ_ЦЕНТР</span>
                <span>ЛИЦЕНЗИЯ_В_НАЛИЧИИ</span>
              </div>

              {/* Sticky note */}
              <div className="absolute -left-4 top-20 bg-[#fffef0] p-3 rounded shadow-sm rotate-[-3deg] border border-amber-100 w-40">
                <p className="text-xs font-mono text-foreground/80">ЗАМЕТКА</p>
                <p className="text-sm font-serif italic mt-1">«Справка на права за 1 час»</p>
              </div>

              {/* Services card */}
              <div className="bg-[#3d6b5e] rounded-2xl p-6 my-6 mx-auto max-w-sm">
                <div className="flex justify-between text-[8px] text-white/70 font-mono mb-2 px-2">
                  <span>НАШИ УСЛУГИ</span>
                  <span>ПН-СБ 8:00-20:00</span>
                </div>
                <div className="text-[10px] text-white/80 font-mono mb-4 px-2">
                  <p>Направление: Медосмотры</p>
                  <p>Статус: Принимаем без записи</p>
                </div>
                <div className="bg-[#2e5244] rounded-xl p-3 space-y-1.5">
                  {["Медосмотр на права", "Медкнижка", "Анализы", "Капельницы", "Санаторная карта", "Справка в бассейн"].map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 bg-[#1e3a2e] rounded px-2 py-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-[9px] text-white/70 font-mono">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="absolute -right-2 top-32 space-y-2">
                <div className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-secondary rounded-full" />
                    <span className="text-xs font-medium">Администратор</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Добрый день!</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[200px]">
                  <p className="text-xs text-muted-foreground">
                    Запись на завтра подтверждена. Справка будет готова в тот же день.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;