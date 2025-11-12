import Image from "next/image";

export default function HeroCorporativo() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
      <Image
        src="/hero-mundo-corporatio.jpg"
        alt="Mundo Corporativo"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60 flex items-center px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl font-bold">
            Lufthansa City Center
          </h1>
          <h2 className="text-white text-4xl font-thin">Mundo Corporativo</h2>
        </div>
      </div>
    </div>
  );
}
