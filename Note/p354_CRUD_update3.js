const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
    },
    {
      // $set:{ // 값을 입력
      $inc:{ // 값을 증가.
       "code": 3
    }
  },
    { upsert: true, multi: true, new: true }
  ).lean()
  console.log(t)
}
main()
