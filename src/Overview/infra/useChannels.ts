import { useServerApi } from "../../shared/infra/useServerApi";
import { useLoadDataAsync } from "../../shared/infra/useLoadDataAsync";

export const useChannels = () => {
  const { channelList } = useServerApi();
  const { data, isLoading } = useLoadDataAsync(channelList, {
    items: [],
    nextPageToken: "",
    prevPageToken: "",
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0,
    },
  });

  return {
    channels: data.items,
    isLoading,
  };
};
