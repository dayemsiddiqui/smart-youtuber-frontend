import React from "react";
import { useConnectAccount } from "../../Overview/state/useConnectAccount";
import { NoChannelFound } from "./NoChannelFound";
import { VideoList } from "./VideoList";

const VideosPage: React.FC<{}> = () => {
  const { accountConnected, connectAccount } = useConnectAccount();
  if (accountConnected) {
    return <VideoList />;
  } else {
    return <NoChannelFound connectAccount={connectAccount} />;
  }
};

export default VideosPage;
