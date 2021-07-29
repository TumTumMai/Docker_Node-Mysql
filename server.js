const express = require('express')

const app = express()

///////////////////////////////////
app.get('/', (req, res) => {
    res.json({ message: 'Toong.' })
})

app.get('/test',async(req,res) => {
    const sql = "SELECT * FROM db"
    const results = await query(sql,"")
    console.log(results)
    res.json(results)
})
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'helloworld',
// //   database: 'my_db'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err){
//     throw err
//   }  

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

const mysql2 = require('mysql2/promise')
const config = 
{
    host: process.env.HOST || 'localhost',
    port: 3306,
    user: 'root',
    password: 'helloworld',
    database: 'mysql'
}


async function query(sql, params) {
    const connection = await mysql2.createConnection(config);
    const [results, ] = await connection.execute(sql, params);
  
    return results;
  }

async function main(){
    const sql = "SELECT * FROM db"
    const results = await query(sql,"")
    console.log(results)
}
main()

//////////////////////////


// const PORT = process.env.NODE_ENV || 'development'
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });
//////////
// app.listen(8080,'0.0.0.0' ,function()
// {
//     console.log("aaa")
// })
///////
app.listen(8080,'0.0.0.0')
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// console.log(text)