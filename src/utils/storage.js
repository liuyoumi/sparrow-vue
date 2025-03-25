import WebStorageCache from "web-storage-cache";

export const CACHE_KEY = {
  PROFILE: "profile",
};

const storage = (() => {
  return new WebStorageCache({storage: "localStorage"});
})();

export default storage;