/*
Métodos disponíveis no controller

index = retorna uma listagem de sessões
show = listar uma unica sessão
update = atualizar uma sessão
destroy = remover ou deletar uma sessão
store = criar uma sessão
*/

module.exports = {
    async store(req, res){
        //const email = req.body.email;
        const {email} = req.body;
        
        let user = await User.findOne({email});
        if(!user){
          user = await User.create({email})  
        }
                
        return res.json(user);
    }
};
