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
import { isMobile } from 'react-device-detect'

const Cards = ({name, description, imageUrl, price, time}) => 

    <Box
      height='100%'
      flex={false}
    >
      <Card elevation="none" width={isMobile ? "large" :"small"}>
        <CardBody height={isMobile ? "large" :"small"} flex='grow'>
          <Image
            fit="cover"
            src={imageUrl}
            a11yTitle="bridge"
            style={{borderRadius: '10px'}}
          />
        </CardBody>
        <CardFooter direction='column' justify='start' align='start' pad={{vertical:'small'}}>
          <Box responsive={false}>
            <Heading level={isMobile ? 1 : 6} margin='none'>
              {name}
            </Heading>
            <Text size={isMobile ? 'xxlarge' : 'small'} color='neutral500'>{description}</Text>
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
            <Text size={isMobile ? '2xl' : 'small'} color='neutral500'>From: <Text size={isMobile ? '2xl' : 'small'} color='neutral100'>${price}</Text></Text>
          </Box>
          <Box>
            <Text size={isMobile ? '2xl' : 'small'}>{time}</Text>
          </Box>
          </Box>
        </CardFooter>
      </Card>
    </Box>

export default Cards