
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CryptoContainer from './components/CryptoContainer';
import CryptoList from './components/CtyptoList';
import { getCryptoData } from './ducks/crypto/actions';
import Header from './components/Header';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('useEffect')
    dispatch(getCryptoData())
  },[])
  return <>
    <CryptoContainer>
      <Header/>
      <CryptoList/>
    </CryptoContainer>
  </>;
}

export default App;
