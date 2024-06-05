import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
