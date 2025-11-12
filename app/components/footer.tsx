import Link from "next/link";
import { FiPhone, FiMessageCircle, FiMapPin, FiClock, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05164d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lufthansa City Center</h3>
            <p className="text-gray-300 text-sm mb-4">
              Nilen Travel
            </p>
            <p className="text-gray-300 text-sm">
              Somos parte de la red mundial de Lufthansa City Center, ofreciendo servicios de viaje de clase mundial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Página Principal
                </Link>
              </li>
              <li>
                <Link
                  href="/mundo-corporativo"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Mundo Corporativo
                </Link>
              </li>
              <li>
                <Link
                  href="/mundo-turistico"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Mundo Turístico
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos-destacados"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Destinos Destacados
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Viajes Corporativos</li>
              <li>Viajes Turísticos</li>
              <li>Asesoría en Visas</li>
              <li>Seguros de Viaje</li>
              <li>Paquetes Nacionales e Internacionales</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Colina de Los Acónitos 43-D, Boulevares,
                  <br />
                  53140 Naucalpan de Juárez, Méx.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-5 h-5 text-gray-300 shrink-0" />
                <a
                  href="tel:+5255555622707"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +52 55 5562 2707
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMessageCircle className="w-5 h-5 text-gray-300 shrink-0" />
                <a
                  href="https://wa.me/525561952964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +52 55 6195 2964
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-gray-300 shrink-0" />
                <span className="text-gray-300 text-sm">
                  Lun - Vie: 9:30 - 17:30
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} Lufthansa City Center Nilen Travel. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/newsletter"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Newsletter
              </Link>
              <Link
                href="/sales-partners"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Sales Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

