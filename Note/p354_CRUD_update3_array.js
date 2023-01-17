const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: { $in: ['박서방', '홍길동', '배트맨', 'Johndoe'] }
      // title: { $eq: '홍길동' }
      // title: /홍길동/
    },
    {
      $push: { // 배열에 추가 // 그외 $addToSet은 중복값 제외하며 푸시
        "something": { $each: [4, 5, 6] } // 스키마 미리 만들어 놔야함 추가잘됨
      }
    },
    { upsert: true, multi: true, new: true }
  ).lean()
  console.log(t)
}
main()
