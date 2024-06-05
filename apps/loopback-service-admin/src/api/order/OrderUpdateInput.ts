import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  date?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
