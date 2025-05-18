import { format } from "date-fns";

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const formatFullDate = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const getDateString = (date: Date | undefined): string => {
  return date ? format(date, "yyy-MM-dd") : "";
};

export const getTimeString = (date: Date | undefined): string => {
  return date ? format(date, "HH:mm") : "";
};
