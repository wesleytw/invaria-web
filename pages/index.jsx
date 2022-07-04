// import cover from './assets/cover_new.png';
import Head from 'next/head'
// import { ReactComponent as Logo } from './assets/logo_white.svg';
// import { Twitter, Discord } from './components/icons/Link';
import { Navbar, Welcome} from '../components'

function App() {
  return (
    <div className="min-h-screen welcome">
      <Head>
        <title>InVaria</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
