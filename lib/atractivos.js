export const atractivos = [
  {
    slug: 'rio-yaqui',
    nombre: 'Río Yaqui',
    tipo: 'Naturaleza',
    ubicacion: 'Cruza el municipio de Soyopa',
    descripcionCorta: 'Principal cuerpo de agua del municipio, ideal para pesca deportiva, kayak y contemplación.',
    descripcionLarga: 'Principal cuerpo de agua del municipio, ideal para pesca deportiva, kayak y contemplación. Conecta Soyopa con la Presa El Novillo y forma parte del sistema hidrológico más importante de Sonora.',
    portada: '/images/soyopa/rio-yaqui-panoramica.jpg',
    galeria: [
      { src: '/images/soyopa/rio-yaqui-panoramica.jpg', alt: 'Panorámica del Río Yaqui a su paso por Soyopa' },
      { src: '/images/soyopa/rio-montanas.jpg', alt: 'Río Yaqui entre montañas serranas' },
      { src: '/images/soyopa/canon-soyopa.jpg', alt: 'Cañón del Río Yaqui en Soyopa' },
    ],
    coordenadas: { lat: 28.7611, lon: -109.6394 },
    horario: 'Acceso libre',
    destacado: true,
  },
  {
    slug: 'presa-el-novillo',
    nombre: "Presa Plutarco Elías Calles 'El Novillo'",
    tipo: 'Patrimonio hidráulico',
    ubicacion: 'Comunidad de El Novillo, municipio de Soyopa',
    descripcionCorta: 'Una de las obras hidráulicas más importantes de México, con cortina de 118 metros y capacidad de 3,000 millones de m³.',
    descripcionLarga: "Una de las obras hidráulicas más importantes de México. Construida entre 1959 y 1964, con cortina de 118 metros y capacidad de 3,000 millones de m³. Recibe las aguas de los ríos Yaqui y Moctezuma. Pesca de lobina, tilapia y bagre.",
    portada: '/images/soyopa/rio-montanas.jpg',
    galeria: [
      { src: '/images/soyopa/rio-montanas.jpg', alt: 'Vista del embalse de la Presa El Novillo' },
      { src: '/images/soyopa/rio-yaqui-panoramica.jpg', alt: 'Aguas del Río Yaqui que alimentan El Novillo' },
      { src: '/images/soyopa/cerro-reflejo.jpg', alt: 'Cerros reflejados en el embalse' },
    ],
    coordenadas: { lat: 28.9667, lon: -109.6333 },
    horario: 'Acceso libre · Pesca con permiso',
    destacado: true,
  },
  {
    slug: 'puente-colgante-pango',
    nombre: 'Puente Colgante (Pango)',
    tipo: 'Patrimonio',
    ubicacion: 'Cabecera municipal de Soyopa',
    descripcionCorta: 'Cruce peatonal histórico sobre el Río Yaqui y atractivo fotográfico característico del municipio.',
    descripcionLarga: 'Cruce peatonal histórico sobre el Río Yaqui. Punto de conexión entre comunidades y atractivo fotográfico característico del municipio.',
    portada: '/images/soyopa/puente-colgante.jpg',
    galeria: [
      { src: '/images/soyopa/puente-colgante.jpg', alt: 'Puente colgante peatonal sobre el Río Yaqui' },
      { src: '/images/soyopa/rio-yaqui-panoramica.jpg', alt: 'Río Yaqui visto desde el puente colgante' },
      { src: '/images/soyopa/canon-soyopa.jpg', alt: 'Cañón del Río Yaqui' },
    ],
    coordenadas: { lat: 28.7611, lon: -109.6394 },
    horario: 'Acceso libre',
    destacado: true,
  },
  {
    slug: 'templo-san-francisco-javier',
    nombre: 'Templo de San Francisco Javier',
    tipo: 'Patrimonio religioso',
    ubicacion: 'Centro de Soyopa',
    descripcionCorta: 'Edificación religiosa que custodia la herencia evangelizadora jesuita iniciada hacia 1660.',
    descripcionLarga: 'Edificación religiosa que custodia la herencia evangelizadora jesuita iniciada hacia 1660 en estas tierras ópatas y yaquis.',
    portada: '/images/soyopa/templo-principal.jpg',
    galeria: [
      { src: '/images/soyopa/templo-principal.jpg', alt: 'Templo de San Francisco Javier de Soyopa' },
      { src: '/images/soyopa/capilla.jpg', alt: 'Capilla histórica del municipio' },
      { src: '/images/soyopa/estatuas-mineros.jpg', alt: 'Patrimonio histórico de Soyopa' },
    ],
    coordenadas: { lat: 28.7611, lon: -109.6394 },
    horario: 'Acceso al templo según horario de cultos',
    destacado: true,
  },
  {
    slug: 'monumento-mineros',
    nombre: 'Monumento a los Mineros',
    tipo: 'Patrimonio histórico',
    ubicacion: 'Cabecera municipal de Soyopa',
    descripcionCorta: 'Estatuas de bronce que rinden tributo al oficio minero que forjó la identidad de Soyopa entre 1690 y 1880.',
    descripcionLarga: 'Estatuas de bronce que rinden tributo al oficio minero que forjó la identidad de Soyopa entre 1690 y 1880, época del auge de la plata en la región.',
    portada: '/images/soyopa/estatuas-mineros.jpg',
    galeria: [
      { src: '/images/soyopa/estatuas-mineros.jpg', alt: 'Monumento a los mineros en Soyopa' },
      { src: '/images/soyopa/templo-principal.jpg', alt: 'Centro histórico de Soyopa' },
      { src: '/images/soyopa/capilla.jpg', alt: 'Patrimonio histórico colonial' },
    ],
    coordenadas: { lat: 28.7611, lon: -109.6394 },
    horario: 'Acceso libre las 24 horas',
    destacado: true,
  },
  {
    slug: 'canon-soyopa',
    nombre: 'Cañón de Soyopa',
    tipo: 'Naturaleza',
    ubicacion: 'Municipio de Soyopa',
    descripcionCorta: 'Vista panorámica del cañón donde el Río Yaqui atraviesa la sierra.',
    descripcionLarga: 'Vista panorámica del cañón donde el Río Yaqui atraviesa la sierra. Paisaje serrano con farallones rocosos y vegetación ribereña endémica.',
    portada: '/images/soyopa/canon-soyopa.jpg',
    galeria: [
      { src: '/images/soyopa/canon-soyopa.jpg', alt: 'Cañón de Soyopa con el Río Yaqui' },
      { src: '/images/soyopa/cerro-reflejo.jpg', alt: 'Cerros reflejados en el río' },
      { src: '/images/soyopa/rio-montanas.jpg', alt: 'Río Yaqui y serranía' },
    ],
    coordenadas: { lat: 28.78, lon: -109.62 },
    horario: 'Acceso libre',
    destacado: true,
  },
];

export function getAtractivoPorSlug(slug) {
  return atractivos.find((a) => a.slug === slug) || null;
}

export function getAtractivosCercanos(slugActual, limit = 3) {
  return atractivos
    .filter((a) => a.slug !== slugActual)
    .slice(0, limit);
}

export const gastronomia = {
  platillos: [
    'Pescado del Río Yaqui',
    'Lobina, tilapia y bagre',
    'Carne asada serrana',
    'Tortillas de harina',
    'Caldo de queso',
  ],
  dulces: [
    'Conservas de la sierra',
    'Dulce de leche',
    'Atole de pinole',
  ],
};

export const artesanias = [
  'Artesanía en madera regional',
  'Cuero curtido',
  'Tejidos tradicionales',
];

export default atractivos;
