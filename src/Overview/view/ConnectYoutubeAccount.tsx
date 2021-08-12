import React from "react";
import { ReactComponent as AccountSetupIllustraion } from "../../assets/illustrations/accountSetup.svg";

import { Button } from "@windmill/react-ui";

export const ConnectYoutubeAccount: React.FC<{ connectAccount: () => void }> =
  ({ connectAccount }) => (
    <>
      <div className="py-16 mx-auto">
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="text-5xl text-center dark:text-white">
            Get Started With Smart Youtuber
          </h1>
          <p className="text-xl text-center mx-32 dark:text-white">
            Setup your account to learn what your subscribers are demanding.
            Identify feedback and suggestions from your subscribers and filter
            out the spam.
          </p>
          <Button onClick={connectAccount} className="max-w-xs mx-auto">
            Connect to Youtube
          </Button>
          <AccountSetupIllustraion className="mx-auto" />
        </div>
      </div>
    </>
  );
