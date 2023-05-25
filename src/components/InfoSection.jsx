import { Box, Heading, Text } from "@chakra-ui/react";

export function InfoSection() {
  return (
    <Box bg="white" borderRadius="lg" p={4} mb={4} shadow="md">
      <Heading mb={2}>Welcome to Skew</Heading>
      <Text>
        This is an experimental producitivty application made by Alexander Drummond. If you{"'"}re on mobile, you can open the menu on the left side of the screen using the arrow.
      </Text>
    </Box>
  );
}
