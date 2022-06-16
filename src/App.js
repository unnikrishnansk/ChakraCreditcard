
import { Button } from '@chakra-ui/react';
import './App.css';
import Creditcard from './components/Creditcard';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

        <div>
        <Creditcard />
        </div>
        <div>
        <Form />
        <Button colorScheme='pink' height='35px'
  width='150px' marginLeft='120px' marginTop='30px' size='md'>
    PAY
  </Button>
        </div>
      
     
     
    </div>
  );
}

export default App;
