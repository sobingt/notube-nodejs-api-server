notube-nodejs-api-server
========================

Notube api sever created for 24h Hackathon

GET http://localhost:3000/api/v1/Notes/count
GET http://localhost:3000/api/v1/Notes
PUT http://localhost:3000/api/v1/Notes
POST http://localhost:3000/api/v1/Notes
DELETE http://localhost:3000/api/v1/Notes

GET http://localhost:3000/api/v1/Notes/:id
PUT http://localhost:3000/api/v1/Notes/:id
POST http://localhost:3000/api/v1/Notes/:id
DELETE http://localhost:3000/api/v1/Notes/:id

Query
GET http://localhost:3000/api/v1/Notes?name=~regex
GET http://localhost:3000/api/v1/Notes?name=value
GET http://localhost:3000/api/v1/Notes?name=>value
GET http://localhost:3000/api/v1/Notes?name=>=value
GET http://localhost:3000/api/v1/Notes?name=<value
GET http://localhost:3000/api/v1/Notes?name=<=value
GET http://localhost:3000/api/v1/Notes?name=!=value
GET http://localhost:3000/api/v1/Notes?select=name


GET http://localhost:3000/api/v1/Notes?$and=[{"field":">=value"},{"field":[value1,value2]}]

GET http://localhost:3000/api/v1/Notes?$or=[{"field":"value"},{"$and",[{"field":"~value"},{"field":"!=value"}]}]

GET http://localhost:3000/api/v1/Notes?skip=10&limit=10