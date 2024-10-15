/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l9amcs3tux4zm69",
    "created": "2024-10-15 14:08:58.284Z",
    "updated": "2024-10-15 14:08:58.284Z",
    "name": "competences",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ur19iomb",
        "name": "nom_competence",
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
  const collection = dao.findCollectionByNameOrId("l9amcs3tux4zm69");

  return dao.deleteCollection(collection);
})
