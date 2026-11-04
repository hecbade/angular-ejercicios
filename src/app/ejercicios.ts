export const EJERCICIOS = [
  {
    ruta: 'ejercicio-01',
    titulo: 'Ejercicio 01',
    cargar: () => import('./ejercicio-01/ejercicio-01').then((m) => m.Ejercicio01),
  },
  {
    ruta: 'ejercicio-14',
    titulo: 'Ejercicio 14',
    cargar: () => import('./ejercicio-14/ejercicio-14').then((m) => m.Ejercicio14),
  },
  {
    ruta: 'ejercicio-17',
    titulo: 'Ejercicio 17',
    cargar: () => import('./ejercicio-17/ejercicio-17').then((m) => m.Ejercicio17),
  },
  {
    ruta: 'ejercicio-18',
    titulo: 'Ejercicio 18',
    cargar: () => import('./ejercicio-18/ejercicio-18').then((m) => m.Ejercicio18),
  },
  {
    ruta: 'ejercicio-19',
    titulo: 'Ejercicio 19',
    cargar: () => import('./ejercicio-19/ejercicio-19').then((m) => m.Ejercicio19),
  },
];
