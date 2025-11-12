import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-50 relative overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center px-5">
        <div>
          <h1 className="text-white text-4xl font-bold">
            Lufthansa City Center
          </h1>
          <h2 className="text-white text-4xl font-thin">Nilen Travel</h2>
        </div>
      </div>
    </div>
  );
}
