import { TipoIva, TotalPorTipoIva } from "./model";

export const redondeaADosDecimales = (cantidad: number): number =>
  Number(cantidad.toFixed(2));

export const obtenerPorcentajeIva = (tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      return 21;
    case "reducido":
      return 10;
    case "superreducidoA":
      return 5;
    case "superreducidoB":
      return 4;
    case "superreducidoC":
    case "sinIva":
      return 0;
  }
};

export const calculaImporteIva = (
  precioSinIva: number,
  tipoIva: TipoIva
): number => {
  const porcentajeIva = obtenerPorcentajeIva(tipoIva);
  return redondeaADosDecimales((precioSinIva * porcentajeIva) / 100);
};

export const creaDesgloseIvaInicial = (): TotalPorTipoIva[] => [
  {
    tipoIva: "general",
    cuantia: 0,
  },
  {
    tipoIva: "reducido",
    cuantia: 0,
  },
  {
    tipoIva: "superreducidoA",
    cuantia: 0,
  },
  {
    tipoIva: "superreducidoB",
    cuantia: 0,
  },
  {
    tipoIva: "superreducidoC",
    cuantia: 0,
  },
  {
    tipoIva: "sinIva",
    cuantia: 0,
  },
];

export const acumulaIvaEnDesglose = (
  desgloseIva: TotalPorTipoIva[],
  tipoIva: TipoIva,
  importeIva: number
): void => {
  for (let i = 0; i < desgloseIva.length; i++) {
    if (desgloseIva[i].tipoIva === tipoIva) {
      desgloseIva[i].cuantia = redondeaADosDecimales(
        desgloseIva[i].cuantia + importeIva
      );
    }
  }
};

