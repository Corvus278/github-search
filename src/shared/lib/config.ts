const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env var ${key} is required`);
  }

  return process.env[key] || "";
};

export const REACT_APP_ROOT_URL = getEnvVar("REACT_APP_ROOT_URL");
