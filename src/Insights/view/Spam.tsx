import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import { DataTable } from "../../components/DataTable";
import { Button, TableCell } from "@windmill/react-ui";
import ChannelIcon from "../../assets/img/channel-icon.png";
import { AvatarWithName } from "../../components/AvatarWithName/view/AvatarWithName";

const Spam: React.FC<{}> = () => {
  const TextCell = (text: string) => (
    <TableCell className="max-w-xl">
      <div className="truncate">
        <div className="truncate">{text}</div>
      </div>
    </TableCell>
  );
  return (
    <>
      <PageTitle>Spam</PageTitle>
      <DataTable
        data={[{}]}
        config={{
          columns: [
            {
              columnLabel: "Username",
              render: () => (
                <TableCell>
                  <AvatarWithName
                    name="dayemsiddiqui"
                    ImageIcon={ChannelIcon}
                  />
                </TableCell>
              ),
            },
            {
              columnLabel: "Comment",
              render: () =>
                TextCell(
                  "Hi This is a very mean comment. Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment Hi This is a very mean comment"
                ),
            },
            {
              columnLabel: "Likes",
              render: () => TextCell("23"),
            },
            {
              columnLabel: "Dislikes",
              render: () => TextCell("12"),
            },

            {
              columnLabel: "Actions",
              render: () => (
                <TableCell className="flex flex-row gap-2">
                  <Button size="small">Detailed View </Button>
                  <Button size="small">Delete </Button>
                  <Button size="small"> Not Spam </Button>
                </TableCell>
              ),
            },
          ],
        }}
      />
    </>
  );
};

export default Spam;
