import {
    Box,
    Button,
    Heading,
    Text,
    Stack,
    Card,
    Image,
    CardBody,
    CardFooter,
    ButtonGroup,
    Container
  } from '@chakra-ui/react';
  import * as api from '../utils/api'
  import { useNavigate } from 'react-router-dom';




const AllotmentCard = ({ crop, user }) => {

  const navigate = useNavigate();

const {
    description,
    name,
    picture
} = crop;

const { username } = user 


const handleClick = (event) => {
  event.preventDefault();
  try {
  api.deleteFromAllotment(user.user.username, name)
} catch(error) {
  console.log(error)
}
};

const handleViewProduct = (event) => {
  navigate('/crop')
};




    return (
    <Card maxW='sm' maxH='m' bgColor='brand.paleorange'>
    <CardBody  >
      <Image
        src={picture}
        alt={name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
  {description}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' bgColor='white' onClick={handleClick} >
          Remove from allotment
        </Button>
        <Button variant='solid' bgColor='white' onClick={handleViewProduct} >
           View Info 
        </Button>
  
      </ButtonGroup>
    </CardFooter>
  </Card>
)  
}

export default AllotmentCard