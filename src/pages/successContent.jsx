import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import { InfoSection } from "../components/InfoSection";
import { FeaturesSection } from "../components/FeaturesSection";

export default function Dashboard() {
  return (
    <Box display="flex" h="100vh">
      <Sidebar />
      <Box w="full" p={4}>
        <InfoSection />
        <FeaturesSection />
      </Box>
    </Box>
  );
}

