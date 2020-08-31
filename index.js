// Install packages
const fs = require('fs');
const base = require('./base.js')

class Database{
  constructor(options={}){
    if(options.filename == undefined) options.filename = 'database'
    if(options.clearOnStart != true) options.clearOnStart = false

    this.options = options
    this.name = `${options.filename}.json`
    this.createdAt = new Date()

    try{
      let file = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    }catch(e){
      fs.writeFileSync(`${this.name}`, `[\n]`)
      console.log(`Database has been set to ${this.name}`)
    }

    if(options.clearOnStart) fs.writeFileSync(`${this.name}`, `[\n]`)
  }

  set(key, value){
    if(!key || !value) throw new Error('You are missing the key or the value!')
    if(key.includes(' ')) throw new Error('Key should not contain space!')
    key = key.toLowerCase()
    base.set(this.name, key, value)
    return
  }

  get(key){
    if(!key || key.includes(' ')) throw new Error('Invalid key!')
    key = key.toLowerCase()
    return base.get(this.name, key)
  }

  has(key){
    if(!key || key.includes(' ')) throw new Error('Invalid key!')
    key = key.toLowerCase()
    if(base.get(this.name, key)) return true
    else return false
  }

  delete(key){
    if(!key || key.includes(' ')) throw new Error('Invalid key!')
    key = key.toLowerCase()
    base.delete(this.name, key)
  }

  all(){
    let data = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    return data
  }

  startsWith(text){
    if(!text) throw new Error('Missing text to find data!')
    text = text.toLowerCase()
    let result = [], data = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    for(let i = 0; i < data.length; i++){
      if(data[i].key.startsWith(text)) result.push(data[i])
    }
    return result
  }

  add(key, value){
    if(!key || !value) throw new Error('Missing key or values field!')
    if(typeof value != 'number') throw new Error('Value must be a number!')
    key = key.toLowerCase()
    let data = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    for(let i = 0; i < data.length; i++){
      if(data[i].key == key){
        if(typeof parseInt(data[i].value) != 'number') throw new Error('Target is not a number!')
        let num = parseInt(data[i].value)
        data = data.filter(x => x.key !== key)
        data.push(JSON.parse(`{"key": "${key}", "value": "${num + value}"}`))
        fs.writeFileSync(`${this.name}`, JSON.stringify(data))
        return num + value
      }
    }
    data.push(JSON.parse(`{"key": "${key}", "value": "${value}"}`))
  }

  subtract(key, value){
    if(!key || !value) throw new Error('Missing key or values field!')
    if(typeof value != 'number') throw new Error('Value must be a number!')
    key = key.toLowerCase()
    let data = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    for(let i = 0; i < data.length; i++){
      if(data[i].key == key){
        if(typeof parseInt(data[i].value) != 'number') throw new Error('Target is not a number!')
        let num = parseInt(data[i].value)
        data = data.filter(x => x.key !== key)
        data.push(JSON.parse(`{"key": "${key}", "value": "${num - value}"}`))
        fs.writeFileSync(`${this.name}`, JSON.stringify(data))
        return num - value
      }
    }
    data.push(JSON.parse(`{"key": "${key}", "value": "${0 - parseInt(value)}"}`))
  }

  deleteAll(){
    fs.writeFileSync(`${this.name}`, `[\n]`)
    return
  }

  importQuick(data){
    let database = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    data.forEach(d => {
      database = database.filter(x => x.key !== d.ID.toLowerCase())
      database.push(JSON.parse(`{"key": "${JSON.stringify(d.ID)}", "value": "${JSON.stringify(d.data)}"}`))
    })
    fs.writeFileSync(`${this.name}`, JSON.stringify(database))
    console.log('Finished exporting!')
    return
  }

  import(data){
    let database = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    data.forEach(d => {
      database = database.filter(x => x.key !== d.key)
      database.push(JSON.parse(`{"key": "${d.key}", "value": "${d.value}"}`))
    })
    fs.writeFileSync(`${this.name}`, JSON.stringify(database))
    console.log('Finished exporting!')
    return
  }

  push(key, value){
    let data = JSON.parse(fs.readFileSync(`${this.name}`).toString())
    for(let i = 0; i < data.length; i++){
      if(data[i].key == key){
        let olddata = data[i].value
        if(!Array.isArray(olddata)) throw new Error('You cant push into any other typeof except Array!')
        olddata.push(value)
        data = data.filter(x => x.key !== key)
        console.log(data)
        data.push(JSON.parse(`{"key": "${key}", "value": ${JSON.stringify(olddata)}}`))
        fs.writeFileSync(`${this.name}`, JSON.stringify(data))
        return value
      }
    }
    data.push(JSON.parse(`{"key": "${key}", "value": ["${value}"]}`))
    fs.writeFileSync(`${this.name}`, JSON.stringify(data))
  }
}

// Export
module.exports = {
  version: require('./package.json').version,
  Database: Database
}
