import { useContext } from "react";
import {
    Button,
    Input,
    Flex,
    Box,
    FormControl,
    Heading,
    Text
  } from "@chakra-ui/react";
import Table2 from "../Components/Table";
import { QuizInterfaceContext } from "../Types/ContexTypes";
import { AppContext } from "../Context/Context";


const ListSearch = () => {

    const { disabled, word, handleInputChange, isIrregularVerb, verb, handleSearchWord } = useContext(AppContext) as QuizInterfaceContext;



    return(
        <>
        <Flex h='100vh' flexDirection='column' alignItems='center'  position='absolute' top='150px'>
        <Heading as='h1' size='4xl' noOfLines={1} margin='30px auto' padding='30px' color="#FFC436">¿Is it an irregular verb?</Heading>
        <Box  display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <form onSubmit={handleSearchWord} >
        <FormControl display='flex' flexDirection='column'>
        <Input placeholder='Search the verb' size='md'  type="text" value={word} onChange={(e) => handleInputChange(e)} border='2px  solid #FFFFFF'/>
        <Button backgroundColor='#FFC436' color='#FFFFFF' size='sm' isDisabled={disabled} type="submit" margin='10px auto' >Search</Button>
        </FormControl>
        </form >
        </Box>
        <Box display='flex' alignItems='baseline'>
        <div>{isIrregularVerb ? <Table2 verb={verb}/> : (isIrregularVerb !== undefined && <Text color='#FFFFFF'>NOPE</Text>)}</div>
        </Box>
        </Flex>
        </>
    )
}

export default ListSearch;