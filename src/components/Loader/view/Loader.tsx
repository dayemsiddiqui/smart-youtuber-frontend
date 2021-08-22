import React from "react";

export const Loader: React.FC<{ isLoading: boolean; children: JSX.Element }> =
  ({ isLoading, children }): JSX.Element => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return children;
  };
