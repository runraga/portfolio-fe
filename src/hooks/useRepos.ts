import useData from "./useData";

export interface RepositoryObject {
  name: string;
  url: string;
  html_url: string;
  languages_url: string;
  contents_url: string;
  id: number;
}
export interface ReadmeObject {
  content: string
}

const useRepos = () => useData<RepositoryObject>("users/runraga/repos");

//could do another useData hook call for each repo returned



export default useRepos;
