/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qexkdjzo5x8wzw2",
    "created": "2024-10-14 08:45:51.157Z",
    "updated": "2024-10-14 08:45:51.157Z",
    "name": "projets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nolaezqg",
        "name": "nom_projet",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qexkdjzo5x8wzw2");

  return dao.deleteCollection(collection);
})
