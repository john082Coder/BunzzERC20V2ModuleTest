import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getErc20V2Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc20V2;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const mint = async (erc20V2Contract, to, amount, account) => {
  return erc20V2Contract.methods.mint(to, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const pause = async (erc20V2Contract, account) => {
  return erc20V2Contract.methods.pause().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const unpause = async (erc20V2Contract, account) => {
  return erc20V2Contract.methods.unpause().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}



