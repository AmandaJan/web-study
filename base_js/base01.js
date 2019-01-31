// 基础1 ,了解变量,常量,块级变量,块级常量,全局变量,全局常量
// 1. 命名规则
// 首字母不能为数字
// 变量,常量可以为26个英文字母的任意一个,或者多个的组合  h ,  hw hhhkkk123
// 不可以为任何特殊字符,但是英文下划线除外
// 1.变量, 首字母小写,从第二个有语义的单词开始,首字母大写
var name 
var aaa
var _000kj
var nik000111
var hui__9092
var popo
var _name 
var bookName
// 2. 常量, 全部大写,每两个单词之间用下划线分割
const NAME_ZY
const o00_CO1111NTACT
const PO______PO
const __________DIRNAME
const IS_RMB
// 3.块级变量,块级常量
{
    let bookName = "一年级语文"
    // let, const 默认无法穿透中括号,var 可以穿透,尽可能不用var
}
console.log(bookName)
