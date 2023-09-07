export interface verbinterface{
base: string | string[] | undefined,
past: string | string[] | undefined,
pastParticiple: string | string[] | undefined,

}

export  interface QuizInterfaceContext{
    word: string,
    disabled: boolean,
    isIrregularVerb: boolean | undefined,
    sortVerb: any,
    verb: verbinterface,
    isCorrect: boolean | undefined,
    handleSearchWord: (e: React.FormEvent<HTMLFormElement>) => void,
    handlerAnotherVerb: () => void,
    handleInputChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    handleInputQuiz:(e:React.KeyboardEvent<HTMLInputElement>) => void;
    setWord: React.Dispatch<React.SetStateAction<string>>,
    children?: any,
}

export interface TableProps{
    word?: string,
    setWord?: React.Dispatch<React.SetStateAction<string>>,
    verb: verbinterface , 
    handleInputQuiz?: (e:React.KeyboardEvent<HTMLInputElement>) => void | undefined ,
}