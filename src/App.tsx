import { useEffect, useState } from "react";
import "./App.css";
import { List, ListItem } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface RepositoryObject {
  name: string;
  url: string;
  html_url: string;
  languages_url: string;
  contents_url: string
}



function App() {
  const [repositoryData, setRepositoryData] = useState<RepositoryObject[] | null>(
    null
  );

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("users/runraga/repos", { signal: controller.signal })
      .then((res) => {
        setRepositoryData(res.data);
      });
  }, []);

  return <List>

  {
    repositoryData?.map((repo, i) => <ListItem key={i}>{repo.name}</ListItem>)
  }
  </List>
}

export default App;
