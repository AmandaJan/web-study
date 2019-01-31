// 1. 执行逻辑
// 顺序执行逻辑:一行一行一行的往下面执行
let num = 100
num = num + 1
console.log(num)
// 选择执行逻辑
// 语法1 if else
let a = 100
if (a > 50) {
    console.log(a + "大于50")
} else {
    console.log(a + "不大于50")
}
// 语法2 switch case
let book = "语文书"
switch (book) {
    case "语文书":
        console.log("我拿的是语文书")
        book = "我喜欢夏天的星星"
        console.log(book)
        break
    case "数学书":
        console.log("我拿的是数学书")
        break
    default:
        console.log("我是什么都没有匹配到")
}
// 循环执行逻辑
for (let i = 0; i < 10; i = i + 1) {
    console.log("我是第" + i + "遍输出")
    // 所有for循环内部的代码完毕之后,必定再执行下面的代码
    // 中断循环条件的催化剂
}
let j = 0
while (j < 10) {
    console.log("我是第" + j + "遍输出")
    // 所有while循环内部的代码完毕之后,必定再执行下面的代码,
    // 中断循环条件的催化剂
    j++ // j = j + 1
}

do { } while (true)

