const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: { $in: ['박서방', '홍길동', '배트맨', 'Johndoe'] }
      // title: { $eq: '홍길동' }
      // title: /홍길동/
    },
    {
       "something": { $each: [1, 2, 3] } 
    }
    // { upsert: true, multi: true, new: true }
  ).lean()
  console.log(t)
}
main()
