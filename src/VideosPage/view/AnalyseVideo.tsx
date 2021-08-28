import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import { InputWithButton } from "../../components/Forms/InputWithButton";
import { DataTable } from "../../components/DataTable";
import { Button, TableCell } from "@windmill/react-ui";

export const AnalyseVideo: React.FC<{}> = ({}) => (
  <>
    <PageTitle>Video Analysis</PageTitle>
    <InputWithButton
      buttonLabel="Analyse Video"
      placeholder="https://www.youtube.com/watch?v=fbEubYDGLYY"
      inputLabel="Video URL:"
      onClick={() => {}}
    />
    <div className="py-16">
      <h3 className="my-6 text-lg font-semibold text-gray-700 dark:text-gray-200">
        My Jobs
      </h3>
      <DataTable
        data={[
          {
            jobID: "asdasd",
            status: "pending",
            meta: {
              videoID: "someVideoID",
              videoTitle: "videoName",
              channelName: "channelName",
              channelID: "channelID",
            },
          },
        ]}
        config={{
          columns: [
            {
              columnLabel: "JobID",
              render: (job) => <TableCell>{job.jobID}</TableCell>,
            },
            {
              columnLabel: "Video Name",
              render: (job) => <TableCell> {job.meta.videoTitle} </TableCell>,
            },
            {
              columnLabel: "Channel Name",
              render: (job) => <TableCell> {job.meta.channelName} </TableCell>,
            },
            {
              columnLabel: "Status",
              render: (job) => <TableCell> {job.status} </TableCell>,
            },
            {
              columnLabel: "Action",
              render: () => (
                <TableCell>
                  <Button size="small"> View Results </Button>{" "}
                </TableCell>
              ),
            },
          ],
        }}
      />
    </div>
  </>
);
