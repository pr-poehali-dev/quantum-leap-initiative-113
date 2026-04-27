const photos = [
  {
    url: "https://cdn.poehali.dev/projects/c799c87e-8831-427e-b4cc-e67f155eab64/bucket/c9e4abf8-92fb-4a0d-9d50-091b3ed3b990.jpg",
    label: "Ресепшн",
    wide: true,
  },
  {
    url: "https://cdn.poehali.dev/projects/c799c87e-8831-427e-b4cc-e67f155eab64/bucket/b2886152-157b-40c5-80da-d4ddaaaa48f7.jpg",
    label: "Зона ожидания",
    wide: false,
  },
  {
    url: "https://cdn.poehali.dev/projects/c799c87e-8831-427e-b4cc-e67f155eab64/bucket/583fb8ed-c908-442b-9e7f-4caa2574e1f2.jpg",
    label: "Лаборатория",
    wide: false,
  },
  {
    url: "https://cdn.poehali.dev/projects/c799c87e-8831-427e-b4cc-e67f155eab64/bucket/16205a0a-0235-4845-8f3b-ec55474bcbd0.jpg",
    label: "Кабинет врача",
    wide: false,
  },
  {
    url: "https://cdn.poehali.dev/projects/c799c87e-8831-427e-b4cc-e67f155eab64/bucket/424c6167-9037-42b5-9360-93081d6c6768.jpg",
    label: "Забор анализов",
    wide: false,
  },
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">НАША_КЛИНИКА</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2">Чисто, современно, удобно</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {/* Первое фото — широкое, занимает 2 колонки и 2 ряда */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <img
              src={photos[0].url}
              alt={photos[0].label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-xs font-mono text-white">{photos[0].label}</span>
            </div>
          </div>

          {/* Остальные фото */}
          {photos.slice(1).map((photo) => (
            <div key={photo.url} className="relative rounded-2xl overflow-hidden group">
              <img
                src={photo.url}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-0.5">
                <span className="text-[10px] font-mono text-white">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
