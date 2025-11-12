import Image from "next/image";

export default function HeroTuristico() {
  return (
    <div className="w-full h-50 relative overflow-hidden">
      <Image
        src="/mundo-turistico/hero-mundo-corporativo.jpg"
        alt="Mundo Turístico"
        fill
        className="object-cover"
        priority
        style={{ objectPosition: "50% 25%" }}
      />
      <div className="absolute inset-0 bg-black/60 flex items-center px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl font-bold">
            Lufthansa City Center
          </h1>
          <h2 className="text-white text-4xl font-thin">Mundo Turístico</h2>
        </div>
      </div>
    </div>
  );
}
