export type Usuario = {
    id: number;
    nome: string;
    email: string;
};

export type RespostaLogin ={
    acessoToken: string;
    user: Usuario;
}