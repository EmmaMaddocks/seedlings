import {
  SimpleGrid,
  Flex,
  Text,
  Heading,
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  CardHeader,
  Container,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Trophy from './trophy';
import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import * as api from '../utils/api';
import { useState, useEffect } from 'react';
import { useUserContext, UserContext } from '../context/UserContext';
import Weather from './Weather';
import getIpAddress from '../utils/IpAddress';
import axios from 'axios';
import {postWaterDatePlanted} from '../utils/api'

function Profile() {

  const { userName, setData, data } = useUserContext();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  const [watered, setWatered] = useState(false)


  useEffect(() => {
    
    setIsLoading(true);
    api
      .getProfileData(userName)
      .then(response => {
        setIsLoading(false);
        setData(response[0])
        setWatered(false)
        console.log(response[0])
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [watered]);

let toBeWatered = []
data.allotment.forEach(veg => {
  veg.HarvestDay = Date(veg.datePlanted + (veg.minHarvest * 86400000))
  veg.PercentageComplete = Math.round (100 - ((veg.datePlanted + (veg.minHarvest * 86400000)) - Date.now()) / (veg.minHarvest * 864000))
  if ((Date.now() - veg.lastWatered) > (veg.numberOfDaysBetweenWatering * 86400000)) {
    toBeWatered.push({name: veg.name, datePlanted: veg.datePlanted})
  }
});


data.allotment.sort(function(a, b) {
  let keyA = new Date(a.HarvestDay),
    keyB = new Date(b.HarvestDay);
  
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

const nextToHarvest = data.allotment[0]

function handleWatering(id) {
  try {
    postWaterDatePlanted( userName, id)
    setWatered(true)
  } catch (error) {
    console.log(error)
  }
}

return (
  <Container
  centerContent
    paddingTop='50px'
  >

<Heading textStyle='h1' size='2xl'> Welcome, {data.name}! </Heading> 


<Text textStyle='h2' size='2xl'> Here's the latest: </Text> 

<Flex borderRadius='25pt' width='100vw' height='65vh' maxH='800px' alignItems='center' justifyContent='center'> 
      <SimpleGrid spacing={4}  columns={2}>
  <Card size='lg' bgColor='brand.lightgreen' width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
      <Text textStyle='cardHeader'>Allotment</Text>
    </CardHeader>
    <CardBody padding='0px'>
      <Text textStyle='h4'>{data.allotment.length}</Text>
      <Text textStyle='h5'>crops planted</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.paleorange'width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
    <Text textStyle='cardHeader'>Seeds</Text>
    </CardHeader>
    <CardBody padding='0px'>
      <Text textStyle='h4'>{data.seeds.length}</Text>
      <Text textStyle='h5'>varieties to plant</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.orange' width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
    <Text textStyle='cardHeader'>Harvests</Text>
    </CardHeader>
    <CardBody padding='0px'>
    <Text textStyle='h4'>{data.seeds.length}</Text>
      <Text textStyle='h5'>successful harvests</Text>
    </CardBody>
  </Card>
  <Card size='lg' bgColor='brand.lightbrown' width='40vw' height='40vw' maxH='200px'>
    <CardHeader paddingBottom='0px'>
    <Text textStyle='cardHeader'/>
    <Weather/>
    </CardHeader>
    <CardBody padding='0px'>
    </CardBody>
  </Card>



<Card size='lg' bgColor='brand.lightbrown' width='40vw' height='40vw' maxH='200px'>
     <CardHeader>
    <Text textStyle='cardHeader'>Next to Harvest:</Text>
       
    </CardHeader> 
  <CardBody paddingTop={0} display='flex'  direction='column' alignItems='center' justifyContent='center'>
   <Flex direction='column' alignItems='center' justifyContent='center'>
   <Text  textStyle='h5'>{nextToHarvest.name}</Text> 
      <Text  textStyle='h5'>{nextToHarvest.HarvestDay.split("12:")[0]}</Text>    
      <CircularProgress value={nextToHarvest.PercentageComplete} color='brand.orange'>
  <CircularProgressLabel>{nextToHarvest.PercentageComplete}%</CircularProgressLabel>
</CircularProgress> 
 </Flex> 
  </CardBody> 
 </Card> 


<Card size='lg' bgColor='brand.lightgreen' width='40vw' height='40vw' maxH='200px'>
    <CardHeader>
    <Text textStyle='cardHeader'>To water today:</Text>
    </CardHeader>
    <CardBody padding='0px'>
      {toBeWatered.map((veg) => {
        return <><Text  key={veg.datePlanted} textStyle='h5'>{veg.name}</Text>
        <Button onClick={() => {handleWatering(veg.datePlanted)}}>   Water!</Button>
        </>
      })}      
    </CardBody>
  </Card>
</SimpleGrid>
</Flex> 







    </Container>
  );
}

export default Profile;