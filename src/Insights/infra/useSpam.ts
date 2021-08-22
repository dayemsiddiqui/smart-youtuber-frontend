import { useServerApi } from "../../shared/infra/useServerApi";
import { useLoadDataAsync } from "../../shared/infra/useLoadDataAsync";

export const useSpam = () => {
  const { spamList } = useServerApi();
  const { data, isLoading } = useLoadDataAsync(spamList, []);
  return {
    spam: data,
    isLoading,
  };
};
