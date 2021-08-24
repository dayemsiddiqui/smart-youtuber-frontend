import React from "react";
import { OverviewPage, ConnectYoutubeAccount } from "../index";
import { useConnectAccount } from "../state/useConnectAccount";

const Dashboard: React.FC<{}> = () => {
  const { accountConnected, connectAccount } = useConnectAccount();
  if (accountConnected) {
    return <OverviewPage />;
  } else {
    return <ConnectYoutubeAccount />;
  }
};

export default Dashboard;
