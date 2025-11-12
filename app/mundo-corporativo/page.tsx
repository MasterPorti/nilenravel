import Header from "../components/header";
import HeroCorporativo from "../components/hero-corporativo";
import Footer from "../components/footer";
import {
  FiCheckCircle,
  FiGlobe,
  FiTarget,
  FiMail,
  FiMessageCircle,
  FiAward,
} from "react-icons/fi";

export default function MundoCorporativo() {
  const benefits = [
    "Más de 45 años de experiencia en viajes de negocio.",
    "Atención personalizada antes, durante y después del viaje.",
    "Tarifas preferenciales con aerolíneas, hoteles y proveedores.",
    "Ahorro de tiempo y costos al centralizar tus reservaciones.",
    "Asesoría integral en visas, seguros y requisitos sanitarios.",
    "Asistencia global con más de 600 socios en 110 países.",
    'Reconocidos como "Top Performer Lufthansa City Center" por nuestra calidad y servicio.',
  ];

  const commitments = [
    "Reducir tus costos de viaje.",
    "Garantizar la satisfacción de tus colaboradores.",
    "Construir relaciones a largo plazo con tu empresa.",
  ];

  return (
    <>
      <Header />
      <HeroCorporativo />

      {/* Introduction Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Con más de <strong>45 años de experiencia</strong>, en Nilen
              Travel ayudamos a empresas a optimizar sus viajes corporativos con
              atención personalizada, tecnología de punta y un equipo altamente
              capacitado.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Formamos parte de la exclusiva red{" "}
              <strong>Lufthansa City Center</strong>, presente en más de{" "}
              <strong>110 países</strong>, lo que nos permite ofrecer asistencia
              global y soluciones locales en cualquier parte del mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#05164d] mb-8 text-center">
              ¿Por qué elegir Nilen Travel?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <FiCheckCircle className="w-6 h-6 text-[#05164d] shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lufthansa City Center Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FiGlobe className="w-10 h-10 text-[#05164d]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#05164d]">
                🌐 Viaja con respaldo internacional
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lufthansa City Center es la red privada de agencias más grande del
              mundo. Su modelo combina la flexibilidad de una agencia local con
              la solidez de una marca global, garantizando confianza, eficiencia
              y respaldo dondequiera que viajes.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="w-full bg-[#05164d] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <FiTarget className="w-10 h-10" />
              <h2 className="text-2xl md:text-3xl font-bold">
                🎯 Nuestro compromiso
              </h2>
            </div>
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiAward className="w-6 h-6 shrink-0 mt-1" />
                  <p className="text-lg">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#05164d] mb-8 text-center">
              📩 Contáctanos
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-gray-700 mb-6 text-center">
                Con gusto te enviaremos una presentación personalizada con
                nuestras soluciones corporativas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <FiMail className="w-6 h-6 text-[#05164d] shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Correo</p>
                    <a
                      href="mailto:reservas2@nilenlcc.com.mx"
                      className="text-[#05164d] hover:underline font-medium"
                    >
                      reservas2@nilenlcc.com.mx
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiMessageCircle className="w-6 h-6 text-[#05164d] shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/525561952964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#05164d] hover:underline font-medium"
                    >
                      55 6195 2964
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <blockquote className="border-l-4 border-[#05164d] pl-8 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-4">
                &ldquo;Viajar tranquilo es saber que tienes respaldo en
                tierra.&rdquo;
              </p>
              <cite className="text-lg text-[#05164d] font-semibold">
                — Nilen Travel, Lufthansa City Center
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
