import '../styles/globals.css'
import type { AppProps } from 'next/app'
import reportWebVitals from '../src/reportWebVitals';
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { Buffer } from 'buffer';

// window.Buffer = window.Buffer || Buffer;
// // https://github.com/NoahZinsmeister/web3-react/issues/423

const desiredChainId = ChainId.Rinkeby;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default MyApp
