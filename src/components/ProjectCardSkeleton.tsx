import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const ProjectCardSkeleton = () => {
  return (
    <Card margin={5} padding={3} borderRadius={10}>
      <Skeleton height="20px" />
      {/* <Heading as="h2">Project Title</Heading> */}

      <HStack>
        <SkeletonCircle size="10" />
        <SkeletonCircle size="10" />
        <SkeletonCircle size="10" />
      </HStack>
      <SkeletonText height="200" />
    </Card>
  );
};
export default ProjectCardSkeleton;
