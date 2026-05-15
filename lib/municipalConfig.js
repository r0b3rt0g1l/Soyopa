export const municipalConfig = {
  identidad: {
    nombreCorto: 'Soyopa',
    nombreOficial: 'Gobierno Municipal de Soyopa',
    nombreCompleto: 'Gobierno Municipal de Soyopa, Sonora',
    estado: 'Sonora',
    pais: 'México',
    administracion: '2024-2027',
    lema: 'Tierra Caliente · Cuna del Río Yaqui',
    lemaOrigen: 'Significado en lengua yaqui',
    fundacion: {
      anio: 1660,
      texto: 'Misión jesuita de San Francisco Javier de Soyopa',
    },
    municipioLibre: '8 de mayo de 1935',
    patrono: 'San Miguel Arcángel',
    presidentaMunicipal: {
      nombre: 'C. Paulette Encinas Miranda',
      cargo: 'Presidenta Municipal',
      partido: 'Movimiento Ciudadano',
      correo: 'paulette.alcaldesa2024@gmail.com',
    },
  },

  datos: {
    superficieKm2: 1053,
    poblacion2020: 1464,
    altitudMedia: 320,
    coordenadas: {
      latStr: '28°45\'40"N',
      lonStr: '109°38\'22"O',
      lat: 28.7611,
      lon: -109.6394,
    },
    lada: '662',
    cp: '85640',
    fundadoresMencion: 'Asentamiento español en Real Viejo (1690) tras el descubrimiento de mina por Juan Fernández de la Gotera',
    primerContactoEuropeo: 'Álvar Núñez Cabeza de Vaca, 1538',
    ejido: {
      hectareas: 13792,
      anio: 1937,
      presidente: 'Lázaro Cárdenas',
    },
  },

  localidades: [
    { nombre: 'Soyopa', tipo: 'cabecera' },
    { nombre: 'El Llano Colorado', tipo: 'localidad' },
    { nombre: 'Rebeico', tipo: 'localidad' },
    { nombre: 'Rebeiquito', tipo: 'localidad' },
    { nombre: 'La Estrella', tipo: 'localidad' },
    { nombre: 'San Antonio de la Huerta', tipo: 'localidad' },
    { nombre: 'Tónichi', tipo: 'localidad' },
    { nombre: 'El Novillo', tipo: 'localidad' },
  ],

  contacto: {
    direccion: 'Benito Juárez #83, esquina 2 de Enero, Centro',
    cp: '85640',
    ciudad: 'Soyopa, Sonora',
    direccionCompleta: 'Benito Juárez #83, esquina 2 de Enero, Centro, C.P. 85640, Soyopa, Sonora',
    telefonos: ['(662) 212 02 27 ext 107'],
    email: 'soyopatransparencia@gmail.com',
    emailPresidenta: 'paulette.alcaldesa2024@gmail.com',
    horarios: 'Lunes a viernes, 8:00 - 15:00 hrs',
    unidadTransparencia: {
      titular: 'María del Rosario Martínez Urbalejo',
      correo: 'soyopatransparencia@gmail.com',
    },
  },

  redes: {
    facebook: null,
    instagram: null,
    twitter: null,
    youtube: null,
  },

  enlacesExternos: {
    transparenciaAyuntamiento: 'https://soyopa.transparenciasonora.org/',
    transparenciaAyuntamientoSevac: 'https://soyopa.transparenciasonora.org/',
    transparenciaAyuntamientoLeyes: 'https://soyopa.transparenciasonora.org/',
    transparenciaSonora: 'https://transparencia.sonora.gob.mx/',
    plataformaNacionalTransparencia: 'https://www.plataformadetransparencia.org.mx',
    avisoPrivacidadPdf: '/documentos/aviso-privacidad-soyopa.pdf',
  },

  paleta: {
    guinda: '#2C5F7F',
    guindaProfundo: '#1A3A4F',
    guindaSuave: '#3E7A9F',
    dorado: '#C8A165',
    doradoSuave: '#D7B98A',
    crema: '#F5EFE6',
    texto: '#1A1A1A',
    textoSecundario: '#4A4A4A',
    fondo: '#FAFAFA',
    borde: '#E5E5E5',
  },

  servicios: {
    web3FormsKey: '9ee5082d-184c-433f-9faf-ff601b9a945b',
    cloudinaryCloud: 'dtpxt4a2p',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://soyopa.vercel.app',
  },

  developer: {
    nombre: 'Northa Digital',
    anioActual: 2026,
  },
};

export default municipalConfig;
