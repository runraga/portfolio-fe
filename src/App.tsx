import { Box } from "@chakra-ui/react";
import AboutMe from "./components/AboutMe";
import Details from "./components/Details";
import ProjectSection from "./components/ProjectSection";

function App() {
  

  // const breakpoints = {
  //   base: `"nav" " main"`,
  //   lg: `"nav nav" "aside main"`,
  // };
  // const columnWidths = {
  //   base: "1fr",
  //   lg: "1fr",
  // };
  return (
    <Box margin={5} width={{lg:"1000px",md:"750px", sm:"400px"}}>
        <Details />
        <AboutMe />
        <ProjectSection />
    </Box>
  );
}

export default App;
