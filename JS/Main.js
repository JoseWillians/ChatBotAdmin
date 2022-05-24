import { UserData } from './FunctionalMain.js'

async function test(){
    let users = await UserData.getUsersData()
    console.log(users)
    console.log((await UserData.getUserSubj(users[0].numero)))
}

test()