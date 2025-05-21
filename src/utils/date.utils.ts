import { format } from "date-fns";

export const isValidDate = (dateStr: string): boolean => {
  const date = new Date(dateStr);

  return !isNaN(date.getTime());
};

export const formatDate = (dateStr: string): string | null => {
  if (!isValidDate(dateStr)) {
    return null;
  }

  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const formatFullDate = (dateStr: string): string | null => {
  if (!isValidDate(dateStr)) {
    return null;
  }

  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const getDateString = (date: Date | undefined): string | null => {
  return date ? format(date, "yyy-MM-dd") : null;
};

export const getTimeString = (date: Date | undefined): string | null => {
  return date ? format(date, "HH:mm") : null;
};
