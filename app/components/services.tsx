import Link from "next/link";
import {
  FiBriefcase,
  FiGlobe,
  FiShield,
  FiFileText,
  FiMapPin,
} from "react-icons/fi";

export default function Services() {
  return (
    <section className="w-full bg-gray-50 pt-8 md:pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mundo Corporativo */}
            <Link
              href="/mundo-corporativo"
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#05164d] flex flex-col min-h-[400px]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#05164d]/10 rounded-lg flex items-center justify-center group-hover:bg-[#05164d] transition-colors duration-300">
                  <FiBriefcase className="w-8 h-8 text-[#05164d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#05164d]">
                  Mundo Corporativo
                </h3>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <FiFileText className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Servicios especializados para empresas y viajes de negocios
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiShield className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Apoyo en Visas a Estados Unidos y el Mundo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiFileText className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Reglamentos y Requisitos Gubernamentales y de Salud
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiShield className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Seguros de Viaje corporativos
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-[#05164d] font-semibold text-sm group-hover:underline">
                  Ver más →
                </p>
              </div>
            </Link>

            {/* Mundo Turístico */}
            <Link
              href="/mundo-turistico"
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#05164d] flex flex-col min-h-[400px]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#05164d]/10 rounded-lg flex items-center justify-center group-hover:bg-[#05164d] transition-colors duration-300">
                  <FiGlobe className="w-8 h-8 text-[#05164d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#05164d]">
                  Mundo Turístico
                </h3>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Programas y paquetes nacionales y mundiales
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiGlobe className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Sobre Lufthansa City Center - Red mundial de viajes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiShield className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Seguros de Viaje para turistas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FiFileText className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    Asesoría completa en destinos destacados
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-[#05164d] font-semibold text-sm group-hover:underline">
                  Ver más →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
