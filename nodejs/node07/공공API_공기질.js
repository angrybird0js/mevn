const request = require('request')

let key = process.env.pkey

const url =
  'http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation?serviceKey=' +
  key +
  '&pageNo=1&numOfRows=10&resultType=json'
console.log(url)
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
  console.log(
    `[${_.site}]\n 일산화탄소:${_.co}\n 오존:${_.o3}\n 초미세먼지:${_.pm25}\n 미세먼지:${_.pm10}\n`
  )
})
