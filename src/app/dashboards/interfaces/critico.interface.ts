export interface Critico {
  id: number,
  folio: number,
  parte: string,
  ruta: string,
  fecha: string,
  cantidad_solicitada: number,
  cantidad_surtida: number,
  cantidad_recibida: number,
  cantidad_pendiente: number,
  color?: string,
}
