import { CHANGE_USER_MSG } from "./actionTypes";
//数据
const person = {
  name: "zhangsan",
  age: 18,
};
// reducer导出一个函数，两个参数state和action
export const user = (state = person, action) => {
  //修改action
  switch (action.type) {
    case CHANGE_USER_MSG:
      return { ...state, name: action.value };
  }
  //导出state
  return state;
};
