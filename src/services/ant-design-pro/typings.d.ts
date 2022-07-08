// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: string;
    phone?: string;
    address?: string;
    userStatus?: number;
    userRole?: number;
    cardId?: string;
    createTime?: Date;
    cost?: number;
    sectionId?: string;
    sickbedId?: string;
    doctor?: string;
    symptom?: string;
    age?: string;
    count?: string;
    medicine?: string;
  };

  /**
   * 通用返回类
   */
  type BaseResponse<T> = {
    code?: number;
    data: T;
    message?: string;
    description?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccunt?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccunt?: string;
    userPassword?: string;
    checkPassword?: string;
    cardId?: string;
    type?: string;
  };

  type SubmitForm = {
    id?: number;
    username?: string;
    userAccount?: string;
    gender?: string;
    cardId?: string;
    address?: string;
    phone?: string;
    // userRole?: number;
    cost?: number;
    sectionId?: string;
    sickbedId?: string;
    doctor?: string;
    symptom?: string;
    age?: string;
    count?: string;
    medicine?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
