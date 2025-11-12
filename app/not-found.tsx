import Link from "next/link";
import { FiHome, FiSearch, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#05164d]">
              Nilen Travel
            </Link>
            <Link
              href="/"
              className="text-[#05164d] hover:underline text-sm font-medium"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-[#05164d] leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-[#05164d] mx-auto mt-4"></div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#05164d] text-white px-6 py-3 rounded-lg hover:bg-[#040f3a] transition-colors duration-200 font-medium"
            >
              <FiHome className="w-5 h-5" />
              Ir a la página principal
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#05164d] border-2 border-[#05164d] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <FiSearch className="w-5 h-5" />
              Contactarnos
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              También puedes visitar:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mundo-corporativo"
                className="text-[#05164d] hover:underline text-sm font-medium"
              >
                Mundo Corporativo
              </Link>
              <Link
                href="/mundo-turistico"
                className="text-[#05164d] hover:underline text-sm font-medium"
              >
                Mundo Turístico
              </Link>
              <Link
                href="/destinos-destacados"
                className="text-[#05164d] hover:underline text-sm font-medium"
              >
                Destinos Destacados
              </Link>
              <Link
                href="/contacto"
                className="text-[#05164d] hover:underline text-sm font-medium"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#05164d] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Lufthansa City Center Nilen Travel. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

