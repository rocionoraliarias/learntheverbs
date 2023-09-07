import React from "react";
import {
  Table,
  Tbody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Input,
} from "@chakra-ui/react";
import { TableProps } from "../Types/ContexTypes";

const Table2 = ({ verb, handleInputQuiz, word, setWord }: TableProps) => {

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th textAlign="center" color='#FFFFFF'>base</Th>
              <Th textAlign="center" color='#FFFFFF'>past</Th>
              <Th textAlign="center" color='#FFFFFF'>pastParticiple</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr borderRadius="10px">
              <Td
                background="#337CCF !important"
                color='#FFFFFF'
                borderColor="#337CCF !important"
                textAlign="center"
                minWidth="160px"
              >
                {verb?.base}
              </Td>
              <Td
                background="#337CCF !important"
                color='#FFFFFF' 
                borderColor="#337CCF !important"
                textAlign="center"
                minWidth="160px"
              >
                {handleInputQuiz ? (
                  <Input
                    placeholder="Past"
                    size="md"
                    type="text"
                    textAlign="center"
                    onKeyUp={(e) => handleInputQuiz(e)}
                    onChange={(e) => setWord && setWord(e.target.value)} 
                    borderColor="#141E46"
                    value={word}
                  />
                ) : (
                  Array.isArray(verb?.past) ?  verb?.past.map((a: string, index: number) => (
                    <p key={index}>{a}</p>
                  )) : verb?.past
                )}
              </Td>
              <Td
                background="#337CCF !important"
                color='#FFFFFF'
                borderColor="#337CCF !important"
                textAlign="center"
                minWidth="160px"
              >
                {Array.isArray(verb?.pastParticiple) ?  verb?.pastParticiple.map((a: string, index: number) => (
                  <p key={index}>{a}</p>
                )) : verb?.pastParticiple}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Table2;
