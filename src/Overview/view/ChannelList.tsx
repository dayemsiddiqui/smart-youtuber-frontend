import React from "react";
import { DataTable } from "../../components/DataTable";
import ChannelListData from "../../utils/demo/ChannelListData";
import { Avatar, Badge, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../assets/img/channel-icon.png";
import { AvatarWithName } from "../../components/AvatarWithName/view/AvatarWithName";

export const ChannelList: React.FC<{}> = () => {
  return (
    <DataTable
      data={ChannelListData}
      config={{
        columns: [
          {
            columnLabel: "Channel Name",
            render: (row) => (
              <TableCell>
                <AvatarWithName
                  name={row.name}
                  ImageIcon={ChannelIcon}
                  subtitle={row.job}
                />
              </TableCell>
            ),
          },
          {
            columnLabel: "Total Subscribers",
            render: (row) => (
              <TableCell>
                <span className="text-sm">{row.amount}</span>
              </TableCell>
            ),
          },
          {
            columnLabel: "Total Videos",
            render: (row) => (
              <TableCell>
                <Badge type={row.status}>{row.status}</Badge>
              </TableCell>
            ),
          },
          {
            columnLabel: "Actions",
            render: (row) => (
              <TableCell>
                <span className="text-sm">
                  {new Date(row.date).toLocaleDateString()}
                </span>
              </TableCell>
            ),
          },
        ],
      }}
    />
  );
};
