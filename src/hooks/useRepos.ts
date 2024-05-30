import useData from "./useData";

export interface ReadmeObject {
  title: string;
  description: string;
  languages: string;
  overview: string;
  future: string;
  readme: string;
}

export interface RepositoryObject {
  name: string;
  url: string;
  html_url: string;
  languages_url: string;
  contents_url: string;
  id: number;
  readme: ReadmeObject;
}
export interface ReadmeObject {
  content: string;
}

const useRepos = () => useData<RepositoryObject>("/portfolio-be/");

export default useRepos;
