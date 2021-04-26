export class Hashtag { //todas as interfaces do projeto
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

export class Document {
    score: number;
    label: string;
}

export class Sentiment {
    document: Document;
}

export class Keyword {
    text: string;
    relevance: number;
    count: number;
}

export class Disambiguation {
    subtype: string[];
    name: string;
    dbpedia_resource: string;
}

export class Entity {
    type: string;
    text: string;
    relevance: number;
    count: number;
    disambiguation: Disambiguation;
}

export class Concept {
    text: string;
    relevance: number;
    dbpedia_resource: string;
}

export class Category {
    score: number;
    label: string;
}

export class WatsonObject {
    usage: Usage;
    sentiment: Sentiment;
    language: string;
    keywords: Keyword[];
   
}



