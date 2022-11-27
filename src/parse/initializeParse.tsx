import { initializeParse } from "@parse/react";

export const parseConnection = () => {
  initializeParse(
    process.env.REACT_APP_PARSE_LIVE_QUERY_URL as string,
    process.env.REACT_APP_PARSE_APPLICATION_ID as string,
    process.env.REACT_APP_PARSE_JAVASCRIPT_KEY as string
  );
};
