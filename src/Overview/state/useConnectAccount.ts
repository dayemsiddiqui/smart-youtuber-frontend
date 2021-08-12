import { useState } from "react";

export const useConnectAccount = () => {
  const [accountConnected, setAccountConnected] = useState(false);
  const connectAccount = () => {
    setAccountConnected(true);
  };
  return {
    accountConnected,
    connectAccount,
  };
};
