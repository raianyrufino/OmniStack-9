module.exports = {
    show(req, res){
        const {user_id} = req.headers;
        const spots = await Spot.find({user: user_id});
    }
}