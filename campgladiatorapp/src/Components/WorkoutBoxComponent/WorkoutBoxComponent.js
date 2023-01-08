import { useState, useEffect } from 'react';

//UI Dependencies
import {
    Box,
    Badge,
    Image,
    Wrap,
    Center,
    Heading,
    Button,
} from '@chakra-ui/react';

// Routes
import { Link } from "react-router-dom";

//Workout API Service
import { GetWorkouts } from "../../Services/WorkoutServices"

const WorkoutBoxComponent = () => {
    const [ workouts, setWorkouts ] = useState([]);

    useEffect(() => {
        async function load() {
            setWorkouts(await GetWorkouts());
        }
        load();
    }, []);

    return (
        <Wrap gap='2' alignItems='center' >
            {workouts.map( (item) => (
                <Center key={item.id}>
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} m={3}>
                        
                        <Center p={4}>
                            <Heading as='h5' size='sm'>{item.title}</Heading>
                        </Center>
                        <Center>
                            <Image src={item.thumbnail} alt={item.title} boxSize='220px' />
                        </Center>
                        <Box p='6'>
                        <Box display='Wrap' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='red'>
                            {item.duration} minutes
                            </Badge>
                            <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                            >
                            {item.levelTag} level &bull; {item.impactTag} impact 
                            </Box>
                        </Box>
                
                
                        <Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                            {item.description}
                            </Box>
                        </Box>

                        <Button>
                            <Link to={`/detail/${item.id}`}>Detail</Link>
                        </Button>
                    </Box>
                </Box>
              </Center>
            ))}
        </Wrap>
    )

}

export default WorkoutBoxComponent