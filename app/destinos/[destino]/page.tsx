import Header from "../../components/header";
import Footer from "../../components/footer";
import ImageCarousel from "../../components/image-carousel";
import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import destinosData from "@/data/destinos.json";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    destino: string;
  }>;
}

interface Traslado {
  title: string;
  description: string;
}

interface Tour {
  title: string;
  duration: string;
  description?: string;
}

interface RecommendedDestino {
  title: string;
  href: string;
  image: string;
  alt: string;
}

interface DestinoData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  carouselImages: Array<{ src: string; alt: string }>;
  sectionTitle: string;
  traslados: Traslado[];
  toursSectionTitle: string;
  tours: Tour[];
  customTours: {
    description: string;
    minimum: string;
  };
  recommendedDestinos?: RecommendedDestino[];
}

export default async function DestinoPage({ params }: PageProps) {
  const { destino } = await params;

  if (!destino) {
    notFound();
  }

  const destinoId = destino.toLowerCase();
  const destinoData = (destinosData as Record<string, DestinoData>)[destinoId];

  if (!destinoData) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
        <Image
          src={destinoData.heroImage}
          alt={destinoData.heroImageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {destinoData.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              {destinoData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - 50/50 Layout */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Side - 50% - All Information */}
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                <div className="mb-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#05164d] mb-2">
                    {destinoData.sectionTitle}
                  </h2>
                  <div className="w-20 h-1 bg-[#05164d]"></div>
                </div>

                <div className="space-y-5">
                  {/* Traslados */}
                  {destinoData.traslados.map(
                    (traslado: Traslado, index: number) => (
                      <div key={index}>
                        <div className="flex items-start gap-2 mb-2">
                          <FiMapPin className="w-5 h-5 text-[#05164d] shrink-0 mt-0.5" />
                          <h3 className="text-lg font-bold text-[#05164d]">
                            {traslado.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 ml-7 text-sm">
                          {traslado.description}
                        </p>
                      </div>
                    )
                  )}

                  {/* Tours */}
                  <div>
                    <h3 className="text-xl font-bold text-[#05164d] mb-3">
                      {destinoData.toursSectionTitle}
                    </h3>
                    <div className="space-y-2.5">
                      {destinoData.tours.map((tour: Tour, index: number) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <FiClock className="w-4 h-4 text-[#05164d] shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-gray-800 font-semibold text-sm">
                              {tour.title}
                            </p>
                            <p className="text-gray-600 text-xs">
                              {tour.duration}
                              {tour.description && (
                                <span className="italic">
                                  {" "}
                                  - {tour.description}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Información adicional */}
                  <div className="bg-[#05164d]/5 rounded-lg p-4 border-l-4 border-[#05164d]">
                    <div className="flex items-start gap-2.5">
                      <FiCheckCircle className="w-4 h-4 text-[#05164d] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-700 mb-2 text-sm">
                          {destinoData.customTours.description}
                        </p>
                        <p className="text-gray-700 font-semibold text-sm">
                          {destinoData.customTours.minimum}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - 50% - Carousel (75%) + Reservar (25%) */}
              <div className="flex flex-col gap-6 h-full">
                {/* Carousel - 75% */}
                <div className="flex-[3] min-h-[450px]">
                  <ImageCarousel images={destinoData.carouselImages} />
                </div>

                {/* Reservar Section - 25% */}
                <div className="flex-1 bg-gradient-to-br from-[#05164d] to-[#0a2a5a] rounded-xl shadow-xl p-5 flex flex-col justify-center">
                  <div className="text-center mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      ¡Reserva Ahora!
                    </h3>
                    <p className="text-gray-200 text-xs">
                      Contáctanos y planifica tu aventura
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <a
                      href="mailto:reservas2@nilenlcc.com.mx"
                      className="flex items-center justify-center gap-2 bg-white text-[#05164d] rounded-lg px-4 py-3 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm"
                    >
                      <FiMail className="w-4 h-4 shrink-0" />
                      <span>Enviar Email</span>
                    </a>
                    <a
                      href="https://wa.me/525561952964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-lg px-4 py-3 font-semibold hover:bg-[#20BA5A] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm"
                    >
                      <FiMessageCircle className="w-4 h-4 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-gray-300 text-[10px]">
                      Respuesta rápida garantizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Recomendados Section */}
      {destinoData.recommendedDestinos &&
        destinoData.recommendedDestinos.length > 0 && (
          <section className="w-full bg-white py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#05164d] mb-2">
                    Destinos Recomendados
                  </h2>
                  <div className="w-24 h-1 bg-[#05164d] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {destinoData.recommendedDestinos.map(
                    (destinoRec: RecommendedDestino, index: number) => (
                      <Link
                        key={index}
                        href={destinoRec.href}
                        className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <Image
                          src={destinoRec.image}
                          alt={destinoRec.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white text-xl font-bold drop-shadow-lg">
                            {destinoRec.title}
                          </h3>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

      <Footer />
    </>
  );
}
