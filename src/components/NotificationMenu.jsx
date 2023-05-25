import { Menu, MenuButton, MenuList, MenuItem, Button, Box } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export function NotificationMenu() {
  return (
    <Menu>
      <MenuButton as={Button} h="2em" w="full" bg="purple.600" color="white" _hover={{ bg: 'purple.500' }} _active={{ bg: 'purple.500' }} leftIcon={<FontAwesomeIcon icon={faBell} />}>
        <Box ml={2} fontSize="sm">
          Notifications
        </Box>
      </MenuButton>
      <MenuList bg="purple.600" _hover={{ bg: 'purple.400' }}>
        <MenuItem>Notification 1</MenuItem>
        <MenuItem>Notification 2</MenuItem>
        <MenuItem>Notification 3</MenuItem>
      </MenuList>
    </Menu>
  )
}
