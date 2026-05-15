// Directorio del Cabildo Municipal de Soyopa, administración 2024-2027.
//
// Pendiente: nombres de regidores y síndico procurador 2024-2027 se
// completarán cuando el cliente proporcione el directorio oficial. Por
// ahora sólo se publica el dato verificado de la Presidencia Municipal.

export const cabildo = [
  {
    id: 'presidenta',
    tipo: 'presidente',
    orden: 1,
    nombre: 'C. Paulette Encinas Miranda',
    cargo: 'Presidenta Municipal',
    administracion: '2024-2027',
    partido: 'Movimiento Ciudadano',
    suplente: null,
    comisiones: [],
    bio: 'Presidenta Municipal Constitucional del Gobierno Municipal de Soyopa, Sonora.',
    email: 'paulette.alcaldesa2024@gmail.com',
    telefono: null,
    foto: null,
    iniciales: 'PE',
  },
];

export const presidente = cabildo.find((m) => m.tipo === 'presidente');
export const sindica = null;
export const regidores = [];
export const dif = null;

export default cabildo;
