import { Box, Flex, Heading } from "@chakra-ui/react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <Box bg="white" borderRadius="lg" p={4} shadow="md">
      <Heading mb={4}>Features</Heading>
      <Flex direction={{ base: "column", md: "row" }}>
        <FeatureCard title="Chat" imgSrc="/skew_to-do.png" />
        <FeatureCard title="To-Do" imgSrc="/skew_to-do.png" />
      </Flex>
    </Box>
  );
}
