import { get, post } from "./reset.js";

// 登录接口
export const reqLogin = (username, password) =>
  post("/login", { username, password });

// 获取分类列表
export const reqCategorys = (parentId = 0) =>
  get("/manage/category/list", { parentId });

// 添加分类
export const reqAddCategorys = (parentId, categoryName) =>
  post("/manage/category/add", { parentId, categoryName });
