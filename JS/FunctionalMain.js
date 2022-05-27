import { db, fd, database } from '../../MatriculaBot-Node.js/IA/DataKeeper.js'

class UserData{
    constructor(){}

    async refreshUsersData(){
        let user = (await db.request(`select r.*, c.cursonome from registro as r join cursos as c on 
            r.curso = c.id;`))[0]
        this.users = {ready: user.filter(i => i.finished === 1), unfin: user.filter(i => i.finished === 0)}
    }

    async getUserSubj(num){
        await this.refreshUsersData()
        let user = this.users.ready.find(i => i.numero === num)
        return (await db.request(`select u.discId, d.nome from user_${db.cursos[user.curso]} as u join disc_${db.cursos[user.curso]} as d on 
            u.discId = d.id where matricula = '${user.matricula}';`))[0]
    }

    
}

export {UserData}