import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  Icon,
  Stack,
  Text,
  VStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  Divider,
  

} from '@chakra-ui/react';

// A single chat contact in the list
function ChatContact({ name, lastMessage }) {
  return (
    <Box bg="white" p={2} mb={2} borderRadius="md">
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">{lastMessage}</Text>
    </Box>
  );
}


// Chat module
function ChatModule() {
  return (
    <Flex direction="row" height="50vh" width="50vw" m="auto">
      <Box width="30%" bg="teal.200" p={4} borderRadius="12px 0 0 12px">
        <Text fontWeight="bold" mb={2}>Contacts</Text>
        <ChatContact name="Jane Doe" lastMessage="Hello there!" />
        <ChatContact name="John Smith" lastMessage="Catch up soon?" />
        <Divider orientation="horizontal" />
      </Box>
      <Box width="70%" bg="blue.200" p={4} display="flex" flexDirection="column" justifyContent="space-between" borderRadius="0 12px 12px 0">
        <Text fontWeight="bold" mb={2}>Chat with Jane Doe</Text>
        <Divider orientation="horizontal" />
        <VStack spacing={4} flex="1" overflow="auto">
        </VStack>
        <ChatInput />
      </Box>
    </Flex>
  );
}

// A single chat message


// Input field and send button
function ChatInput() {
  return (
    <FormControl>
      <InputGroup size="md" mt={4}>
        <Input pr="4.5rem" placeholder="Type message..." bg="white" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" colorScheme="pink">Send</Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export default ChatModule;