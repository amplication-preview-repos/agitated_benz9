import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  date: Date | null;
  id: string;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
