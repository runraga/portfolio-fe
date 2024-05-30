import {
  Heading,
  Text,
  Card,
  HStack,
  Tooltip,
  Icon,
  Link,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { RepositoryObject } from "../hooks/useRepos";
import { FaPython, FaGithub, FaAws, FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiTypescript, SiTerraform } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import headingSizes from "./HeadingSizes";

interface Props {
  repo: RepositoryObject;
}

const ProjectCard = ({ repo }: Props) => {
  const languageIcon: { [key: string]: IconType } = {
    Python: FaPython,
    Terraform: SiTerraform,
    TypeScript: SiTypescript,
    JavaScript: IoLogoJavascript,
    SQL: BiLogoPostgresql,
    "GitHub Workflow": FaGithub,
    "Amazon Web Services": FaAws,
    React: FaReact,
  };
  const { html_url, readme } = repo;

  const languages = readme.languages.split("- ").slice(1);

  return (
    <Card
      // maxWidth="800px"
      margin={5}
      padding={3}
      borderRadius={10}
      
    >
      <Heading size={headingSizes.h2}>{readme.title}</Heading>

      <HStack marginY={1}>
        {languages.map((lang) => {
          return (
            <Tooltip label={lang} key={lang}>
              <span>
                <Icon
                  boxSize={{sm:4, md:6, lg:8}}
                  as={languageIcon[lang.trim()]}
                />
              </span>
            </Tooltip>
          );
        })}
      </HStack>

      <Image
        // maxW={[300, 600]}
        src={`${html_url}/blob/main/diagrams/headline.png?raw=true`}
        alt="ELT project overview"
      />

      <Text padding={2}>{readme.description}</Text>

      <Link  padding={2} href={html_url} isExternal>
        GitHub Repo
        <ExternalLinkIcon mx="5px" />
      </Link>
    </Card>
  );
};
export default ProjectCard;
