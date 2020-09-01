# JsonDB.ez Docs

An easy way to store database in JSON Files!

## Index
- [Things before we start](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#things-before-we-start)
- [Setting up Database](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#setting-up-database)
   - [Set](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#set)
   - [Get](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#get)
   - [All](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#all)
   - [Import](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#import)
   - [ImportQuick](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#importquick)
   - [StartsWith](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#startswith)
   - [Add](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#add)
   - [Subtract](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#subtract)
   - [Push](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#push)
   - [Delete](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#delete)
   - [DeleteAll](https://github.com/Scientific-Guy/jsondb.ez/blob/master/docs.md#deleteall)

## Things before we start!

**Merits:**
- You can edit data in *JSON* without using any functions!
- Import and Export data to and from files!
- Easy to use
- Fast in processing!

**Demerits:**
- Anyone can view data in that *JSON* file and extract data!
- Stores some large space

**Requirements:**
- v0.0.3 of *JsonDB.ez*
- Some basic knowledge with *JS*
- A better IDE

# Docs

## Setting up Database
There are various options to set a database. Example given below!

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

**Options:**
| Option Name     | Typeof     | Description                                                       |
|-----------------|------------|-------------------------------------------------------------------|
| filename        | string     | File name of the json file. Eg:- `kek` for kek.json               |
| clearOnStart    | boolean    | Will clear data on each restart of the file                       |

## set
Will set the value of the key

```js
db.set(key, value)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| key             | string                     | ID of the value                                                   |
| value           | string, number or array    | Value of the ID                                                   |

## get
Will return you the value of the key!

```js
db.get(key)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| key             | string                     | ID of the value                                                   |

## all
Will return you the all the JSON data!

```js
db.all()
```

## import
Import data from other JsonDB.ez JSON files

```js
db.import(data)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| data            | object                     | Eg:- ``db.all()`` Supports **JsonDB.ez** files only!              |

# importQuick
Import data from Quick.db!

```js
const quickdb = require('quick.db')

db.importQuick(quickdb.all())
// This will console log 'Successfully Imported!
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| data            | object                     | Eg:- ``quickdb.fetchAll()`` Whole data of quick.db **Not JsonDB.ez|

## startsWith
Will return you an array of JSON data containing keys which startsWith your query

```js
db.startsWith(query)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| query           | string                     | Thing to search                                                   |

## add
Will add value with the old existing value!

```js
db.add(key, amount)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| key             | string                     | ID of the value                                                   |
| amount          | number                     | Amount to add                                                     |

### subtract
Will subtract value from the old existing value!

```js
db.subtract(key, amount)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| key             | string                     | ID of the value                                                   |
| amount          | number                     | Amount to subtract                                                |

## push
Will push data only if the old existing value is an array or null!

```js
db.push(key, value)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| key             | string                     | ID of the value                                                   |
| value           | string or array            | Value to pus                                                      |

## delete
Will delete the value by its key

```js
db.delete(key)
```

**Parameters:**
| Parameter Name  | Typeof                     | Description                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------|
| key             | string                     | ID of the value                                                   |

## deleteAll
Will clear whole database JSON file to ``[]``

```js
db.deleteAll()
```

## Could not find something?
[Join our Discord Server](https://discord.gg/FrduEZd)
###  From Science Spot AKA Scientific Guy
