export interface IRoom {
  id: number;
  name: string;
  owner: number;
  access_code: string;
}

export interface IJoin {
  user: number;
  room: number;
}
