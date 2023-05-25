import { useState, useEffect } from 'react';
import { Box, VStack, IconButton, useMediaQuery } from "@chakra-ui/react";
import { UserMenu } from "./UserMenu";
import { NavigationMenu } from "./NavigationMenu";
import { NotificationMenu } from "./NotificationMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function Sidebar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isOpen, setIsOpen] = useState(isLargerThan800);

  useEffect(() => {
    setIsOpen(isLargerThan800);
  }, [isLargerThan800]);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Box w={isOpen ? "200px" : "50px"} h="100vh" bg="whiteAlpha.200" color="black" shadow="md" position="relative" transition="width 0.2s">
      {isOpen && (
        <VStack spacing={4} align="start" justify="space-between" p={4} h="full">
          <VStack spacing={4} align="start">
            <UserMenu />
            <NavigationMenu />
          </VStack>
          <NotificationMenu />
        </VStack>
      )}
      <Box position="absolute" top="50%" right="0" transform="translateY(-50%)" w="50px" h="50px">
        {!isLargerThan800 && (
          <IconButton 
            aria-label="Toggle Sidebar" 
            icon={<FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />} 
            onClick={handleToggle}
            w="100%"
            h="100%"
          />
        )}
      </Box>
    </Box>
  );
}
