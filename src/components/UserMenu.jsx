import { Menu, MenuButton, MenuList, MenuItem, Button, Box } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export function UserMenu() {
  return (
    <Menu>
      <MenuButton as={Button} h="2em" w="full" bg="purple.600" color="white" _hover={{ bg: 'purple.500' }} _active={{ bg: 'purple.500' }} leftIcon={<FontAwesomeIcon icon={faUser} />}>
        <Box fontSize="sm">
          User Name
        </Box>
      </MenuButton>
      <MenuList bg="purple.600" _hover={{ bg: 'purple.400' }}>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
        <MenuItem>Option 3</MenuItem>
      </MenuList>
    </Menu>
  )
}
