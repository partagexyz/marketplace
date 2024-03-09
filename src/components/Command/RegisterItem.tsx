import { useState } from 'react';
import { useMbWallet } from '@mintbase-js/react';
import { execute, deployContract } from '@mintbase-js/sdk';

// name is the name of the store/contract you need to pass from the parent component.
// symbol min characters is 1 and max 5 and need to be ALPHANUMERIC characters.
// owner must be a valid near account address.

interface DeployContractArgs {
  name: string,
  owner: string,
  symbol: string,
}


const DeployContractUI = ({ name, owner, symbol }:DeployContractArgs) => {
  const { selector } = useMbWallet();
 
   const handleDeployContract = async (): Promise<void> => {
    const wallet = await selector.wallet();
    await execute(
          {wallet},
          deployContract({
          name: name,
          ownerId: owner,
          metadata: {
            symbol: symbol
          }
      })
    )
  };

  return (
    <div>
      <button onClick={handleDeployContract}>
        DeployContract with name= {name} and owner= {owner}
      </button>
    </div>
  );
};

export default DeployContractUI;