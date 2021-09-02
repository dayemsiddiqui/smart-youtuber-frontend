import { useServerApi } from "../../shared/infra/useServerApi";
import { useAuthenticatedRequest } from "../../shared/infra/useAuthenticatedRequest";
import { useQuery } from "react-query";

export const useSpam = () => {
  const { spamList } = useServerApi();
  const { data: response, isLoading } = useQuery("spamList", spamList);
  return {
    spam: response ? response.data : [],
    isLoading,
  };
};
