function job1(param) {
    return new Promise(function(resolve, reject) {
        if (param.userID == '123') {
            //找到用户模型
            param.userDoc = 'userDoc'
            resolve(param)
        }
    })
}

job1({
    userID: '123',
    productID: 2352
}).then(function(param) {

    return new Promise(function(resolve, reject) {
        if (param.productID == '2352') {
            //找到商品模型   
            param.productDoc = 'productDoc'
            resolve(param)
        }
    })

}).then(function(param) {
    console.log(`将${param.productDoc}添加到${param.userDoc}`)
})