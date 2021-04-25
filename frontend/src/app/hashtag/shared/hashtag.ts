export class Hashtag {
    id: string;
    nome: string;
    descricao: string;
    criadoEm?: Date;
}

export class ListHashtags{
    dados: Hashtag[];
    total: number;
}

export class ListTweets {
    dados: any[];
    total: number;

}
