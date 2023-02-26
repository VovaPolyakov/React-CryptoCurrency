
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CryptoContainer from './components/CryptoContainer';
import CryptoList from './components/CtyptoList';
import { getCryptoData } from './ducks/crypto/actions';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('useEffect')
    dispatch(getCryptoData())
  },[])
  return <>
    <CryptoContainer>
      <CryptoList/>
    </CryptoContainer>
  </>;
}

export default App;
