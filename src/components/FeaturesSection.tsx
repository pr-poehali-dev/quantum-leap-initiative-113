import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">УСЛУГИ_КЛИНИКИ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Всё что нужно для здоровья и документов
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Полный спектр медицинских услуг в одном месте. Опытные врачи и современное оборудование.
          </p>
        </div>

        {/* Top row features */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Медосмотры */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">УСЛУГА</span>
              <span className="text-xs font-mono text-muted-foreground">МЕДОСМОТРЫ</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="space-y-2">
                {["На права (водительская)", "На работу (профосмотр)", "Медицинская книжка"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-mono text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Медосмотры и справки</h3>
            <p className="text-sm text-muted-foreground">
              Справки на права, работу, медкнижки и санаторно-курортные карты — быстро и официально.
            </p>
          </div>

          {/* Анализы */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">УСЛУГА</span>
              <span className="text-xs font-mono text-muted-foreground">ЛАБОРАТОРИЯ</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-3 gap-2">
                {["Кровь", "Моча", "ПЦР", "Биохимия", "Гормоны", "Ещё"].map((item, i) => (
                  <div
                    key={item}
                    className={`text-center p-2 rounded-lg ${i < 5 ? "bg-card border border-border" : "border border-dashed border-border"}`}
                  >
                    <div className="w-6 h-6 mx-auto mb-1 rounded bg-secondary flex items-center justify-center">
                      <Icon name="FlaskConical" className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[10px] font-mono text-accent-foreground bg-accent px-2 py-0.5 rounded">
                  + ВИДЫ
                </span>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Любые виды анализов</h3>
            <p className="text-sm text-muted-foreground">Современная лаборатория. Результаты в день сдачи или на следующий день.</p>
          </div>

          {/* Процедуры */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">УСЛУГА</span>
              <span className="text-xs font-mono text-muted-foreground">ПРОЦЕДУРЫ</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-accent flex items-center justify-center">
                  <Icon name="Syringe" className="w-6 h-6 text-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Капельницы и уколы</h3>
            <p className="text-sm text-muted-foreground">
              Внутривенные и внутримышечные процедуры в комфортных условиях. Опытный медперсонал.
            </p>
          </div>
        </div>

        {/* Bottom row features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Скорость */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center">
                  <Icon name="Clock" className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">МЕТРИКА</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">Справка за 1 день</h3>
                <p className="text-sm text-muted-foreground">
                  Не тратьте время на очереди. Большинство справок и медосмотров оформляем в день обращения.
                </p>
              </div>
            </div>
          </div>

          {/* Справки */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">ДОКУМЕНТЫ</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">10+ видов справок</h3>
                <p className="text-sm text-muted-foreground">
                  Права, работа, бассейн, санаторий, медкнижка — всё официально и с печатью.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="flex gap-1">
                  {["1", "0", "+"].map((num, i) => (
                    <div
                      key={i}
                      className="w-8 h-10 bg-card border border-border rounded flex items-center justify-center"
                    >
                      <span className="font-mono text-lg">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
