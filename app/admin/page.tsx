"use client";

import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiSave,
  FiX,
  FiUpload,
  FiImage,
  FiEye,
} from "react-icons/fi";
import Image from "next/image";
import ImageCarousel from "../components/image-carousel";
import {
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

interface DestinoData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  carouselImages: Array<{ src: string; alt: string }>;
  sectionTitle: string;
  traslados: Array<{ title: string; description: string }>;
  toursSectionTitle: string;
  tours: Array<{ title: string; duration: string; description?: string }>;
  customTours: {
    description: string;
    minimum: string;
  };
  recommendedDestinos?: Array<{
    title: string;
    href: string;
    image: string;
    alt: string;
  }>;
}

export default function AdminPage() {
  const [destinos, setDestinos] = useState<Record<string, DestinoData>>({});
  const [selectedDestino, setSelectedDestino] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<DestinoData>>({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadDestinos();
  }, []);

  const loadDestinos = async () => {
    try {
      const response = await fetch("/api/destinos");
      const data = await response.json();
      setDestinos(data);
    } catch (error) {
      console.error("Error loading destinos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (destinoId: string) => {
    setSelectedDestino(destinoId);
    setFormData(destinos[destinoId]);
    setIsEditing(true);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setSelectedDestino(null);
    setFormData({
      id: "",
      title: "",
      subtitle: "",
      heroImage: "",
      heroImageAlt: "",
      carouselImages: [],
      sectionTitle: "Traslados y Tours",
      traslados: [],
      toursSectionTitle: "Tours",
      tours: [],
      customTours: {
        description: "",
        minimum: "",
      },
      recommendedDestinos: [],
    });
    setIsCreating(true);
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      const destinoId = formData.id || selectedDestino || "";
      
      if (!destinoId) {
        alert("El ID del destino es requerido");
        return;
      }

      const method = isCreating ? "POST" : "PUT";
      const response = await fetch("/api/destinos", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destinoId,
          destinoData: formData,
        }),
      });

      if (response.ok) {
        await loadDestinos();
        setIsEditing(false);
        setIsCreating(false);
        setSelectedDestino(null);
        alert("Destino guardado exitosamente");
      } else {
        alert("Error al guardar el destino");
      }
    } catch (error) {
      console.error("Error saving:", error);
      alert("Error al guardar");
    }
  };

  const handleDelete = async (destinoId: string) => {
    if (!confirm(`¿Estás seguro de eliminar ${destinoId}?`)) return;

    try {
      const response = await fetch(`/api/destinos?id=${destinoId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadDestinos();
        alert("Destino eliminado exitosamente");
      } else {
        alert("Error al eliminar el destino");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      alert("Error al eliminar");
    }
  };

  const handleFileUpload = async (
    file: File,
    tipo: "hero" | "carousel" | "recommended",
    destinoFolder?: string
  ) => {
    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      if (destinoFolder) {
        uploadFormData.append("subfolder", destinoFolder);
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      });

      const data = await response.json();

      if (data.success) {
        if (tipo === "hero") {
          setFormData((prev) => ({ ...prev, heroImage: data.path }));
        } else if (tipo === "carousel") {
          const newImage = { src: data.path, alt: file.name };
          setFormData((prev) => ({
            ...prev,
            carouselImages: [
              ...(prev.carouselImages || []),
              newImage,
            ],
          }));
        }
        return data.path;
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-[#05164d]">
                Panel de Administración - Destinos
              </h1>
              {!isEditing && !isCreating && (
                <button
                  onClick={handleCreate}
                  className="flex items-center gap-2 bg-[#05164d] text-white px-4 py-2 rounded-lg hover:bg-[#0a2a5a] transition-colors"
                >
                  <FiPlus /> Nuevo Destino
                </button>
              )}
            </div>

            {!isEditing && !isCreating ? (
              <div className="space-y-4">
                {Object.keys(destinos).length === 0 ? (
                  <p className="text-gray-500">No hay destinos creados</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(destinos).map(([id, destino]) => (
                      <div
                        key={id}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-bold text-[#05164d] mb-2">
                          {destino.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {destino.subtitle}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(id)}
                            className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                          >
                            <FiEdit /> Editar
                          </button>
                          <button
                            onClick={() => handleDelete(id)}
                            className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                          >
                            <FiTrash2 /> Eliminar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#05164d]">
                    {isCreating ? "Crear Nuevo Destino" : "Editar Destino"}
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      <FiSave /> Guardar
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setIsCreating(false);
                        setSelectedDestino(null);
                      }}
                      className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                      <FiX /> Cancelar
                    </button>
                  </div>
                </div>

                {/* Vista Previa */}
                {formData.title && (
                  <div className="bg-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300">
                    <div className="flex items-center gap-2 mb-4">
                      <FiEye className="w-5 h-5 text-[#05164d]" />
                      <h3 className="text-xl font-bold text-[#05164d]">
                        Vista Previa
                      </h3>
                    </div>
                    
                    {/* Hero Preview */}
                    {formData.heroImage && (
                      <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={formData.heroImage}
                          alt={formData.heroImageAlt || ""}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
                        <div className="relative h-full flex items-center justify-center">
                          <div className="text-center text-white">
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">
                              {formData.title}
                            </h1>
                            <p className="text-base text-gray-200">
                              {formData.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Preview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left Side - Info */}
                      <div className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-xl font-bold text-[#05164d] mb-4">
                          {formData.sectionTitle || "Traslados y Tours"}
                        </h2>
                        
                        {/* Traslados Preview */}
                        {formData.traslados && formData.traslados.length > 0 && (
                          <div className="mb-4">
                            {formData.traslados.map((traslado, idx) => (
                              <div key={idx} className="mb-3">
                                <div className="flex items-start gap-2 mb-1">
                                  <FiMapPin className="w-4 h-4 text-[#05164d] shrink-0 mt-0.5" />
                                  <h3 className="text-sm font-bold text-[#05164d]">
                                    {traslado.title}
                                  </h3>
                                </div>
                                <p className="text-xs text-gray-600 ml-6">
                                  {traslado.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tours Preview */}
                        {formData.tours && formData.tours.length > 0 && (
                          <div>
                            <h3 className="text-lg font-bold text-[#05164d] mb-3">
                              {formData.toursSectionTitle || "Tours"}
                            </h3>
                            <div className="space-y-2">
                              {formData.tours.slice(0, 3).map((tour, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <FiClock className="w-3 h-3 text-[#05164d] shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-xs font-semibold text-gray-800">
                                      {tour.title}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                      {tour.duration}
                                    </p>
                                  </div>
                                </div>
                              ))}
                              {formData.tours.length > 3 && (
                                <p className="text-xs text-gray-500">
                                  +{formData.tours.length - 3} tours más...
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Side - Carousel Preview */}
                      <div className="space-y-4">
                        {formData.carouselImages && formData.carouselImages.length > 0 && (
                          <div className="bg-white rounded-xl shadow-md p-4">
                            <h3 className="text-sm font-bold text-[#05164d] mb-3">
                              Carousel ({formData.carouselImages.length} imágenes)
                            </h3>
                            <div className="relative h-48 rounded-lg overflow-hidden">
                              <ImageCarousel images={formData.carouselImages} />
                            </div>
                          </div>
                        )}

                        {/* Reservar Preview */}
                        <div className="bg-gradient-to-br from-[#05164d] to-[#0a2a5a] rounded-xl shadow-md p-4">
                          <h3 className="text-lg font-bold text-white mb-2 text-center">
                            ¡Reserva Ahora!
                          </h3>
                          <div className="space-y-2">
                            <button className="w-full bg-white text-[#05164d] rounded-lg px-3 py-2 text-sm font-semibold">
                              <FiMail className="w-4 h-4 inline mr-2" />
                              Enviar Email
                            </button>
                            <button className="w-full bg-[#25D366] text-white rounded-lg px-3 py-2 text-sm font-semibold">
                              <FiMessageCircle className="w-4 h-4 inline mr-2" />
                              WhatsApp
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommended Destinos Preview */}
                    {formData.recommendedDestinos && formData.recommendedDestinos.length > 0 && (
                      <div className="mt-6 bg-white rounded-xl shadow-md p-4">
                        <h3 className="text-lg font-bold text-[#05164d] mb-3">
                          Destinos Recomendados ({formData.recommendedDestinos.length})
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {formData.recommendedDestinos.map((dest, idx) => (
                            <div key={idx} className="relative h-24 rounded-lg overflow-hidden">
                              {dest.image ? (
                                <Image
                                  src={dest.image}
                                  alt={dest.alt}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                  <span className="text-xs text-gray-500">
                                    {dest.title}
                                  </span>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-1 left-1 right-1">
                                <p className="text-white text-xs font-bold">
                                  {dest.title}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Formulario */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ID */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ID (slug) *
                    </label>
                    <input
                      type="text"
                      value={formData.id || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, id: e.target.value })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="cdmx"
                      disabled={!isCreating}
                    />
                  </div>

                  {/* Título */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Título *
                    </label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="CIUDAD DE MÉXICO"
                    />
                  </div>

                  {/* Subtítulo */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Subtítulo *
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, subtitle: e.target.value })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Descubre la riqueza cultural..."
                    />
                  </div>

                  {/* Hero Image */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Imagen Hero
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.heroImage || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            heroImage: e.target.value,
                          })
                        }
                        className="flex-1 border rounded-lg px-3 py-2"
                        placeholder="/mundo-turistico/CDMX.jpg"
                      />
                      <label className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                        <FiUpload /> Subir
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleFileUpload(
                                file,
                                "hero",
                                formData.id || selectedDestino || undefined
                              );
                            }
                          }}
                        />
                      </label>
                    </div>
                    {formData.heroImage && (
                      <img
                        src={formData.heroImage}
                        alt="Preview"
                        className="mt-2 w-32 h-20 object-cover rounded"
                      />
                    )}
                  </div>

                  {/* Hero Image Alt */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Alt Text Hero
                    </label>
                    <input
                      type="text"
                      value={formData.heroImageAlt || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          heroImageAlt: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  {/* Section Title */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Título de Sección
                    </label>
                    <input
                      type="text"
                      value={formData.sectionTitle || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sectionTitle: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  {/* Traslados */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Traslados
                    </label>
                    {(formData.traslados || []).map((traslado, index) => (
                      <div key={index} className="mb-4 p-4 border rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                          <input
                            type="text"
                            value={traslado.title}
                            onChange={(e) => {
                              const newTraslados = [...(formData.traslados || [])];
                              newTraslados[index].title = e.target.value;
                              setFormData({ ...formData, traslados: newTraslados });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Título"
                          />
                          <input
                            type="text"
                            value={traslado.description}
                            onChange={(e) => {
                              const newTraslados = [...(formData.traslados || [])];
                              newTraslados[index].description = e.target.value;
                              setFormData({ ...formData, traslados: newTraslados });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Descripción"
                          />
                        </div>
                        <button
                          onClick={() => {
                            const newTraslados = formData.traslados?.filter(
                              (_, i) => i !== index
                            );
                            setFormData({ ...formData, traslados: newTraslados });
                          }}
                          className="text-red-500 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          traslados: [
                            ...(formData.traslados || []),
                            { title: "", description: "" },
                          ],
                        });
                      }}
                      className="text-blue-500 text-sm"
                    >
                      + Agregar Traslado
                    </button>
                  </div>

                  {/* Tours Section Title */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Título Sección Tours
                    </label>
                    <input
                      type="text"
                      value={formData.toursSectionTitle || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          toursSectionTitle: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  {/* Tours */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Tours</label>
                    {(formData.tours || []).map((tour, index) => (
                      <div key={index} className="mb-4 p-4 border rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                          <input
                            type="text"
                            value={tour.title}
                            onChange={(e) => {
                              const newTours = [...(formData.tours || [])];
                              newTours[index].title = e.target.value;
                              setFormData({ ...formData, tours: newTours });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Título del tour"
                          />
                          <input
                            type="text"
                            value={tour.duration}
                            onChange={(e) => {
                              const newTours = [...(formData.tours || [])];
                              newTours[index].duration = e.target.value;
                              setFormData({ ...formData, tours: newTours });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Duración"
                          />
                          <input
                            type="text"
                            value={tour.description || ""}
                            onChange={(e) => {
                              const newTours = [...(formData.tours || [])];
                              newTours[index].description = e.target.value;
                              setFormData({ ...formData, tours: newTours });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Descripción (opcional)"
                          />
                        </div>
                        <button
                          onClick={() => {
                            const newTours = formData.tours?.filter(
                              (_, i) => i !== index
                            );
                            setFormData({ ...formData, tours: newTours });
                          }}
                          className="text-red-500 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          tours: [
                            ...(formData.tours || []),
                            { title: "", duration: "" },
                          ],
                        });
                      }}
                      className="text-blue-500 text-sm"
                    >
                      + Agregar Tour
                    </button>
                  </div>

                  {/* Custom Tours */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Información Tours Personalizados
                    </label>
                    <textarea
                      value={formData.customTours?.description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customTours: {
                            ...formData.customTours,
                            description: e.target.value,
                          } as any,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2 mb-2"
                      rows={3}
                      placeholder="Descripción de tours personalizados"
                    />
                    <input
                      type="text"
                      value={formData.customTours?.minimum || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customTours: {
                            ...formData.customTours,
                            minimum: e.target.value,
                          } as any,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="Mínimo de pasajeros"
                    />
                  </div>

                  {/* Carousel Images */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Imágenes del Carousel
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {(formData.carouselImages || []).map((img, index) => (
                        <div key={index} className="relative">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-32 object-cover rounded border"
                          />
                          <button
                            onClick={() => {
                              const newImages = formData.carouselImages?.filter(
                                (_, i) => i !== index
                              );
                              setFormData({
                                ...formData,
                                carouselImages: newImages,
                              });
                            }}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                          >
                            <FiX className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <label className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer inline-block">
                      <FiUpload /> Agregar Imagen al Carousel
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(
                              file,
                              "carousel",
                              formData.id || selectedDestino || undefined
                            );
                          }
                        }}
                      />
                    </label>
                  </div>

                  {/* Recommended Destinos */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Destinos Recomendados
                    </label>
                    {(formData.recommendedDestinos || []).map((dest, index) => (
                      <div key={index} className="mb-4 p-4 border rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                          <input
                            type="text"
                            value={dest.title}
                            onChange={(e) => {
                              const newDests = [...(formData.recommendedDestinos || [])];
                              newDests[index].title = e.target.value;
                              setFormData({
                                ...formData,
                                recommendedDestinos: newDests,
                              });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Título"
                          />
                          <input
                            type="text"
                            value={dest.href}
                            onChange={(e) => {
                              const newDests = [...(formData.recommendedDestinos || [])];
                              newDests[index].href = e.target.value;
                              setFormData({
                                ...formData,
                                recommendedDestinos: newDests,
                              });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="/destinos/..."
                          />
                          <input
                            type="text"
                            value={dest.image}
                            onChange={(e) => {
                              const newDests = [...(formData.recommendedDestinos || [])];
                              newDests[index].image = e.target.value;
                              setFormData({
                                ...formData,
                                recommendedDestinos: newDests,
                              });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Ruta de imagen"
                          />
                          <input
                            type="text"
                            value={dest.alt}
                            onChange={(e) => {
                              const newDests = [...(formData.recommendedDestinos || [])];
                              newDests[index].alt = e.target.value;
                              setFormData({
                                ...formData,
                                recommendedDestinos: newDests,
                              });
                            }}
                            className="border rounded-lg px-3 py-2"
                            placeholder="Alt text"
                          />
                        </div>
                        <button
                          onClick={() => {
                            const newDests = formData.recommendedDestinos?.filter(
                              (_, i) => i !== index
                            );
                            setFormData({
                              ...formData,
                              recommendedDestinos: newDests,
                            });
                          }}
                          className="text-red-500 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          recommendedDestinos: [
                            ...(formData.recommendedDestinos || []),
                            { title: "", href: "", image: "", alt: "" },
                          ],
                        });
                      }}
                      className="text-blue-500 text-sm"
                    >
                      + Agregar Destino Recomendado
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

