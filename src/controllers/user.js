import {db} from "../config/database.js"

export const getUsers = (req, res) =>{
    const select = "SELECT * FROM user"

    db.query(select, (err,data)=>{
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}