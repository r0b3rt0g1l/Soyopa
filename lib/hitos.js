// Hitos historicos del municipio de Soyopa.
// Fuente unica para componentes que los renderizan: ConoceSoyopa
// (intercalados con la narrativa) y LineaTiempo (scroll horizontal,
// componente legacy sin consumidor actual en el home).
//
// Las rutas de imagen apuntan a /public/images/soyopa/ (fotos oficiales
// proporcionadas por el municipio).

export const hitos = [
  {
    ano: "1538",
    titulo: "Álvar Núñez Cabeza de Vaca visita la región",
    descripcion:
      "El explorador español Álvar Núñez Cabeza de Vaca visita el territorio que hoy ocupa Soyopa, habitado por ópatas, pimas bajos y yaquis dedicados a la pesca y caza en las márgenes del Río Yaqui.",
    datoCurioso:
      "Cabeza de Vaca fue uno de los primeros europeos en recorrer el noroeste de la actual República Mexicana.",
    imagen: "/images/soyopa/rio-yaqui-panoramica.jpg",
    align: "left",
  },
  {
    ano: "1660",
    titulo: "Misión jesuita de San Francisco Javier",
    descripcion:
      "Hacia 1660 ya existía la misión jesuita de San Francisco Javier de Soyopa, parte del esfuerzo evangelizador de la Compañía de Jesús en territorio ópata y yaqui.",
    datoCurioso:
      "Las misiones jesuitas combinaron evangelización con preservación de lenguas y oficios indígenas.",
    imagen: "/images/soyopa/templo-principal.jpg",
    align: "left",
  },
  {
    ano: "1690",
    titulo: "Asentamiento español en Real Viejo",
    descripcion:
      "En 1690 los españoles se asentaron en Real Viejo tras el descubrimiento de una mina por Juan Fernández de la Gotera, iniciando el auge minero de la región.",
    datoCurioso:
      "La actividad minera marcaría la identidad económica de Soyopa durante casi dos siglos.",
    imagen: "/images/soyopa/estatuas-mineros.jpg",
    align: "left",
  },
  {
    ano: "1880",
    titulo: "Fin del auge minero de la plata",
    descripcion:
      "Hacia 1880 cierra el ciclo del auge minero de la plata en Soyopa, periodo que forjó la identidad de las comunidades mineras de la región.",
    datoCurioso:
      "El Monumento a los Mineros recuerda hoy aquel oficio que marcó dos siglos de historia local.",
    imagen: "/images/soyopa/cerro-reflejo.jpg",
    align: "right",
  },
  {
    ano: "1935",
    titulo: "Municipio libre del estado de Sonora",
    descripcion:
      "El 8 de mayo de 1935, Soyopa obtuvo su autonomía como municipio libre del estado de Sonora, consolidando su organización política y administrativa.",
    datoCurioso:
      "En 1937 el presidente Lázaro Cárdenas otorgó al municipio un ejido de 13,792 hectáreas.",
    imagen: "/images/soyopa/canon-soyopa.jpg",
    align: "left",
  },
  {
    ano: "2024",
    titulo: "Administración 2024-2027",
    descripcion:
      "Inicia la administración municipal 2024-2027 bajo el liderazgo de la C. Paulette Encinas Miranda, con un enfoque de cercanía ciudadana, transparencia y desarrollo de las comunidades.",
    datoCurioso:
      "Es la primera administración de Soyopa con presencia digital institucional completa.",
    imagen: "/images/soyopa/puente-colgante.jpg",
    align: "right",
  },
];

export function getHitoByYear(year) {
  return hitos.find((h) => h.ano === String(year)) ?? null;
}

export default hitos;
