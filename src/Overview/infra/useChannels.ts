import { useServerApi } from "../../shared/infra/useServerApi";
import { useEffect, useState } from "react";
import { ListChannelResponse } from "smart-youtuber-client-sdk/api/api";

export const useChannels = () => {
  const { channelList } = useServerApi();
  const [channels, setChannels] = useState<ListChannelResponse[]>([]);
  useEffect(() => {
    async function fetchChannelList() {
      const response = await channelList();
      const channelsResponse = response.data;
      setChannels(channelsResponse);
    }
    fetchChannelList();
  }, []);
  return {
    channels,
  };
};
