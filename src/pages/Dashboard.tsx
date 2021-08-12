import React from "react";
import { OverviewPage } from "../Overview";
import { ConnectYoutubeAccount } from "../AccountSetup/view/ConnectYoutubeAccount";

const Dashboard: React.FC<{}> = () => {
  const isAccountConnected = false;
  if (isAccountConnected) {
    return <OverviewPage />;
  } else {
    return <ConnectYoutubeAccount />;
  }
};

export default Dashboard;
