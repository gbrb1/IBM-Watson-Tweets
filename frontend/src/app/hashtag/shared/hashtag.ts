export class Hashtag {
    id: string;
    nome: string;
    descricao: string;
    criadoEm?: Date;
}

export class ListHashtags {
    dados: Hashtag[];
    total: number;
}

export class ListTweets {
    dados: any[];
    total: number;

}


export class Usage {
    text_units: number;
    text_characters: number;
    features: number;
}

export class Keyword {
    text: string;
    relevance: number;
    count: number;
}

export class Concept {
    text: string;
    relevance: number;
    dbpedia_resource: string;
}

export class WatsonObject {
    usage: Usage;
    language: string;
    keywords: Keyword[];
    concepts: Concept[];
}




