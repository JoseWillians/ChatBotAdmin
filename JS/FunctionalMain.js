import { db, fd, database } from '../../MatriculaBot-Node.js/IA/DataKeeper.js'

class UserData{
    constructor(){

    }

    static async getUsersData(){
        return (await db.request(`select r.*, c.nome from registro as r join cursos as c on r.curso = c.id where finished = '1';`))[0]
    }

    static async getUserSubj(num){
        let user = await fd.getUser(num)
        console.log(user)
        return (await db.request(`select u.discId, d.nome from user_${db.cursos[user.curso]} as u join disc_${db.cursos[user.curso]} as d on 
            u.discId = d.id where matricula = '${user.matricula}';`))[0]
    }
    /*
    static async getUserSubj(user){
        return (await db.request(`select * from user_${db.cursos[user.curso]}
            where matricula = '${user.matricula}';`))
    }*/
}

export {UserData}