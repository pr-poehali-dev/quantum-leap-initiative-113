interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  visual: "visit" | "state" | "ready";
  note?: string;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    title: "Приём врача",
    description: "Приходите в клинику, врач проводит осмотр, сдаёте анализы или процедуры.",
    visual: "visit",
  },
  {
    number: "02",
    title: "Государственные клиники",
    description: "Если медосмотр на права — посещаете психиатра (медгородок) и нарколога (1/05).",
    visual: "state",
    note: "Только для справки на права",
  },
  {
    number: "03",
    title: "Получите справку",
    description: "Забираете готовый документ с печатью.",
    visual: "ready",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">КАК_МЫ_РАБОТАЕМ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Три шага до готовой справки.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Без бюрократии. Без очередей. Просто приходите — мы всё сделаем.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                {/* Visual placeholder */}
                <div className="aspect-square bg-secondary/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  {step.visual === "visit" && (
                    <div className="bg-card border border-border rounded-lg p-3 shadow-sm w-4/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground">ОСМОТР</span>
                        <span className="text-[10px] font-mono text-green-600">ИДЁТ</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-primary/40 rounded w-full" />
                        <div className="h-1.5 bg-border rounded w-4/5" />
                        <div className="h-1.5 bg-border rounded w-3/4" />
                      </div>
                    </div>
                  )}
                  {step.visual === "state" && (
                    <div className="space-y-2 w-full px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="h-2 bg-primary/30 rounded flex-1" />
                      </div>
                      <div className="text-[10px] font-mono text-center text-muted-foreground mt-2">Психиатр</div>
                      <div className="h-1 bg-border rounded w-full" />
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                        <div className="h-2 bg-border rounded flex-1" />
                      </div>
                      <div className="text-[10px] font-mono text-center text-muted-foreground">Нарколог</div>
                    </div>
                  )}
                  {step.visual === "ready" && (
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs font-mono text-green-700">ГОТОВО</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                </div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>

                {step.note && (
                  <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                    <p className="text-[11px] font-mono text-amber-700">{step.note}</p>
                  </div>
                )}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
