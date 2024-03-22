import "./App.css";
import { List, ListItem } from "@chakra-ui/react";
import useRepos from "./hooks/useRepos";

function App() {
  const { data } = useRepos();

  return (
    <List>
      {data?.map((repo) => (
        <>
          <ListItem key={repo.id}>{repo.name}</ListItem>
          <ListItem key={repo.id + "readme"}>readme</ListItem>
        </>
      ))}
    </List>
  );
}

export default App;
