import React, { useEffect, useState } from "react";
import { DataTable } from "../../components/DataTable";
import ChannelListData from "../../utils/demo/ChannelListData";
import { Avatar, Badge, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../assets/img/channel-icon.png";
import { AvatarWithName } from "../../components/AvatarWithName/view/AvatarWithName";
import { useChannels } from "../infra/useChannels";
import { Loader } from "../../components/Loader";
import { useServerApi } from "../../shared/infra/useServerApi";
import { ListChannelResponse } from "smart-youtuber-client-sdk/api/api";

export const ChannelList: React.FC<{}> = () => {
  const { channels, isPending } = useChannels();
  console.log({ channels, isPending });
  return (
    <Loader isLoading={isPending}>
      <DataTable
        data={channels}
        config={{
          columns: [
            {
              columnLabel: "Channel Name",
              render: (row) => (
                <TableCell>
                  <AvatarWithName
                    name={row.name}
                    ImageIcon={ChannelIcon}
                    subtitle={row.name}
                  />
                </TableCell>
              ),
            },
            {
              columnLabel: "Total Subscribers",
              render: (row) => (
                <TableCell>
                  <span className="text-sm">{row.totalSubscribers}</span>
                </TableCell>
              ),
            },
            {
              columnLabel: "Total Videos",
              render: (row) => (
                <TableCell>
                  <Badge type="primary">{row.totalVideos}</Badge>
                </TableCell>
              ),
            },
            {
              columnLabel: "Actions",
              render: (row) => (
                <TableCell>
                  <span className="text-sm">
                    {new Date().toLocaleDateString()}
                  </span>
                </TableCell>
              ),
            },
          ],
        }}
      />
    </Loader>
  );
};
