


/**
 * 服务器回复数据
 */
export interface Result<T = any> {
  code: number;
  msg: string;
  data: T;
}


/**
 * 分页请求
 * sort=firstname&srot=lastname,desc表示按firstname正序排序排列基础上按lastname倒序排列
 */
export interface PagerQueryData {
  page: number
  size: number
  sort: string
  [prop: string]: any
}


/**
 * 分页服务回复
 */
export interface ResponseData<T = any> {
  // 数据
  content: Array<T>,
  // 总个数
  totalElements: number
  // 总页数
  totalPages: number
}


/**
 * 分页数据结果
 */
export interface PagerResponseData<T> extends Result<ResponseData<T>>{

}
