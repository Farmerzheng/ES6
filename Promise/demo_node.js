

        // 在数据库users集合中查找userId 对应的用户
        let findUserPromise = new Promise((resolve, reject) => {
            if (userId) {
                User.find({ "userId": userId })
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
                        } else {
                            let data = {
                                goodDoc: goodDoc,
                                userDoc: userDoc
                            }
                            // 只能有一个参数
                            resolve(data)
                        }
                    })
                });

            })
            .then((data) => {
                // 将商品模型插入用户模型的cartList列表

                // 假设商品数量是1
                data.goodDoc.productNum = '10000';
                // 假设商品被选中
                data.goodDoc.checked = '1';

                // 往用户模型的cartList数组中插入选中的商品模型
                data.userDoc['0'].cartList.push(data.goodDoc)
                    // 保存插入的商品模型模型
                data.userDoc['0'].save(function(err, doc) {
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




 // router.post('/addCart', function(req, res, next) {

 //   // 获取前台传过来的 userId 和 productId

 //   // 获取post请求的参数
 //   // post 请求的参数在body中
 //   let userId = req.body.params.userId;

 //   let productId = req.body.params.productId;

 //   // 在数据库users集合中查找userId 对应的用户
 //   User.find({ "userId": userId })
 //     .exec(function(err, userDoc) {
 //       //输入以下网址进行查询 http://localhost:3000/goods/?page=1&perPage=4&sort=1
 //       // console.log(doc)

 //       if (err) {
 //         res.json({
 //           status: "1",
 //           error: err.message
 //         })
 //       } else {

 //         // 此处拿到了对应用户的文档

 //         // 将商品添加到用户文档的cartList列表中

 //         // 在Goods模型中通过productId找到对应的商品

 //         Good.findOne({ 'productId': productId }, function(err, goodDoc) {

 //           if (err) {
 //             res.json({
 //               status: "1",
 //               error: err.message
 //             })
 //           } else {
 //             // 假设商品数量是1
 //             goodDoc.productNum = '10000';
 //             // 假设商品被选中
 //             goodDoc.checked = '1';
 //             // 往用户模型的cartList数组中插入选中的商品模型
 //             userDoc['0'].cartList.push(goodDoc)
 //             // 保存插入的商品模型模型
 //             userDoc['0'].save(function(err, doc) {
 //               if (err) {

 //                 res.json({
 //                   status: "1",
 //                   error: err.message
 //                 })
 //               } else {
 //                 // 将插入成功的信息返回给前端
 //                 res.json({
 //                   status: "0",
 //                   message: '插入成功',
 //                   result: ''
 //                 })
 //               }
 //             })
 //           }

 //         })

 //       }

 //     })

 // })