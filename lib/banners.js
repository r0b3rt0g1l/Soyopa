import { getNoticiasRecientes } from "@/lib/noticias";
import { getNoticiaImageByCategoria } from "@/lib/unsplashImages";

function pickImage(noticia) {
  if (noticia.imagen) {
    return { src: noticia.imagen, alt: noticia.titulo };
  }
  const img = getNoticiaImageByCategoria(noticia.categoria);
  return { src: img.src, alt: img.alt };
}

export const bannersUnificados = getNoticiasRecientes(4).map((n) => {
  const img = pickImage(n);
  return {
    id: n.slug,
    tipo: "noticia",
    titulo: n.titulo,
    resumen: n.extracto,
    imagen: img.src,
    imagenAlt: img.alt,
    link: `/acciones-de-gobierno/noticias/${n.slug}`,
    fecha: n.fecha,
  };
});
