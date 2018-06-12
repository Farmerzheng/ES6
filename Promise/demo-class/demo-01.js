function job1(num) {
    return new Promise(function(resolve, reject) {
        console.log('job1')
            //job1 做完了
        if (num > 4) {
            resolve()
        }
    })
}

function job2() {
    console.log('job2')
}

job1(5).then(function() {
    job2()
})