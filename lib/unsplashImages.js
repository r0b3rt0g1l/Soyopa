import { getStockImage } from "@/lib/stockImage";

// Placeholders genéricos por categoría para noticias sin imagen propia.
// Cuando una noticia define `imagen`, esa fuente se usa directamente.
// Estas imágenes se obtienen por tags desde Lorem Flickr y sirven sólo
// como fallback institucional.

const SM = { w: 900, h: 600 };

function img(tags, size, alt) {
  return {
    src: getStockImage(tags, size.w, size.h),
    alt,
    credit: "Lorem Flickr · Tags: " + tags,
  };
}

export const noticiaPlaceholderImages = {
  "obras-publicas": img(
    "mexico,road,construction,rural,machinery",
    SM,
    "Maquinaria trabajando en obras publicas de un camino rural",
  ),
  cultura: img(
    "mexico,culture,traditional,celebration,folklore",
    SM,
    "Celebracion cultural con vestimenta tradicional mexicana",
  ),
  salud: img(
    "mexico,health,clinic,community,vaccination",
    SM,
    "Personal de salud durante jornada de vacunacion comunitaria",
  ),
  educacion: img(
    "mexico,school,classroom,students,education",
    SM,
    "Estudiantes en aula durante actividad escolar",
  ),
  seguridad: img(
    "mexico,rural,road,sierra,landscape",
    SM,
    "Camino rural en zona montanosa",
  ),
  turismo: img(
    "sonora,sierra,mexico,landscape,nature",
    SM,
    "Sierra del norte de Mexico con vegetacion caracteristica",
  ),
  gobierno: img(
    "mexico,government,municipal,building,colonial",
    SM,
    "Edificio institucional historico mexicano",
  ),
  default: img(
    "mexico,municipal,village,colonial,sierra",
    SM,
    "Imagen institucional del Gobierno Municipal de Soyopa",
  ),
};

export function getNoticiaImageByCategoria(categoria = "") {
  const key = categoria
    .toLowerCase()
    .replace(/í/g, "i")
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u");
  if (key.includes("obra")) return noticiaPlaceholderImages["obras-publicas"];
  if (key.includes("cultura")) return noticiaPlaceholderImages.cultura;
  if (key.includes("salud")) return noticiaPlaceholderImages.salud;
  if (key.includes("educa")) return noticiaPlaceholderImages.educacion;
  if (key.includes("segur")) return noticiaPlaceholderImages.seguridad;
  if (key.includes("turismo")) return noticiaPlaceholderImages.turismo;
  if (
    key.includes("tesor") ||
    key.includes("convocatoria") ||
    key.includes("aviso") ||
    key.includes("secretar")
  )
    return noticiaPlaceholderImages.gobierno;
  return noticiaPlaceholderImages.default;
}

export default {
  noticiaPlaceholderImages,
  getNoticiaImageByCategoria,
};
