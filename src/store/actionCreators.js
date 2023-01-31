// 封装redux数据修改
import { CHANGE_USER_MSG } from "./actionTypes";

export const getChangeUserMsg = (value) => ({
  type: CHANGE_USER_MSG,
  value,
});
