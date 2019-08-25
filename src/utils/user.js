/*
 * @Description: 用户工具类
 * @Author: leekwe
 * @Date: 2019-08-18 11:34:47
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-25 18:00:29
 */

/**
 *  当前用户对象
 */
export const currentUser = ()=>{
    return JSON.parse(localStorage.getItem('user')).data;
}
/**
 *  当前用户ID
 */
export const currentUserId = ()=>{
    return currentUser().id;
}

/**
 *  当前用户name
 */
export const currentUserName = ()=> {
    return currentUser().username;
}
/**
 *  目标聊天用户对象
 */
export const toUser = ()=>{
    return JSON.parse(localStorage.to);
}
/**
 *  目标聊天ID
 */
export const toUserId = ()=>{
    return toUser().id;
}

/**
 *  目标聊天用户name
 */
export const toUserName = ()=> {
    return toUser().name;
}