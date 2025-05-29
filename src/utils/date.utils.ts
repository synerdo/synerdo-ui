import { format, parse, isValid, parseISO } from "date-fns";

export const formatDate = (dateStr: string | null): string | null => {
  if (!dateStr) {
    return null;
  }

  const date = parseISO(dateStr);

  return isValid(date) ? format(date, "MMM d") : null;
};

export const formatFullDate = (
  dateStr: string | null,
  timeStr: string | null
): string | null => {
  const fullDateStr = timeStr ? `${dateStr}T${timeStr}` : dateStr;

  if (!fullDateStr) {
    return null;
  }

  const date = parseISO(fullDateStr);

  return isValid(date) ? format(date, "MMM d, HH:mm") : null;
};

export const getDateStr = (date?: Date): string | null => {
  return date && isValid(date) ? format(date, "yyyy-MM-dd") : null;
};

export const getTimeStr = (date?: Date): string | null => {
  return date && isValid(date) ? format(date, "HH:mm") : null;
};

export function parseDueDateTime(
  dueDateStr?: string | null,
  dueTimeStr?: string | null
): {
  dueToDate: Date | null;
  dueToTime: Date | null;
} {
  const dueToDate = dueDateStr
    ? parse(dueDateStr, "yyyy-MM-dd", new Date())
    : null;

  const dueToTime =
    dueDateStr && dueTimeStr
      ? parse(
          `${dueDateStr} ${dueTimeStr}`,
          "yyyy-MM-dd HH:mm:ss",
          new Date()
        )
      : null;

  return {
    dueToDate: isValid(dueToDate) ? dueToDate : null,
    dueToTime: isValid(dueToTime) ? dueToTime : null,
  };
}
