import React from "react";
import { DataTable } from "../../components/DataTable";
import ChannelListData from "../../utils/demo/ChannelListData";
import { Avatar, Badge, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../assets/img/channel-icon.png";
import { AvatarWithName } from "../../components/AvatarWithName/view/AvatarWithName";
import { useChannels } from "../infra/useChannels";

export const ChannelList: React.FC<{}> = () => {
  const { channels } = useChannels();
  console.log({ channels });
  return channels.length !== 0 ? (
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
  ) : (
    <div>Loading..</div>
  );
};
