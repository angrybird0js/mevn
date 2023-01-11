const Photo = require('./p346_CRUD_ori.js')

const main = async () => {
  const t = await Photo.find(
    {
      title: { $eq: '홍길동' }
    },
    { _id: 0 }
  ).lean()
  console.log(t)
}
main()
