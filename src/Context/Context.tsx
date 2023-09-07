import React, { useState, useEffect } from "react";
import { QuizInterfaceContext, verbinterface } from "../Types/ContexTypes";
import verbs from "../Data/verbs.json";

export const AppContext = React.createContext<QuizInterfaceContext | null>(
  null
);

export interface props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<props> = ({ children }) => {
  const [anotherVerb, setAnotherVerb] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isIrregularVerb, setIsIrregularVerb] = useState<boolean | undefined >();
  const [verb, setVerb] = useState<verbinterface>({
    base: "",
    past: "",
    pastParticiple: "",
  })
  const [sortVerb, setSortVerb] = useState<any>({});
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>();
  const [word, setWord] = useState("");

  useEffect(() => {
    setSortVerb(verbs[Math.floor(Math.random() * verbs.length)]);
    setAnotherVerb(false);
    setIsCorrect(false);
  }, [anotherVerb]);


  useEffect(() => {
    setIsCorrect(false);
    setWord("");
  }, [isIrregularVerb]);



  const handlerAnotherVerb = () => {
    setAnotherVerb(true);
    setWord("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setWord(newValue);
    newValue.length === 0 ? setDisabled(true) : setDisabled(false);
  };

  const handleInputQuiz = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const inputWord = (e.target as HTMLInputElement).value.toLowerCase();
    const isCorrectW = inputWord === sortVerb?.past || (Array.isArray(sortVerb?.past) && sortVerb?.past.includes(inputWord));
    setIsCorrect(isCorrectW);
    setWord(inputWord);
  };

  const handleSearchWord = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const isIrregular = verbs.find((a) => {
      const baseMatch = Array.isArray(a.base) ? a.base.includes(word) : a.base === word;
      const pastMatch = Array.isArray(a.past) ? a.past.includes(word) : a.past === word;
      const participleMatch = Array.isArray(a.pastParticiple) ? a.pastParticiple.includes(word) : a.pastParticiple === word;
    
      return baseMatch || pastMatch || participleMatch;
    });
    
    if (isIrregular === undefined) {
      setIsIrregularVerb(false);
    } else {
      setVerb(isIrregular)
      setIsIrregularVerb(true);
    }
    setWord("");
  };

  return (
    <AppContext.Provider
      value={{
        disabled,
        isIrregularVerb,
        verb,
        sortVerb,
        word,
        isCorrect,
        setWord,
        handleInputChange,
        handleInputQuiz,
        handlerAnotherVerb,
        handleSearchWord,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
