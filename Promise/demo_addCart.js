// 加入购物车
function add_cart() {
    // 定义二级路由
    router.post('/addCart', function(req, res, next) {

        // 获取前台传过来的 userId 和 productId

        // 获取post请求的参数
        // post 请求的参数在body中
        let userId = req.body.params.userId;

        let productId = req.body.params.productId;



        // 在数据库users集合中查找userId 对应的用户
        let findUserPromise = new Promise((resolve, reject) => {
            if (userId) {
                User.findOne({ "userId": userId })
                    .exec(function(err, userDoc) {
                        if (err) {
                            res.json({
                                status: "1",
                                error: err.message
                            })
                        } else {

                            resolve(userDoc)
                        }
                    })
            }
        });

        findUserPromise
            .then(function(userDoc) {
                // 在Goods模型中通过productId找到对应的商品模型
                return new Promise((resolve, reject) => {
                    Good.findOne({ 'productId': productId }, function(err, goodDoc) {
                        if (err) {
                            res.json({
                                status: "1",
                                error: err.message
                            })
                        } else if (goodDoc) {
                            let data = {
                                goodDoc: goodDoc,
                                userDoc: userDoc
                            }
                            resolve(data)
                        }
                    })
                });

            })
            .then((data) => {
                // 将商品模型插入用户模型的cartList列表

                let haveGoodDocBoolean = false;

                //  判断用户模型的cartList列表有没有商品模型
                for (let i = 0; i < data.userDoc.cartList.length; i++) {
                    // console.log(data.userDoc.cartList[i])
                    // console.log(data.userDoc.cartList[i].productId)
                    if (data.userDoc.cartList[i].productId == productId) {
                        haveGoodDocBoolean = true;
                        // 有
                        // cartList列表的商品数量自增
                        // console.log(data.userDoc.cartList[i].productNum)
                        // console.log(parseInt(data.userDoc.cartList[i].productNum) + 1)

                        data.userDoc.cartList[i].productNum = parseInt(data.userDoc.cartList[i].productNum) + 1;

                    }
                }

                // 如果cartList列表有此商品模型，直接返回
                if (!haveGoodDocBoolean) {
                    addGoodDocToUserDocCartList();
                }

                function addGoodDocToUserDocCartList() {
                    // 假设商品数量是1
                    data.goodDoc._doc.productNum = 1;

                    // 假设商品被选中
                    data.goodDoc._doc.checked = 1;

                    // 往用户模型的cartList数组中插入选中的商品模型
                    data.userDoc.cartList.push(data.goodDoc);

                }

                // 保存插入的商品模型模型
                data.userDoc.save(function(err, doc) {
                    if (err) {

                        res.json({
                            status: "1",
                            error: err.message
                        })
                    } else {
                        // 将插入成功的信息返回给前端
                        res.json({
                            status: "0",
                            message: '插入成功',
                            result: ''
                        })
                    }
                })


            })
    })
}