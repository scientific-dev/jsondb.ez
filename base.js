const fs = require('fs')

module.exports = {
  set: function set(filename, key, value){
    var data = JSON.parse(fs.readFileSync(`${filename}`).toString())
    value = JSON.stringify(value)
    var data = data.filter(x => x.key !== key)
    data.push(JSON.parse(`{"key": "${key}", "value": ${value}}`))
    fs.writeFileSync(`${filename}`, JSON.stringify(data))
    return value
  },

  delete: function del(filename, key){
    let data = JSON.parse(fs.readFileSync(`${filename}`).toString())
    data = data.filter(x => x.key !== key)
    fs.writeFileSync(`${filename}`, JSON.stringify(data))
  },

  get: function get(filename, key){
    var data = JSON.parse(fs.readFileSync(`${filename}`).toString())
    for(let i = 0; i < data.length; i++){
      if(data[i].key == key){
        return data[i].value
      }
    }
    return null
  }
}
