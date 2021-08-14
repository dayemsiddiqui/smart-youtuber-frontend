import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import { DataTable } from "../../components/DataTable";
import { TableCell } from "@windmill/react-ui";
import { AvatarWithName } from "../../components/AvatarWithName";
import ChannelIcon from "../../assets/img/channel-icon.png";

export const VideoList: React.FC<{}> = () => (
  /**
     * Video thumbnail
     Video title
     Channel Name
     Analyse / View Insights
     Likes
     Dislikes
     */

  <>
    <PageTitle>My Videos</PageTitle>
    <DataTable
      data={[{}]}
      config={{
        columns: [
          {
            columnLabel: "Title",
            render: () => (
              <TableCell>
                <AvatarWithName
                  name="productivity tips"
                  ImageIcon={ChannelIcon}
                />
              </TableCell>
            ),
          },
          {
            columnLabel: "Channel Name",
            render: () => <TableCell> Help </TableCell>,
          },
          {
            columnLabel: "Likes",
            render: () => <TableCell> Help </TableCell>,
          },
          {
            columnLabel: "Dislikes",
            render: () => <TableCell> Help </TableCell>,
          },
          {
            columnLabel: "Action",
            render: () => <TableCell> Help </TableCell>,
          },
        ],
      }}
    />
  </>
);
