import { Card, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import useRepos from "../hooks/useRepos";
import headingSizes from "./HeadingSizes";

const ProjectSection = () => {
  const { data } = useRepos();
  return (
    <>
      <Card
        // maxWidth="800px" 
        margin={5}
        paddingTop={3}
        borderRadius={10}
      >
        <Heading textAlign={"center"} size={headingSizes.h1}>Projects</Heading>
        <SimpleGrid
          // templateAreas={breakpoints}
          // templateColumns={columnWidths}
          columns={{ lg: 2, sm: 1 }}
        >
          {data.map((repo) => {
            return (
              <GridItem>
                <ProjectCard repo={repo} key={repo.id} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Card>
    </>
  );
};
export default ProjectSection;
