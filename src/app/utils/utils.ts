export const getStatusName = (id: string) => {
  switch (id) {
    case "notstarted":
      return "未着手";
    case "progress":
      return "進行中";
    case "done":
      return "完了";
    default:
      break;
  }
};
