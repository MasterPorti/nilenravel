import {
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-full bg-gray-50 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#05164d] mb-8 md:mb-12 text-center">
            Contáctanos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#05164d] mb-2">
                  Lufthansa City Center Nilen Travel
                </h3>
                <div className="flex items-center gap-2 text-green-600 mb-4">
                  <FiCheckCircle className="w-5 h-5" />
                  <span className="font-medium">Abierto</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ciudad de México, Estado de México
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Dirección</p>
                  <p className="text-gray-600 text-sm">
                    Colina de Los Acónitos 43-D, Boulevares,
                    <br />
                    53140 Naucalpan de Juárez, Méx.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Teléfono</p>
                  <a
                    href="tel:+5255555622707"
                    className="text-[#05164d] hover:underline font-medium"
                  >
                    +52 55 5562 2707
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <FiMessageCircle className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/525561952964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#05164d] hover:underline font-medium"
                  >
                    +52 55 6195 2964
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <FiClock className="w-5 h-5 text-[#05164d] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Horario</p>
                  <p className="text-gray-600">Lunes a Viernes 9:30 - 5:30</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <a
                  href="tel:+5255555622707"
                  className="inline-block bg-[#05164d] text-white px-6 py-3 rounded-lg hover:bg-[#040f3a] transition-colors duration-200 font-medium text-sm"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.0380923797975!2d-99.24114542501142!3d19.496996881796168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2031f3e8f2ce9%3A0xe554cc564c2e272b!2sLufthansa%20City%20Center%20Nilen%20Travel!5e0!3m2!1ses!2smx!4v1762801820499!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
