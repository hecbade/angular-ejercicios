export const EJERCICIOS = [
  {
    ruta: 'ejercicio-01',
    titulo: 'Ejercicio 01',
    cargar: () => import('./ejercicio-01/ejercicio-01').then((m) => m.Ejercicio01),
  },
];
