import { motion } from 'framer-motion';
import { Box, Button, HStack, Image, useBreakpointValue, Text, VStack, Icon, Flex } from '@chakra-ui/react';
import { FaLock, FaHeart, FaUserCircle, FaWpforms } from 'react-icons/fa';

// Chakra UI's Box component mapped with framer-motion's motion API
const MotionBox = motion(Box);

const PopupBox = ({ setFormToShow }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex align="center" justify="center" minHeight="100vh" flexDirection={isDesktop ? 'row' : 'column'}>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        width={isDesktop ? '400px' : '90%'} // Responsive width
        height={isDesktop ? '450px' : '250px'} // Responsive height
        bg="rgba(226, 232, 240, 0.2)" // use RGBA for background color
        borderRadius={isDesktop ? '8px 0 0 8px' : '8px 8px 0 0'} // Apply different border radii for desktop and mobile versions of Box 1
        boxShadow="8px 0 12px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.1)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        // the rest of your properties here...
      >
        <Image src="/skew.png" alt="Logo" maxW="50%" maxH="50%" zIndex={1} />
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        width={isDesktop ? '400px' : '90%'} // Responsive width
        height={isDesktop ? '450px' : 'auto'} // Responsive height
        p={6}
        bg="gray.100"
        borderRadius={isDesktop ? '0 8px 8px 0' : '0 0 8px 8px'} // Apply different border radii for desktop and mobile versions of Box 2
        boxShadow="8px 0 12px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.1)"
        marginLeft={isDesktop ? '-1px' : '0'} // Responsive margin
        // the rest of your properties here...
      >
        <VStack spacing={8} alignItems="center">
          <Text fontSize="2xl" fontWeight="bold">Welcome to Skew</Text>
          <Text fontSize="md">This is an experimental productivity app using Next, Chakra, Framer and Supabase.</Text>
          <HStack spacing={6} w="100%">
            <Button leftIcon={<FaLock />} w="full" colorScheme="teal" onClick={() => setFormToShow('login')}>
              Login
            </Button>
            <Button leftIcon={<FaWpforms />} w="full" colorScheme="pink" onClick={() => setFormToShow('register')}>
              Register
            </Button>
          </HStack>
          <Text fontSize="md" textAlign="center">Made in 🇩🇰 with <Icon as={FaHeart} boxSize={4} color="pink.500" /></Text>
        </VStack>
      </MotionBox>
    </Flex>
  );
};

export default PopupBox;
