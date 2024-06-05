import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  date?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
