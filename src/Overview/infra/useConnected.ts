import { useServerApi } from "../../shared/infra/useServerApi";
import { useEffect, useState } from "react";
import { auth } from "../../Authentication";
import { useLoadDataAsync } from "../../shared/infra/useLoadDataAsync";

export const useConnected = () => {
  const { isUserConnected } = useServerApi();
  const { data, isLoading } = useLoadDataAsync(isUserConnected, {
    connected: false,
  });

  return {
    isConnected: data.connected,
    isLoading,
  };
};
