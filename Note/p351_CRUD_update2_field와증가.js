const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
    }, // 전영역에 걸쳐 수정
    {
      $set: { code: 1 } // mongoose에 스키마가 1차로 되어있어야함
      // set으로 1로 수정 또는 필드와 값 추가
      // $inc: { code: 2 } // 2씩 증가 
    },
    { upsert: true, multi: true, new: true }
  ).lean()
  console.log(t)
}
main()
