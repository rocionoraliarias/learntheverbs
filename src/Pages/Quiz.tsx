import { useContext } from "react";
import { Button,Flex, Heading, Alert, AlertIcon } from "@chakra-ui/react";

import Table2 from "../Components/Table";
import { QuizInterfaceContext } from "../Types/ContexTypes";
import { AppContext } from "../Context/Context";


const Quiz = () => {
  const { isCorrect, sortVerb, word, setWord, handlerAnotherVerb, handleInputQuiz } =
    useContext(AppContext) as QuizInterfaceContext;
  return (
    <>
      <Flex 
        flexDirection="column"
        alignItems="center"
        position="absolute"
        top="150px"
      >
        <Heading
          as="h1"
          size="4xl"
          margin="30px auto"
          padding="30px"
          color="#FFC436"
        >
          ¿Which is the correct form?
        </Heading>
        <Table2
          verb={sortVerb}
          handleInputQuiz={handleInputQuiz}
          setWord={setWord}
          word={word}
        />
          {isCorrect && (
        <div>
          <Alert status="success" variant="solid" backgroundColor='transparent' margin='10px'>
            <AlertIcon />
            ¡Correct!
          </Alert>
          <Button
            backgroundColor='#FFC436' 
            color='#FFFFFF' 
            size="sm"
            type="submit"
            margin="10px 20px"
            onClick={() => handlerAnotherVerb()}
          >
            Another verb
          </Button>
        </div>
      )}
      </Flex>
    </>
  );
};

export default Quiz;
