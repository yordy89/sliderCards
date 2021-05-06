import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text
} from 'grommet';

const Cards = ({name, description, imageUrl, price, time}) => 

    <Box
      height='100%'
      flex={false}
    >
      <Card elevation="none" width="small">
        <CardBody height="small" flex='grow'>
          <Image
            fit="cover"
            src={imageUrl}
            a11yTitle="bridge"
            style={{borderRadius: '10px'}}
          />
        </CardBody>
        <CardFooter direction='column' justify='start' align='start' pad={{vertical:'small'}}>
          <Box responsive={false}>
            <Heading level="6" margin='none'>
              {name}
            </Heading>
            <Text size='small' color='neutral500'>{description}</Text>
          </Box>
          <Box
            direction='row'
            justify='between'
            width='100%'
          >
          <Box
            direction="row"
            align="center"
            gap="small">
            <Text size='small' color='neutral500'>From: <Text size='small' color='neutral100'>${price}</Text></Text>
          </Box>
          <Box>
            <Text size='small'>{time}</Text>
          </Box>
          </Box>
        </CardFooter>
      </Card>
    </Box>

export default Cards