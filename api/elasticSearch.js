const {Client, Client} =require('@elastic/elasticsearch')

const client=new Client({node:`http://localhost:9200`});

async function createTitle(){
    const {response}=await client.create({
        index:'title',
        id:11,
        body:{
            title:'mytitle',
            desc:"lsdhfhlkjhkl dsfhdsflkhsflk"
        }
    })
}

createTitle().catch(console.log)
