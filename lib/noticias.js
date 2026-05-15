export const categoriasNoticias = [
  "Obras Públicas",
  "Servicios Públicos",
  "Desarrollo Social",
  "Cultura",
  "Salud",
  "Educación",
  "Seguridad",
  "Turismo",
];

export const categoriasComunicados = [
  "Tesorería",
  "Secretaría",
  "Aviso Oficial",
  "Convocatoria",
];

export const noticias = [
  {
    slug: "mantenimiento-puente-pango",
    titulo: "Renovación del soporte del Puente Pango",
    extracto:
      "El H. Ayuntamiento realizó el cambio del soporte principal del Pango en la cabecera municipal, sustituyendo la estructura de madera deteriorada por una más resistente.",
    categoria: "Obras Públicas",
    fecha: "2026-04-15",
    autor: "Dirección de Obras Públicas",
    imagen: "/images/soyopa/puente-colgante.jpg",
    contenido:
      "El H. Ayuntamiento realizó el cambio del soporte principal del Pango en la cabecera municipal, sustituyendo la estructura de madera deteriorada por una más resistente.\n\nEsta obra forma parte del compromiso de la Administración 2024-2027 de mantener en condiciones óptimas la infraestructura peatonal que conecta a las comunidades del municipio sobre el Río Yaqui.",
  },
  {
    slug: "agua-potable-rebeico",
    titulo: "Instalan sistema de agua potable en escuela de Rebeico",
    extracto:
      "La administración municipal coordinó la instalación del sistema de agua potable en la escuela primaria Gral. Pesquería de la comunidad de Rebeico, beneficiando a la comunidad educativa.",
    categoria: "Servicios Públicos",
    fecha: "2026-03-20",
    autor: "Gobierno Municipal de Soyopa",
    imagen: "/images/soyopa/rio-yaqui-panoramica.jpg",
    contenido:
      "La administración municipal coordinó la instalación del sistema de agua potable en la escuela primaria Gral. Pesquería de la comunidad de Rebeico, beneficiando a la comunidad educativa.\n\nCon esta acción, las y los estudiantes de Rebeico cuentan con un servicio básico fundamental para su jornada escolar, reforzando el compromiso del H. Ayuntamiento con la educación y el bienestar de las comunidades del municipio.",
  },
  {
    slug: "entrega-material-coves",
    titulo: "Entrega de materiales del programa COVES a 29 familias",
    extracto:
      "En coordinación con la Comisión de Vivienda del Estado de Sonora (COVES), el H. Ayuntamiento entregó láminas, cemento, impermeabilizante y tinacos a 29 familias del municipio.",
    categoria: "Desarrollo Social",
    fecha: "2026-02-28",
    autor: "Gobierno Municipal de Soyopa",
    imagen: "/images/soyopa/cerro-reflejo.jpg",
    contenido:
      "En coordinación con la Comisión de Vivienda del Estado de Sonora (COVES), el H. Ayuntamiento entregó láminas, cemento, impermeabilizante y tinacos a 29 familias del municipio, reforzando el programa de Mejoramiento de Vivienda.\n\nLa entrega beneficia a familias de la cabecera y las comunidades del municipio, contribuyendo a mejorar las condiciones de sus viviendas y a fortalecer el bienestar familiar.",
  },
];

export const comunicados = [
  {
    slug: "calendario-pago-predial-2026",
    titulo: "Calendario de pago del impuesto predial 2026",
    extracto:
      "Se informan las fechas y modalidades para el pago oportuno del predial municipal con descuentos por pronto pago.",
    categoria: "Tesorería",
    fecha: "2026-01-08",
    autor: "Tesorería Municipal",
    imagen: null,
    contenido:
      "La Tesorería Municipal informa a la ciudadanía sobre el calendario de pago del impuesto predial correspondiente al ejercicio 2026. Los descuentos por pronto pago aplicarán durante los meses de enero (15%), febrero (10%) y marzo (5%).\n\nEl pago puede realizarse en la oficina de Tesorería del Palacio Municipal en horario de atención de lunes a viernes de 8:00 a 15:00 horas.",
  },
  {
    slug: "horario-especial-semana-santa",
    titulo: "Horario especial de oficinas durante Semana Santa",
    extracto:
      "Las oficinas municipales ajustarán su horario de atención durante el periodo de Semana Santa.",
    categoria: "Aviso Oficial",
    fecha: "2026-03-25",
    autor: "Secretaría del Ayuntamiento",
    imagen: null,
    contenido:
      "Por motivo de las celebraciones de Semana Santa, las oficinas administrativas del Gobierno Municipal de Soyopa ajustarán su horario de atención.\n\nLos servicios de seguridad pública, protección civil y servicios urgentes operarán con normalidad durante todo el periodo. Las oficinas regulares retomarán su horario habitual una vez concluido el receso.",
  },
];

export function getNoticiaPorSlug(slug) {
  return (
    noticias.find((n) => n.slug === slug) ||
    comunicados.find((c) => c.slug === slug) ||
    null
  );
}

export function getNoticiasRecientes(limit = 3) {
  return [...noticias]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, limit);
}

export function getNoticiasRelacionadas(slugActual, limit = 3) {
  return noticias
    .filter((n) => n.slug !== slugActual)
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, limit);
}

const noticiasModule = { noticias, comunicados, getNoticiaPorSlug, getNoticiasRecientes, getNoticiasRelacionadas };
export default noticiasModule;
