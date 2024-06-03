import { Box } from "@chakra-ui/react";
import AboutMe from "./components/AboutMe";
import Details from "./components/Details";
import ProjectSection from "./components/ProjectSection";
import { useEffect } from "react";

function App() {
  useEffect(() => {
   document.title = "Portfolio";
  }, []);
  // const breakpoints = {
  //   base: `"nav" " main"`,
  //   lg: `"nav nav" "aside main"`,
  // };
  // const columnWidths = {
  //   base: "1fr",
  //   lg: "1fr",
  // };
  return (
    <Box margin={5}>
      <Details />
      <AboutMe />
      <ProjectSection />
    </Box>
  );
}

export default App;
