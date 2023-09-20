import { icons } from "../data/enums.ts";

export interface DateAndHoliday {
  date: Date;
  holiday: string;
  icon: icons | null;
}
