import Icon from "@/components/ui/icon";

const PHONE = "79274501100";

interface PriceItem {
  icon: string;
  label: string;
  price: string;
  highlight?: boolean;
}

const medItems: PriceItem[] = [
  { icon: "Car", label: "На права категория В", price: "1 000 ₽" },
  { icon: "Truck", label: "На права В, С, Д, Е", price: "1 700 ₽", highlight: true },
  { icon: "Briefcase", label: "На работу", price: "от 1 000 ₽" },
  { icon: "BookOpen", label: "Медицинская книжка", price: "от 1 550 ₽" },
  { icon: "Palmtree", label: "Санаторно-курортная карта", price: "от 1 500 ₽" },
  { icon: "Waves", label: "Справка в бассейн", price: "400 ₽" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ПРЕЙСКУРАНТ</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Доступные цены,
            <br />
            качественная медицина
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[-2deg] border border-amber-100">
              <span className="text-xs font-mono">БЕЗ_СКРЫТЫХ_ПЛАТЕЖЕЙ</span>
            </div>
            <p className="text-muted-foreground text-sm">Официальные документы с печатью</p>
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[2deg] border border-amber-100">
              <span className="text-xs font-mono">ЛИЦЕНЗИРОВАНО</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Медосмотры */}
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="ClipboardList" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">УСЛУГА</p>
                <h3 className="font-semibold text-lg">Медосмотры</h3>
              </div>
              <span className="ml-auto text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                от 30 мин
              </span>
            </div>

            <div className="space-y-2 flex-1">
              {medItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                    item.highlight
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-secondary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name={item.icon} className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums ${item.highlight ? "text-primary" : ""}`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-sm font-medium transition-colors mt-6 bg-primary text-primary-foreground hover:bg-primary/90 text-center block"
            >
              Записаться
            </a>
          </div>

          {/* Экспресс-анализы */}
          <div className="bg-card border border-primary shadow-lg rounded-2xl p-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
              ЭКСПРЕСС-АНАЛИЗЫ
            </div>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="FlaskConical" className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">УСЛУГА</p>
                <h3 className="font-semibold text-lg">Анализы</h3>
              </div>
              <span className="ml-auto text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                от 1 часа
              </span>
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: "Zap", label: "Быстро" },
                { icon: "Smile", label: "Комфортно" },
                { icon: "ShieldCheck", label: "Надёжно" },
                { icon: "BadgePercent", label: "Выгодно" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-secondary/50 rounded-xl px-4 py-3">
                  <Icon name={item.icon} className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Виды анализов */}
            <div className="space-y-2 flex-1">
              {[
                "Общий анализ крови",
                "Биохимия крови",
                "Общий анализ мочи",
                "Гормоны щитовидной железы",
                "ПЦР-исследования",
                "И другие виды анализов",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-sm font-medium transition-colors mt-6 bg-primary text-primary-foreground hover:bg-primary/90 text-center block"
            >
              Узнать цену анализа
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
