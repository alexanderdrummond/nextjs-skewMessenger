import { Box, VStack, Link, HStack, Text, Icon } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCog, faSignOutAlt, faComments, faClipboardList } from '@fortawesome/free-solid-svg-icons';

export function NavigationMenu() {
  return (
    <VStack spacing={4} align="start" p={4}>
      <Link href="#" color="black">
        <HStack>
          <Icon as={FontAwesomeIcon} icon={faHome} />
          <Text>Home</Text>
        </HStack>
      </Link>
      <Link href="#" color="black">
        <HStack>
          <Icon as={FontAwesomeIcon} icon={faUsers} />
          <Text>Contacts</Text>
        </HStack>
      </Link>
      <Link href="#" color="black">
        <HStack>
          <Icon as={FontAwesomeIcon} icon={faComments} />
          <Text>Chat</Text>
        </HStack>
      </Link>
      <Link href="#" color="black">
        <HStack>
          <Icon as={FontAwesomeIcon} icon={faClipboardList} />
          <Text>To-Do</Text>
        </HStack>
      </Link>
      <Link href="#" color="black">
        <HStack>
          <Icon as={FontAwesomeIcon} icon={faCog} />
          <Text>Settings</Text>
        </HStack>
      </Link>
      <Link href="#" color="black">
        <HStack>
          <Icon as={FontAwesomeIcon} icon={faSignOutAlt} />
          <Text>Logout</Text>
        </HStack>
      </Link>
    </VStack>
  )
}
