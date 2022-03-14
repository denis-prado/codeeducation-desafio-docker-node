const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlInsert = `INSERT INTO people(name) VALUES ('Denis Prado')`
connection.query(sqlInsert)

connection.query(`SELECT * FROM people`, function(err, rows, fields) {
    if (err) throw err;
    
    var html = "<h1>Full Cycle Rocks!</h1>"
    html += "<ul>"
    rows.forEach(element => {
        console.log(element.name)
        html += "<li>" + element.name + "</li>"
    });
    html += "</ul>"

    app.get('/', (req,res) => {
        res.send(html)
    })
    
  })
connection.end()

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})