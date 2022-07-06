import React, { useEffect, useState } from 'react'
import { ic_walletconnect, ic_metamask, ic_close, ic_eth, ic_usdc } from '../src/assets/icons';
import { ethers } from 'ethers'
import {
  useMetamask, useWalletConnect, useCoinbaseWallet,
  useNetwork, useAddress, useDisconnect,
} from "@thirdweb-dev/react";
import erc20ABI from '../src/utils/erc20ABI.json'
import { shortenAddress } from '../src/utils/shortenAddress'
import { fetchPrice } from '../src/utils/fetchPrice'
let pervState = []

const ModalWallet = () => {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  const [ethBalance, setEthBalance] = useState()
  const [usdcBalance, setUsdcBalance] = useState()
  const address = useAddress();
  const network = useNetwork();
  const [getCoinPrice, setgetCoinPrice] = useState()


  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner()
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
    } else {
      console.log("No connected account found");
    }

    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("Connected to chain " + chainId);
    const rinkebyChainId = "0x4";
    if (chainId !== rinkebyChainId) {
      console.log("You are not connected to the Rinkeby Test Network!");
    } else {
      setEthBalance((+ethers.utils.formatEther(await signer.getBalance())).toFixed(3))
      const usdcAddr = "0x002fF2aD81F0Fa36387eC6F4565B9667516C5342"
      const usdcContract = new ethers.Contract(usdcAddr, erc20ABI, provider);
      const decimals = await usdcContract.decimals();
      setUsdcBalance((+(ethers.utils.formatUnits(await usdcContract.balanceOf(address), decimals))).toFixed(3))  //.toNumber()  //.toFixed(1)
      setgetCoinPrice(await fetchPrice("ethereum"))
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 當scroll時，不知為何network == undefined
      if (network[0].data.chain == undefined) {
        return
      } else {
        if (pervState[0] == network[0].data.chain.name && pervState[1] == address) return
      }
      pervState[0] = network[0].data.chain.name
      pervState[1] = address
      console.log(network[0].data.chain.name, pervState)
      checkIfWalletIsConnected()
    }
  }, [address, network])

  return (
    <div>
      {!address ? (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal bg-[#000000b6]">
            <div className="modal-box w-[375px] h-[223px] absolute top-[73px] right-[85px] rounded-[4px] bg-gradient-to-b from-primary to-[#1E1722] p-6">
              <label htmlFor="my-modal-3" className="btn btn-sm absolute top-3 right-3 rounded-[4px] bg-opacity-0 hover:bg-opacity-0 text-[#fff] border-none">
                <img className="h-[20px] w-[20px]" src={ic_close} alt="" />
              </label>
              <h3 className="text-2xl font-semibold text-white mb-[22px]">Connect Wallet</h3>
              <button className="btn btn-primary relative w-[327px] h-[56px] rounded flex justify-center items-center border-none normal-case" onClick={connectWithMetamask}>
                <img className="absolute top-[13px] left-4 h-[30px] w-[30px]" src={ic_metamask} alt="" />
                <p className=" font-semibold text-accent">MetaMask</p>
              </button>
              <button className="btn btn-primary mt-3 relative w-[327px] h-[56px] rounded flex justify-center items-center border-none normal-case" onClick={connectWithWalletConnect}>
                <img className="absolute top-[13px] left-4 h-[30px] w-[30px]" src={ic_walletconnect} alt="" />
                <p className=" font-semibold text-accent">WalletConnect</p>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer bg-transparent">
            <label className="modal-box w-[375px] absolute top-[73px] right-[85px] rounded-[4px] bg-gradient-to-b from-primary to-[#1E1722] p-6" htmlFor="">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-white">My Wallet</h3>
                <h3 className="font-semibold text-white">{shortenAddress(address)}</h3>
              </div>
              <div className=" border-b border-primary mt-3 w-[324px]"></div>
              <div className=" w-full mt-[14px] flex justify-between items-center ">
                <div className=" flex justify-center items-center text-white font-semibold">
                  <img className="h-[32px] w-[32px] mr-[12px]" src={ic_eth} alt="" />
                  <p>ETH</p>
                </div>
                <div className=" flex flex-col justify-center items-end text-white font-semibold">
                  <p>{ethBalance}</p>
                  <p className=" text-sm font-normal text-neutral">
                    ${(ethBalance * (getCoinPrice?.ethereum.usd)).toFixed(3)} USD</p>
                </div>
              </div>
              <div className=" w-full mt-[14px] flex justify-between items-center ">
                <div className=" flex justify-center items-center text-white font-semibold">
                  <img className="h-[32px] w-[32px] mr-[12px]" src={ic_usdc} alt="" />
                  <p>USDC</p>
                </div>
                <div className=" flex flex-col justify-center items-end text-white font-semibold">
                  <p className=" text-base">{usdcBalance}</p>
                  {getCoinPrice && <p className=" text-sm font-normal text-neutral">
                    ${(usdcBalance * (getCoinPrice["usd-coin"].usd)).toFixed(3)} USD</p>}
                </div>
              </div>
              <button className="btn btn-primary relative w-[327px] h-[56px] mt-[14px] rounded flex justify-center items-center border-none normal-case" onClick={disconnectWallet}>
                <p className=" font-semibold text-accent">Disconnect</p>
              </button>
            </label>
          </label>
        </>
      )
      }
    </div >
  )
}

export default ModalWallet
