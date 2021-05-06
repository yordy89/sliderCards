import React, { useRef, useState, useEffect } from 'react'
import { Box, Heading, Button } from 'grommet'
import { Previous, Next } from 'grommet-icons'
import Cards from '../Card'
import { isMobile } from 'react-device-detect'

const Slider = ({ stepWidth = 100, title, previous, next, cards, ...rest }) => {
  const scrollRef = useRef()
  const [nextButton, setNextButton] = useState(false)
  const [previousButton, setPreviousButton] = useState(true)
  const [showButtons, setShowButtons] = useState(false)

  const scrollTo = {
    nextScroll: 1,
    previousScroll: 2
  }

  useEffect(() => {
    scrollRef.current.scrollWidth !== scrollRef.current.offsetWidth && setShowButtons(true)
  }, [])

  const goTo = (scroll) => {
    scrollRef.current.scrollBy({ left: scroll === 1 ? stepWidth : -stepWidth, behavior: "smooth" })

    scrollRef.current.scrollLeft === 0
      ? setPreviousButton(true)
      : setPreviousButton(false)

    scrollRef.current.offsetWidth + scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth
      ? setNextButton(true)
      : setNextButton(false)
  }

  return (
    <Box
      direction='column'
      align='start'
      background='neutral900'
      pad={{ horizontal: 'small', vertical: 'small' }}
      elevation='medium'
      height={isMobile ? '100%' : 'medium'}
      width='xlarge'
      {...rest}
    >
      <Box
        direction='row'
        justify='between'
        width='100%'
      >
        <Heading level={isMobile ? 1 : 4} margin={!isMobile && 'none'}>{title}</Heading>
        {showButtons && (
          <Box
            direction='row'
            justify='between'
            gap={isMobile ? 'large' : 'small'}
          >
            <Button
              onClick={() => goTo(scrollTo.previousScroll)}
              icon={previous || <Previous size={isMobile ? 'large' : 'small'} />}
              style={{ borderRadius: '50%' }}
              hoverIndicator={{ background: 'neutral700' }}
              disabled={previousButton}
            />
            <Button
              onClick={() => goTo(scrollTo.nextScroll)}
              icon={next || <Next size={isMobile ? 'large' : 'small'} />}
              style={{ borderRadius: '50%' }}
              hoverIndicator={{ background: 'neutral700' }}
              disabled={nextButton}
            />
          </Box>
        )}
      </Box>
      <Box
        direction='row'
        gap={isMobile ? 'large' : 'medium'}
        align='center'
        justify={showButtons ? 'start' : 'between'}
        height='100%'
        pad={{ vertical: 'small' }}
        overflow='hidden'
        id='probando'
        ref={scrollRef}
        width='100%'
      >
        {cards.map(card => <Cards name={card.name} description={card.description} imageUrl={card.imageUrl} price={card.price} time={card.time}/>)}
      </Box>
    </Box>
  )
}

export default Slider
