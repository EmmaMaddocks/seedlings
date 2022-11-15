import {
  SimpleGrid,
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheck, FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
  return (
    <Flex
      height="70vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={6}
    >
      <Box p="4" bg="green.400">
        Streak
      </Box>
      <Heading textStyle="h1">Welcome Thomas!</Heading>

      <Heading textStyle="h2">To do today:</Heading>

      <List spacing={3}>
        <ListItem>
          Water Carrots
          <ListIcon as={FaCheck} color="green.500" />
        </ListItem>
        <ListItem>
          Water Peas
          <ListIcon as={FaCheck} color="green.500" />
        </ListItem>
      </List>

      <Heading textStyle="h2">Nearing Harvest:</Heading>
      <List spacing={3}>
        <ListItem>
          Carrots
          <ListIcon as={FaLongArrowAltRight} color="green.500" />
        </ListItem>
        <ListItem>
          Peas
          <ListIcon as={FaLongArrowAltRight} color="green.500" />
        </ListItem>
      </List>

      <Button
        colorScheme="orange"
        size="lg"
        onClick={() => navigate('/allotment')}
      >
        Visit Allotment
      </Button>
    </Flex>
  );
}

export default Profile;
