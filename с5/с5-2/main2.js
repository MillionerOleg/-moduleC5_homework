const jsonParser = new DOMParser()
const jsonDoc = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`

const info = JSON.parse(jsonDoc)
const list = info.list

result = {
    'list':[
        list[0],
        list[1]
    ]
}
console.log(result)

