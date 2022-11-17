import {
  Input,
  InputGroup,
  VStack,
  InputRightElement,
  Box,
  Button,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as api from '../utils/api';
import { setQuaternionFromProperEuler } from 'three/src/math/MathUtils';

const LogIn = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [error, setError] = useState(null); 

const {user, setUser } = props

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { userName, password } = data;
  

    const user = {
      username: userName,
      password: password,
    };

    api.validateLogIn(userName, password)
    .then((response) => {
console.log(response)

      if (response === 'Invalid password') {
    setError(response)
      } else if (response === 'Username does not exist.') {
        setError(response)
      } else {
        setUser(response)
        navigate('/profile')
      }

}).catch((error) =>{
  console.log(error)
})
  }
  

  return (
    <>
      <Flex
        height="100vh"
        direction="column"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={6}
      >
        <Box size="50%">
          <Heading textStyle="h1" size="3xl" mx="100px">
            Welcome Back!
          </Heading>
        </Box>

        <VStack spacing={3} align="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Username"
              size="lg"
              border="white"
              borderRadius="10"
              focusBorderColor="brand.lightgreen"
              color="brand.darkgreen"
              _placeholder={{ color: 'inherit' }}
              bgColor="white"
              {...register('userName', { required: true })}
              aria-invalid={errors.userName ? 'true' : 'false'}
            />
            {errors.userName?.type === 'required' && (
              <p role="alert">Username is required</p>
            )}
            {/* 
          <InputGroup size="md"> */}
            <Input
              size="lg"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              border="white"
              borderRadius="10"
              focusBorderColor="brand.lightgreen"
              color="brand.darkgreen"
              _placeholder={{ color: 'inherit' }}
              bgColor="white"
              {...register('password', { required: true })}
              aria-invalid={errors.password ? 'true' : 'false'}
            />

            {/* <InputRightElement width="4.5rem">
              <Button
                colorScheme="orange"
                h="2rem"
                size="sm"
                onClick={handleClick}
                type="button"
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup> */}
            {errors.password?.type === 'required' && (
              <p role="alert">Password is required</p>
            )}

            <Button colorScheme="orange" size="lg" type="submit">
              Log In
            </Button>
          </form>

          { error ? <Text>{error}</Text> : null }

          <Text fontSize="lg">Not got an account?</Text>
          <Button
            colorScheme="orange"
            variant="link"
            size="lg"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default LogIn;
