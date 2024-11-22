export function getConfig() {
  // Retrieve values from environment variables
  const audience =
    process.env.REACT_APP_AUTH0_AUDIENCE &&
    process.env.REACT_APP_AUTH0_AUDIENCE !== "YOUR_API_IDENTIFIER"
      ? process.env.REACT_APP_AUTH0_AUDIENCE
      : null;

  return {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    ...(audience ? { audience } : null),
  };
}
