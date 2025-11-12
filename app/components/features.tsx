import { FiMap, FiClock, FiCreditCard } from "react-icons/fi";

export default function Features() {
  const features = [
    {
      icon: FiMap,
      title: "Planea tu viaje con nosotros",
      description:
        "Recibe asesoría personalizada y descubre las mejores opciones para cada parte de tu aventura.",
    },
    {
      icon: FiClock,
      title: "Horarios flexibles",
      description:
        "Visítanos en nuestra sucursal. Abrimos de lunes a viernes, de 9:30 a 5:30.",
    },
    {
      icon: FiCreditCard,
      title: "Pagos cómodos y seguros",
      description:
        "Elige entre varios métodos de pago o utiliza nuestro sistema de apartado. Descubre nuestras opciones de pago",
    },
  ];

  return (
    <section className="w-full bg-white pt-8 md:pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#05164d]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#05164d]" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-snug">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
