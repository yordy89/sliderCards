import { Grommet, Box } from 'grommet'
import { theme } from './theme'
import Slider from './Components/Slider'
import Cards from './cards.json'
function App() {
  return (
    <Grommet theme={theme}>
      <Box 
         direction='column'
         justify='center'
         height='100vh'
         pad={{horizontal:'small'}}
      >
      <Slider title='Recently viewed' cards={Cards} stepWidth={600}/>
      </Box>
    </Grommet>
  );
}

export default App;
