/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("88i11k1nbyv0b6k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2q69n0fi",
    "name": "logo_logiciel",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("88i11k1nbyv0b6k")

  // remove
  collection.schema.removeField("2q69n0fi")

  return dao.saveCollection(collection)
})
