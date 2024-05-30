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
          I have 15 years experience as a mass spectrometrist and laboratory
          manager. As part of developing in these roles, I have learnt new
          skills in software development to create bespoke solutions for more
          efficient lab operation, strategic decision making and efficient
          processing of large scientific data sets from advanced structural MS
          platforms.
        </Text>
        <Text>
          In February 2024 I completed a three month data engineering bootcamp
          with Northcoders.
        </Text>
        <Text>
          I now wish to combine my data engineering, lab management and
          structural biology skills to develop innovative solutions in data
          science focussing on big data to enable scientifically sound
          conclusions to allow advancements in scientific research and
          operational efficincy.
        </Text>
      </Stack>
    </Card>
  );
};
export default AboutMe;
