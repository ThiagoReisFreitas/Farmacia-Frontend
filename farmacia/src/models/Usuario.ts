import Produto from "./Produto";

export default interface Usuario{
    id: number;
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
    fotoUsuario: string;
    produto: Produto | null;
}