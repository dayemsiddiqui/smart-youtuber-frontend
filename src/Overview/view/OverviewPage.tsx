import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import { OverviewStats } from "./OverviewStats";
import { ChannelList } from "./ChannelList";

export const OverviewPage: React.FC<{}> = () => (
  <>
    <PageTitle>Dashboard</PageTitle>
    <OverviewStats />
    <ChannelList />
  </>
);

export default OverviewPage;
