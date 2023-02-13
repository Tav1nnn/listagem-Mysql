import {db} from "../config/database.js"

export const getUsers = (req, res) =>{
    const select = "SELECT * FROM user"

    db.query(select, (err,data)=>{
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addUser = (req,res)=>{
    const insert = "INSERT INTO user(`nome`,`email`,`fone`,`data`) VALUES(?)"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data
    ]

    db.query(insert, [values],(err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Usuário criado com sucesso")
    })

}
export const updateUser = (req,res) =>{
    const update =
    "UPDATE user SET `nome` = ?,`email` = ?,`fone` = ?,`data` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data
    ]
    
    db.query(update, [...values, req.params.id], (err) =>{
        if(err) return res.json(err)

        return res.status(200).json("Usuario atualizado com sucesso")
    })
}
