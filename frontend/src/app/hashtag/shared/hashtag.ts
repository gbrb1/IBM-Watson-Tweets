export class Hashtag {
    id: string;
    nome: string;
    descricao: string;
    criadoEm?: Date;
}

export class ListHashtags{
    dados:Hashtag[];
    total:number;
}
