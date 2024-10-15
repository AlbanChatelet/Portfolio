/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "88i11k1nbyv0b6k",
    "created": "2024-10-15 14:20:34.931Z",
    "updated": "2024-10-15 14:20:34.931Z",
    "name": "logiciels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tvz6gueb",
        "name": "nom_logiciel",
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
  const collection = dao.findCollectionByNameOrId("88i11k1nbyv0b6k");

  return dao.deleteCollection(collection);
})
