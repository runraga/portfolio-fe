import { Box } from "@chakra-ui/react";
import AboutMe from "./components/AboutMe";
import Details from "./components/Details";
import ProjectSection from "./components/ProjectSection";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <Box margin={5} maxWidth="1200px">
      <Details />
      <AboutMe />
      <ProjectSection />
    </Box>
  );
}

export default App;
