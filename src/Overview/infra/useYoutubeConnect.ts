import { useServerApi } from "../../shared/infra/useServerApi";

export const useYoutubeConnect = () => {
  const { apiClient } = useServerApi();
  const connect = async () => {
    const response = await apiClient.get("auth/connect");
    const url = response.data.url;
    window.location.replace(url);
    console.log({ response });
  };

  return {
    connect,
  };
};
