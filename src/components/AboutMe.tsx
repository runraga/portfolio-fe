import { Card, Heading, Text, Stack } from "@chakra-ui/react";
import headingSizes from "./HeadingSizes";

const AboutMe = () => {
  return (
    <Card
      // maxWidth="800px"
      margin={5}
      padding={3}
      borderRadius={10}
    >
      <Heading size={headingSizes.h1}>About Me</Heading>
      <Stack>
        <Text>
          Ever since I was a kid I've loved solving puzzles. Then it was
          matchsticks, logic or maths problems set by my dad. As a structural
          biologist and lab manager the puzzle has been in handling, processing
          and interpreting complex data to advance scientific knowledge and aid
          strategic decision making.
        </Text>
        <Text>
          Learning to code has has been a hugely rewarding experience and has
          allowed me to leverage complex data to its maximum potential. It has
          given a huge boost to productivity and sense of achievement.
          Consequently I decided to put coding/data engineering at the centre of
          my future career plans. I completed a three month data engineering
          bootcamp with Northcoders in February 2024 which has provided an
          invaluable foundation to my career 'pivot'.
        </Text>
        <Text>
          I am now looking to combine my structural biology and lab management
          skills with software development and data engineering to find
          innovative solutions to real-world problems of the highest complexity.
        </Text>
      </Stack>
    </Card>
  );
};
export default AboutMe;
