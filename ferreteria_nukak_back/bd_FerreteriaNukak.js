const {MongoClient} = require("mongodb")
const nameDB = "Ferreteria"
const url = "mongodb+srv://NukakTeam:Nukak.2610@clusternukak.ld93wmw.mongodb.net/"

const client = new MongoClient(url+nameDB)

async function run(){
    try{
        await client.connect().then(
            (db)=>{
                console.log("Conexión exitosa")
                //console.log(db)
            }
        ).catch(
            (db)=>{
                console.log("Se presentó un error en la conexión")
                console.log(db)
            }
        )

        const db = client.db(nameDB)
        await db.command({ping:1})
        .then(
            (db)=>{
                console.log("Conexión exitosa con la base de datos")
                //console.log(db)
            }
        ).catch(
            (db)=>{
                console.log("Se presentó un error en la conexión hacia la base de datos.")
                console.log(db)
            }
        )

        const collectionProdcutos = db.collection("Inventario")


    }catch(error){
        console.log("Se presentó un error")
    }finally{
        await client.close()
    }
}

run()