let data = [
  {
    "id": "1",
    "type": "爬山",
    "time": "七八岁",
    "imgUrl": "/static/imgs/tus/1.jpg",
  },
  {
    "id": "2",
    "type": "爬山",
    "time": "七八岁",
    "imgUrl": "/static/imgs/tus/1.jpg",
  }
]
let str = {
  "id": "2",
  "type": "爬山",
  "time": "七八岁",
  "imgUrl": "/static/imgs/tus/1.jpg",
};

str = JSON.stringify(str); // 将对象转换为 JSON 字符串

// 将 JSON 字符串解析为对象，并修改 id 属性为数字类型
let obj = JSON.parse(str);
obj.id = parseInt(obj.id);

console.log(obj);