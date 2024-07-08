import {
  Card,
  Heading,
  Link,
  Image,
  Icon,
  Text,
  SimpleGrid,
  GridItem,
  Flex,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdImportContacts } from "react-icons/md";
import portfolio from "../assets/portfolio.png";
import { IconType } from "react-icons";
import headingSizes from "./HeadingSizes";

interface Link {
  icon: IconType;
  url: string;
  text: string;
}

const contactLinks: Link[] = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/james-ault-226907bb/",
    text: "LinkedIn",
  },
  {
    icon: FaGithub,
    url: "https://github.com/runraga",
    text: "GitHub",
  },
  {
    icon: MdEmail,
    url: "mailto:j.ault@helmfarm.com",
    text: "Email",
  },
  {
    icon: MdImportContacts,
    url: "./cv/cv.pdf",
    text: "Download CV",
  },
];



const Details = () => {
  return (
    <Card
      // maxWidth="800px"
      margin={5}
      padding={3}
      borderRadius={10}
    >
      <Heading textAlign={"center"} size={headingSizes.h1}>
        James Ault
      </Heading>
      <Heading
        textAlign={"center"}
        size={headingSizes.h2}
        paddingBottom={4}
      >
        Analytical Scientist | Data Engineer
      </Heading>
      <SimpleGrid
        alignItems={"center"}
        spacing={6}
        columns={{ base: 2, lg: 1 }}
        justifyContent={{ base: "flex-start", lg: "center" }}
      >
        <GridItem order={{ base: 1, lg: 2 }}>
          <Image
            maxW={{ lg: 250, md: 185, base: 100 }}
            src={portfolio}
            alt="a portrait photo of James Ault"
            mx="auto"
            borderRadius={10}
          />
        </GridItem>
        <GridItem order={{ base: 2, lg: 1 }}>
          <Flex justify="center">
            <SimpleGrid
              columns={{ base: 1, lg: 4 }}
              justifyContent={{ base: "flex-start", lg: "center" }}
              alignItems={{ lg: "center" }}
            >
              {contactLinks.map((l) => {
                return (
                  <GridItem>
                    <Link
                      href={l.url}
                      key={l.url}
                      display="flex"
                      alignItems="center"
                      marginBottom={{ base: 2, lg: 0 }}
                    >
                      <Icon boxSize="25px" as={l.icon} marginRight={2} />
                      <Text as="span" verticalAlign={"top"}>
                        {l.text}
                      </Text>
                    </Link>
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Card>
  );
};
export default Details;
