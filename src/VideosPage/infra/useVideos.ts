import { useServerApi } from "../../shared/infra/useServerApi";
import { useEffect, useState } from "react";
import {
  ListChannelResponse,
  ListVideoResponse,
} from "smart-youtuber-client-sdk/api/api";
import { useLoadDataAsync } from "../../shared/infra/useLoadDataAsync";

export const useVideos = () => {
  const { videoList } = useServerApi();
  const { data, isLoading } = useLoadDataAsync(videoList, []);
  return {
    videos: data,
    isLoading,
  };
};
