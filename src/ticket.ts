import {
  LineaTicket,
  ResultadoLineaTicket,
  TicketFinal,
} from "./model";
import {
  acumulaIvaEnDesglose,
  calculaImporteIva,
  creaDesgloseIvaInicial,
  redondeaADosDecimales,
} from "./ticket.helpers";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineas: ResultadoLineaTicket[] = [];
  const desgloseIva = creaDesgloseIvaInicial();

  let totalSinIva = 0;
  let totalIva = 0;

  for (let i = 0; i < lineasTicket.length; i++) {
    const lineaTicket = lineasTicket[i];
    const precioSinIva = redondeaADosDecimales(
      lineaTicket.producto.precio * lineaTicket.cantidad
    );
    const importeIva = calculaImporteIva(
      precioSinIva,
      lineaTicket.producto.tipoIva
    );
    const precioConIva = redondeaADosDecimales(precioSinIva + importeIva);

    lineas[i] = {
      nombre: lineaTicket.producto.nombre,
      cantidad: lineaTicket.cantidad,
      precionSinIva: precioSinIva,
      tipoIva: lineaTicket.producto.tipoIva,
      precioConIva,
    };

    totalSinIva = redondeaADosDecimales(totalSinIva + precioSinIva);
    totalIva = redondeaADosDecimales(totalIva + importeIva);
    acumulaIvaEnDesglose(
      desgloseIva,
      lineaTicket.producto.tipoIva,
      importeIva
    );
  }

  return {
    lineas,
    total: {
      totalSinIva,
      totalConIva: redondeaADosDecimales(totalSinIva + totalIva),
      totalIva,
    },
    desgloseIva,
  };
};

