const Photo = require('./p346_CRUD_ori.js')
const main = async () => {
  const _data = {
    albumId: 12012,
    id: 312,
    title: '홍길남',
    url: 'google.com',
    tumbnailUrl: 'https://naver.com'
  }
  const new_photo = new Photo(_data)
  const t = await new_photo.save()
  console.log(t)
}
main()
