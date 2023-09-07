import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Quiz from "./Pages/Quiz";
import Layout from "./Pages/Index";
import ListSearch from "./Pages/ListSearch";
import "./Index.css";

function App() {
  return (
    <Flex
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      backgroundColor="#1450A3"
    >
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="search" element={<ListSearch />} />
      </Routes>
    </Flex>
  );
}

export default App;
