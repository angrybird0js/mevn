const async1 = param => {
    return new Promise((resolve, reject) =>{
        resolve(param*2)
    })
}
const async2 = param => {
    return new Promise((resolve, reject) =>{
        resolve(param*2)
    })
}
async1(1).then(async2).then(result=>{
    throw '에러';
    console.log(result)
}
,reason=>{console.log('이 promise는 '+reason+'으로 종료 되었습니다.')})


// .then(result,reason)