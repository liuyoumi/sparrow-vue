export const useAppStore = defineStore("app", {
  state: () => {
    return {
      theme: {
        colorPrimary: "#0052d9",
      },
      collapsed: false,
    };
  },
});