import { ArrowRight } from "lucide-react";
import Icon from "@/components/ui/icon";

const PHONE = "79274501100";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative corner icons */}
          <div className="absolute top-8 left-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Icon name="Stethoscope" className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute top-8 right-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Icon name="FlaskConical" className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 left-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Icon name="FileText" className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 right-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Icon name="Users" className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute top-1/2 right-16 -translate-y-1/2 w-10 h-10 border border-border rounded-lg hidden md:flex items-center justify-center">
            <Icon name="Heart" className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-1/3 left-16 w-10 h-10 border border-border rounded-lg hidden md:flex items-center justify-center">
            <Icon name="Syringe" className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Main content */}
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
              Ваше здоровье —
              <br />
              наша забота.
            </h2>
            <p className="text-muted-foreground mb-8">
              Запишитесь прямо сейчас и получите справку или результаты анализов уже сегодня. Работаем без очередей.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
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
                className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;