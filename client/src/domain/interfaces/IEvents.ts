import { SafeStyle } from "@angular/platform-browser";

export interface IEvents{
    id: number,
    titulo: string,
    subtitulo: string,
    descricao: string,
    fotoPrincipal: SafeStyle,
    outrasFotos: any
}