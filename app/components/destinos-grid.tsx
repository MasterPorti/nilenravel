import Image from "next/image";
import Link from "next/link";

interface Destino {
  src: string;
  alt: string;
  title: string;
  href: string;
}

interface DestinosGridProps {
  destinos: Destino[];
}

export default function DestinosGrid({ destinos }: DestinosGridProps) {
  // Separar en dos grupos: primeros 2 (arriba) y resto (abajo)
  const primerosDos = destinos.slice(0, 2);
  const resto = destinos.slice(2);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Primera fila: 2 destinos grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        {primerosDos.map((destino, index) => (
          <Link
            key={index}
            href={destino.href}
            className="group relative h-56 md:h-56 lg:h-56 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] block"
          >
            <Image
              src={destino.src}
              alt={destino.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Texto del destino */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-2xl transform group-hover:translate-y-[-4px] transition-transform duration-300">
                {destino.title}
              </h3>
            </div>
            {/* Efecto de borde en hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* Segunda fila: 3 destinos (o los que queden) */}
      {resto.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {resto.map((destino, index) => (
            <Link
              key={index}
              href={destino.href}
              className="group relative h-44 md:h-56 lg:h-56 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] block"
            >
              <Image
                src={destino.src}
                alt={destino.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Texto del destino */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-2xl transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  {destino.title}
                </h3>
              </div>
              {/* Efecto de borde en hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
