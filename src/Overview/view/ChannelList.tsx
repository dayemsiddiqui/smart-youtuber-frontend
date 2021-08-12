import ChannelIcon from "../../assets/img/channel-icon.png";
import React from "react";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";
import { useChannelList } from "../state/useChannelList";

export const ChannelList: React.FC<{}> = () => {
  const { channels, totalResults, resultsPerPage, onPageChange } =
    useChannelList();
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Channel Name</TableCell>
            <TableCell>Total Videos</TableCell>
            <TableCell>Total Subscribers</TableCell>
            <TableCell>Action</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {channels.map((channel, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center text-sm">
                  <Avatar
                    className="hidden mr-3 md:block"
                    src={ChannelIcon}
                    alt="User image"
                  />
                  <div>
                    <p className="font-semibold">{channel.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {channel.job}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">$ {channel.amount}</span>
              </TableCell>
              <TableCell>
                <Badge type={channel.status}>{channel.status}</Badge>
              </TableCell>
              <TableCell>
                <span className="text-sm">
                  {new Date(channel.date).toLocaleDateString()}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination
          totalResults={totalResults}
          resultsPerPage={resultsPerPage}
          label="Table navigation"
          onChange={onPageChange}
        />
      </TableFooter>
    </TableContainer>
  );
};
