import { IUser } from "@/interfaces";

export interface IAuthToken {
  access: string;
  refresh: string;
}

export interface IUsersMe extends IUser {}
