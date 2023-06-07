import { useState, useEffect } from 'react';

// MP4 Player Component
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

//Routes
import { useParams, Link } from "react-router-dom";

//UI Dependencies
import {
    Box,
    Badge,
    Center,
    Heading
} from '@chakra-ui/react';

//Workout API Service
import { GetWorkoutById } from "../../Services/WorkoutServices"

const WorkoutDetailBoxComponent = () => {
    const { id } = useParams();
    const [ workout, setWorkout ] = useState({});

    useEffect(() => {
        async function load() {
            setWorkout(await GetWorkoutById(id));
        }
        load();
    }, []);

    return (
        <>
            <Link to='/'>Back</Link>
            
            <Center key={workout.id}>
                    <Box maxW='xg' borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} m={3}>
                        
                        <Center p={4}>
                            <Heading as='h5' size='sm'>{workout.title}</Heading>
                        </Center>
                        <Center>
                            <Player poster={workout.thumbnail} src={workout.media}/>
                        </Center>
                        <Box p='6'>
                        <Box display='Wrap' alignworkouts='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='red'>
                            {workout.duration} minutes
                            </Badge>
                            <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                            >
                            {workout.levelTag} level &bull; {workout.impactTag} impact 
                            </Box>
                        </Box>
                
                
                        <Box>
                            <Box as='span' color='gray.600' fontSize='sm'>
                            {workout.description}
                            </Box>
                        </Box>
                    </Box>
                </Box>
              </Center>

        </>
    )
}

export default WorkoutDetailBoxComponent