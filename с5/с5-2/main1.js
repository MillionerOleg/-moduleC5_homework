const parser = new DOMParser()
const XMLDoc = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`

const pasport = parser.parseFromString(XMLDoc, "text/xml")

const listNode = pasport.querySelector("list")
const studentNode = pasport.querySelector("student")
const nameNode = studentNode.querySelector("name")
const firstNode = nameNode.querySelector("first")
const secondNode = nameNode.querySelector("second")
const ageNode = studentNode.querySelector("age")
const profNode = studentNode.querySelector("prof")

const studentNode2 = listNode.lastElementChild
const nameNode2 = studentNode2.querySelector("name")
const firstNode2 = nameNode2.querySelector("first")
const secondNode2 = nameNode2.querySelector("second")
const ageNode2 = studentNode2.querySelector("age")
const profNode2 = studentNode2.querySelector("prof")

result = {
    list: [
        {name: nameNode.textContent, age: ageNode.textContent, prof: profNode.textContent, lang: nameNode.getAttribute('lang')},
        {name: nameNode2.textContent, age: ageNode2.textContent, prof: profNode2.textContent, lang: nameNode2.getAttribute('lang')}
    ]
}
console.log(result)

