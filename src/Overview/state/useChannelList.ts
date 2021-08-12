import { useEffect, useState } from "react";
import response from "../../utils/demo/tableData";

export const useChannelList = () => {
  const [page, setPage] = useState(1);
  const [channels, setChannels] = useState<any[]>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p: number) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setChannels(
      response.slice((page - 1) * resultsPerPage, page * resultsPerPage)
    );
  }, [page]);

  return {
    resultsPerPage,
    totalResults,
    channels,
    onPageChange,
  };
};
