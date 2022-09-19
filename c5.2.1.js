// Преобразование xml в JS-объект

xmlText = `<list>
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


function xml_to_js_object() {
    const parser = new DOMParser();
    const xmlDOM = parser.parseFromString(xmlText, "text/xml");
    studentList = xmlDOM.querySelector("list");
    const list = new Array();
    const result = {list};
    let i = 0;
    while (true) {
      s = studentList.getElementsByTagName("student")[i]
      if (s === undefined) break;
      student_data = {
        name: s.querySelector("first").textContent + ' ' + s.querySelector("second").textContent,
        age: Number(s.querySelector("age").textContent),
        prof: s.querySelector("prof").textContent,
        lang: s.querySelector("name").getAttribute("lang")
      }
      list.push(student_data);
      i += 1;
    }
    
    console.log(result);
  }
