import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

dayjs.locale(ja);

export const yyyymmdd = (date: Date) => {
  const formatDate = dayjs(date);
  return formatDate.format("YYYY-MM-DD");
};
