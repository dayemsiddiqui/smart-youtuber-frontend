import React from "react";
import { ReactComponent as AccountSetupIllustraion } from "../../assets/illustrations/accountSetup.svg";

import { Button } from "@windmill/react-ui";
import { ApplicationHero } from "../../components/ApplicationHero";
import { useYoutubeConnect } from "../infra/useYoutubeConnect";

export const ConnectYoutubeAccount: React.FC<{ connect: () => any }> = ({
  connect,
}) => {
  return (
    <ApplicationHero
      title="Get Started With Smart Youtuber"
      description="Setup your account to learn what your subscribers are demanding.
            Identify feedback and suggestions from your subscribers and filter
            out the spam."
    >
      <Button onClick={connect} className="max-w-xs mx-auto">
        Connect to Youtube
      </Button>
      <AccountSetupIllustraion className="mx-auto" />
    </ApplicationHero>
  );
};
