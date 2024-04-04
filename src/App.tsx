import { Box, Grid, GridItem } from "@chakra-ui/react";
import useRepos from "./hooks/useRepos";
import ProjectCard from "./components/ProjectCard";


function App() {
  const { data } = useRepos();

  const breakpoints = {
    base: `"nav" " main"`,
    lg: `"nav nav" "aside main"`,
  };
  const columnWidths = {
    base: "1fr",
    lg: "200px 1fr",
  };
  return (
    <>
      <Grid templateAreas={breakpoints} templateColumns={columnWidths}>
        <GridItem area="main">
          <Box paddingLeft={5}>
            {data.map((repo) => {
              return <ProjectCard repo={repo} key={repo.id} />;
            })}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
