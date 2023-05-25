import { Box, Badge, Image, Heading, Text } from "@chakra-ui/react";

export function FeatureCard({ title, imgSrc }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} shadow="md" m={{ base: "1", md: "2" }}>
      <Image src={imgSrc} alt={title} h="200px" w="full" objectFit="cover" />
      <Heading mt={2} mb={1} size="md">{title}</Heading>
      <Badge colorScheme="yellow" mb={2}>Beta</Badge>
      <Text>
        
      </Text>
    </Box>
  );
}
