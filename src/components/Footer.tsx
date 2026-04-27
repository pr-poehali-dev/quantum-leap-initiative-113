import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono">МЦ</span>
              </div>
              <span className="font-serif">МедЦентр.</span>
            </Link>
            <p className="text-xs font-mono text-muted-foreground">
              МЕДИЦИНСКИЙ ЦЕНТР
              <br />
              ОСМОТРЫ И АНАЛИЗЫ
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-4">ПН–СБ 8:00–20:00</p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">УСЛУГИ</h4>
            <ul className="space-y-2">
              {["Медосмотры", "Анализы", "Справки", "Капельницы"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">ДОКУМЕНТЫ</h4>
            <ul className="space-y-2">
              {["Политика конфиденциальности", "Лицензия", "Реквизиты", "Контакты"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted-foreground mb-4">КОНТАКТЫ</h4>
            <div className="bg-secondary/50 rounded-xl p-4 font-mono text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">РЕЖИМ РАБОТЫ</span>
              </div>
              <div className="space-y-1">
                <p className="text-primary">ПН–СБ: 8:00–20:00 [ОТКРЫТО]</p>
                <p className="text-muted-foreground">Запись по телефону и онлайн</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">2026 МЕДЦЕНТР. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <p className="text-xs text-muted-foreground">ЛИЦЕНЗИРОВАННАЯ МЕДИЦИНСКАЯ ДЕЯТЕЛЬНОСТЬ.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
