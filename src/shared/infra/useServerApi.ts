import {
  DefaultApiFactory,
  DefaultApiFp,
} from "smart-youtuber-client-sdk/api/api";
export const useServerApi = () => {
  if (!process.env.REACT_APP_SERVER_BASE_URL) {
    throw new Error("Server Base URL undefined");
  }
  const baseURL: string = process.env.REACT_APP_SERVER_BASE_URL;
  const { channelsControllerList } = DefaultApiFactory({
    basePath: baseURL,
    isJsonMime(mime: string): boolean {
      return true;
    },
  });
  return {
    channelList: channelsControllerList,
  };
};
