let source = 80
if (source < 60) {
    console.log("坏学生")
} else if (source < 100 && source > 60) {
    console.log("良好成绩")
} else {
    console.log("您的分数有误")
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
}
// ------------------------------------------------
if (book == "语文书") {
    console.log("我拿的是语文书")
    book = "我喜欢夏天的星星"
    console.log(book)
} else if (book == "数学书") {
    console.log("我拿的是数学书")
} else {
    console.log("我是什么都没有匹配到")

    
}






