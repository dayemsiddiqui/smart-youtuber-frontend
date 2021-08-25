import React from "react";
import { OverviewPage, ConnectYoutubeAccount } from "../index";
import { useYoutubeConnect } from "../infra/useYoutubeConnect";

const Dashboard: React.FC<{}> = () => {
  const { isConnected, connect } = useYoutubeConnect();
  return (
    <>
      isConnected ? <OverviewPage />
      : <ConnectYoutubeAccount connect={connect} />
    </>
  );
};

export default Dashboard;
