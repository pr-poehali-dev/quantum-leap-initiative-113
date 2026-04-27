interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "МЦ-0088",
    quote:
      "Пришла за справкой на права — думала, придётся ходить несколько дней. Всё сделали за два часа! Врачи приветливые, очередей нет. Буду рекомендовать всем знакомым.",
    author: "Анна Смирнова",
    role: "ВОДИТЕЛЬСКАЯ СПРАВКА",
  },
  {
    id: "МЦ-2301",
    quote:
      "Оформляли медкнижки для всего персонала кафе. Менеджер всё организовал, объяснил что нужно. Прошли осмотр быстро, без задержек. Очень удобно для небольшого бизнеса.",
    author: "Игорь Петров",
    role: "МЕДИЦИНСКАЯ КНИЖКА",
  },
  {
    id: "МЦ-7725",
    quote:
      "Сдавал расширенный анализ крови. Результаты пришли на следующий день в мессенджер. Персонал внимательный, кабинет чистый и современный. Обязательно вернусь.",
    author: "Михаил Орлов",
    role: "ЛАБОРАТОРНЫЕ АНАЛИЗЫ",
  },
  {
    id: "МЦ-0030",
    quote:
      "Делала капельницы курсом. Удобно — не надо ехать в больницу. Медсестра профессиональная, всё объясняет. Цены адекватные, запись без проблем.",
    author: "Татьяна Волкова",
    role: "КАПЕЛЬНИЦЫ",
  },
  {
    id: "МЦ-2134",
    quote: "Взяли санаторно-курортную карту перед отпуском. Быстро, недорого, с официальной печатью. Рекомендую всем, кто ценит своё время.",
    author: "Сергей Козлов",
    role: "САНАТОРНАЯ КАРТА",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">ОТЗЫВЫ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Пациенты, которые нам доверяют
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Реальные отзывы наших пациентов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}

          {/* Join CTA */}
          <div className="bg-secondary/50 border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center mb-3">
              <span className="text-lg">+</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">ВАШ ОТЗЫВ ЗДЕСЬ</span>
            <p className="text-sm text-muted-foreground mt-1">Станьте нашим пациентом.</p>
          </div>

          {testimonials.slice(4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
