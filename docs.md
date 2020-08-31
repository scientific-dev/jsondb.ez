# JsonDB.ez Docs

An easy way to store database in JSON Files!

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

## Docs

#### Setting up Database
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
