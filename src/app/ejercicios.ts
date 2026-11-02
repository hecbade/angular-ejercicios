export const EJERCICIOS = [
  {
    ruta: 'ejercicio-01',
    titulo: 'Ejercicio 01',
    cargar: () => import('./ejercicio-01/ejercicio-01').then((m) => m.Ejercicio01),
  },
  {
    ruta: 'ejercicio-19',
    titulo: 'Ejercicio 19',
    cargar: () => import('./ejercicio-19/ejercicio-19').then((m) => m.Ejercicio19),
  },
];
