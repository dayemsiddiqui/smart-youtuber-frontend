import React from "react";
import { DataTable } from "../../components/DataTable";
import ChannelListData from "../../utils/demo/ChannelListData";
import { Avatar, Badge, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../assets/img/channel-icon.png";

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
                <div className="flex items-center text-sm">
                  <Avatar
                    className="hidden mr-3 md:block"
                    src={ChannelIcon}
                    alt="User image"
                  />
                  <div>
                    <p className="font-semibold">{row.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {row.job}
                    </p>
                  </div>
                </div>
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
