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
import { FaPython, FaGithub, FaAws } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiTypescript, SiTerraform } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

interface Props {
  repo: RepositoryObject;
}

const ProjectCard = ({ repo }: Props) => {
  const languageIcon: { [key: string]: IconType } = {
    Python: FaPython,
    Terraform: SiTerraform,
    Typescript: SiTypescript,
    JavaScript: IoLogoJavascript,
    SQL: BiLogoPostgresql,
    "GitHub Workflow": FaGithub,
    "Amazon Web Services": FaAws,
  };
  const { html_url, readme } = repo;

  const languages = readme.languages.split("- ").slice(1);

  return (
    <Card paddingRight={5}>
      <Heading>{readme.title}</Heading>

      <HStack marginY={1}>
        {languages.map((lang) => {
          return (
            <Tooltip label={lang} key={lang}>
              <span>
                <Icon
                  boxSize={8}
                  as={languageIcon[lang.trim()]}
                  color="gray.500"
                />
              </span>
            </Tooltip>
          );
        })}
      </HStack>

      <Image
        maxW={[300, 600]}
        src={`${html_url}/blob/main/diagrams/headline.png?raw=true`}
        alt="ELT project overview"
      />

      <Text>{readme.description}</Text>

      <Link href={html_url} isExternal>
        GitHub Page <ExternalLinkIcon mx="2px" />
      </Link>
    </Card>
  );
};
export default ProjectCard;
