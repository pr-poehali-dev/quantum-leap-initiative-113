import { Link } from "react-router-dom";

const PHONE = "+79274501100";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono">МЛ</span>
              </div>
              <span className="font-serif">МЕДЛАБ.</span>
            </Link>
            <p className="text-xs font-mono text-muted-foreground">
              МЕДИЦИНСКИЙ ЦЕНТР
              <br />
              ОСМОТРЫ И АНАЛИЗЫ
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-4">ПН–ПТ 8:00–16:00</p>
            <p className="text-xs font-mono text-muted-foreground">Процедурный: 8:00–12:00</p>
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

          {/* Contacts */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted-foreground mb-4">КОНТАКТЫ</h4>
            <div className="bg-secondary/50 rounded-xl p-4 font-mono text-xs space-y-3">
              <div>
                <p className="text-primary font-semibold">ПН–ПТ: 8:00–16:00</p>
                <p className="text-muted-foreground mt-0.5">Процедурный кабинет: 8:00–12:00</p>
                <p className="text-muted-foreground mt-1">Набережные Челны, пр. Хасана Туфана, д. 53</p>
                <p className="text-muted-foreground">(13/02 по комплексу)</p>
              </div>
              <div>
                <a href={`tel:${PHONE}`} className="text-foreground hover:text-primary transition-colors">
                  +7 927 450-11-00
                </a>
              </div>
              <div className="flex gap-3 pt-1">
                <a
                  href={`https://wa.me/${PHONE.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-600 rounded-lg px-3 py-1.5 hover:bg-green-500/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.571l5.86-1.447A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.032-1.378l-.36-.214-3.742.924.997-3.634-.235-.374A9.869 9.869 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`https://t.me/+79274501100`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-600 rounded-lg px-3 py-1.5 hover:bg-blue-500/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">2026 МЕДЛАБ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <p className="text-xs text-muted-foreground">ЛИЦЕНЗИЯ №Л041-01181-16/00327538 ОТ 15.09.2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;