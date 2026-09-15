import { LineaTicket } from "./model";

export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasana",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
  {
    producto: {
      nombre: "Libro",
      precio: 15,
      tipoIva: "superreducidoB",
    },
    cantidad: 1,
  },
  {
    producto: {
      nombre: "Entrada de cine",
      precio: 8,
      tipoIva: "reducido",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Curso online",
      precio: 30,
      tipoIva: "sinIva",
    },
    cantidad: 1,
  },
];

