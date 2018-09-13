/**
 * 功能：工程初始化
 * 作者：安超
 * 日期： 2018/5/11
 */

import $ from 'jquery'

// 初始化工程
const projectInit = function (oContainer, callback = function () {}) {
    $(oContainer).html('<div>ok</div>')
    callback()
}

export default projectInit
