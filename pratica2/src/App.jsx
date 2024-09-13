import './App.css';
import Header from '../components/Header';
import PasswordInput from '../components/PasswordInput';
import InputPesquisa from '../components/InputPesquisa';
import Link from '../components/Link';

function App() {
  return (
    <>
      <div className='card'>
             <Header/>
             <PasswordInput/>
             <InputPesquisa/>
             <Link url='https://www.youtube.com/watch?v=qYnA9wWFHLI&t=1903s' text='weightless 4' />
            
        <p>este parágrafo em JSX</p>
      </div>
    </>
  );
}

export default App;
