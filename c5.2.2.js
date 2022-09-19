// Преобразование JSON в JS-объект

jsonText = `
{
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
   }
`

function json_to_JSObject() {
    jsOBJ_from_JSON = JSON.parse(jsonText);
    arr = jsOBJ_from_JSON['list'];
    list = new Array();
    result = {list};
    for (var i = 0; i < arr.length; i++) {
        data = {
            name: arr[i]['name'],
            age: Number(arr[i]['age']),
            prof: arr[i]['prof']
        }
        list.push(data);
    }
    console.log(result);
}
