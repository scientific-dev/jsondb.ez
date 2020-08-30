# JsonDb.Ez

A simple package which uses **JSON** as a database to store values using keys in the form of

```json
{"key": "key", "value": "value"}
```

This package was actually made to gather data and convert it into **JSON** but now you can use this as Data to JSON Convertor or as a simple Database. You just need right knowledge to use it!

# Quick Example

### Setting up database

```js
const options = {
  filename: 'kek',
  clearOnStart: false
}

// options.filename will name the file as kek.json or else the default will be jsondb.ez
// options.clearOnStart will clear the data each and every time when it restarts file. The default will be false...

const { Database } = require('jsondb.ez')
const db = new Database(options)
```

### Quick Example

```js
db.set('foo', 'bar') // Will set value 'bar' for the key 'foo'

db.get('foo') // Will return 'bar'

db.all() // Will return all data in json format...

db.import(db.all()) // Will Import JSON data which is of jsondb.ez

db.startsWith('fo') // Will return all data starts with 'fo' in json format...

db.set('foo', 0)
db.add('foo', 1) // Will add data to the key 'key'
db.subtract('foo', 1) // Will subtract data to the key 'key'

db.delete('foo') // Will delete 'key' value...
db.deleteAll() // Will delete all data in json file...
```

### Import Quick.db Database data to jsondb.ez JSON Data
```js
const quickdb = require('quick.db')
const { Database } = require('jsondb.ez')
const db = new Database()

db.importQuick(quickdb.all())
// This will console log 'Successfully Imported!'
```

> **TO NOTE:** If you imported wrong data to importQuick() that would mess your data so always enter a valid quick.db data! And remember import() is for only jsondb.ez Json data only not for Quick.db!

# Some QNA

### Q. Why jsondb.ez?
First this is database can store data and have more options and you can customize database but if you are using this for something large scale i prefer you to use Sqlite database but its still your choice what to use?

### Q. How to clear my jsondb.ez data when i restart programm?
You can simply do that by selecting ``clearOnStart`` option. Example code given below:

```js
const options = {
  filename: 'kek',
  clearOnStart: true
}

const { Database } = require('jsondb.ez')
const db = new Database(options)
```

### Q. How to import my jsondb.ez from my second file whereas my main file is something other?
Its simple! Lets assume that your main file is ``kek.json`` and the old file is ``database.json``

```js
const { Database } = require('jsondb.ez')
const olddb = new Database({filename: 'kek'})
const newdb = new Database({filename: 'database'}) 

// This will import only database made by jsondb.ez only not other!
newdb.import(olddb.all())
```

### Q. I use quick.db but i wish to use jsondb.ez but my Json.sqlite has some important data. How shall i import it to jsondb.ez?
Its quite easy to do. You need to use ``importQuick()`` function. Example given above!

### Q. I cannot find my question above? How shall i ask some?
You can join our discord server and report it. Link is in below!

# Join our Discord Server
[https://discord.gg/FrduEZd](https://discord.gg/FrduEZd) 

# Made by Science Spot
