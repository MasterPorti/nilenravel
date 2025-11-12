import Header from "../components/header";
import HeroTuristico from "../components/hero-turistico";
import Footer from "../components/footer";
import DestinosGrid from "../components/destinos-grid";

export default function MundoTuristico() {
  const destinos = [
    {
      src: "/mundo-turistico/CDMX.jpg",
      alt: "Ciudad de México",
      title: "CDMX",
      href: "/destinos/cdmx",
    },
    {
      src: "/mundo-turistico/cruscero.jpg",
      alt: "Cruceros",
      title: "Cruceros",
      href: "/destinos/cruceros",
    },
    {
      src: "/mundo-turistico/africa.jpg",
      alt: "África",
      title: "África",
      href: "/destinos/africa",
    },
    {
      src: "/mundo-turistico/europa.webp",
      alt: "Europa",
      title: "Europa",
      href: "/destinos/europa",
    },
    {
      src: "/mundo-turistico/Caribe-suramerica.jpg",
      alt: "Caribe y Suramérica",
      title: "Caribe y Suramérica",
      href: "/destinos/caribe-suramerica",
    },
  ];

  return (
    <>
      <Header />
      <HeroTuristico />
      <div className="w-full max-w-6xl mx-auto px-4 mt-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[#05164d] mb-8">
          Nuestro Mundo Turístico
        </h2>
      </div>
      <DestinosGrid destinos={destinos} />
      <Footer />
    </>
  );
}
