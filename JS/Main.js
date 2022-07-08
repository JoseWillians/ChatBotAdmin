import { UserData } from './FunctionalMain.js'

const users = new UserData()

async function setFinishedUsers(){
    await users.refreshUsersData()
    users.ready.forEach(i => {
        //Aqui os dados estão dentro do i, basta chamar as funções de colocar o texto nos campos específicos.
        //i = {matricula, numero, nome, email, cursonome, turma, cpf}
        //Ex: Label.setHTML = (`${i.matricula} ${i.numero}`)
    });
}

async function setUnfinishedUsers(){
    await users.refreshUsersData()
    users.unfin.forEach(i => {
        //Aqui os dados estão dentro do i, basta chamar as funções de colocar o texto nos campos específicos.
        //i = {matricula, numero, nome, email, cursonome, turma, cpf}
        //Ex: Label.setHTML = (`${i.matricula} ${i.numero}`)
    });
}

async function test(){
    await users.refreshUsersData()
    console.log(users.users)
    console.log((await users.getUserSubj(users.users.ready[3].numero)))
}

test()
