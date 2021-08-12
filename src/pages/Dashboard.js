import React from "react";
import PageTitle from "../components/Typography/PageTitle";

import { OverviewStats } from "../Overview/view/OverviewStats";
import { ChannelList } from "../Overview/view/ChannelList";

function Dashboard() {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <OverviewStats />
      <ChannelList />
    </>
  );
}

export default Dashboard;
