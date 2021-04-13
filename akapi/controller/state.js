const con = require("./../database/db");

exports.stateController = async (req, res, next) => {
    try {
        const sql = `SELECT * FROM state`;
        con.query(sql, (err, state) => {
            if (err) throw err;
            res.status(200).json({
                message: 'state Fetched',
                state: state
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}


exports.cityController = async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id);
        if(isNaN(id)){
            return ;
        }
        console.log(id);
        const sql = `SELECT * FROM city WHERE  state_id=${id}`;
        con.query(sql, (err, city) => {
            if (err) throw err;
            res.status(200).json({
                message: 'city Fetched',
                city: city
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}


exports.areaController = async (req, res, next) => {
    try {
        const id = req.query.id;
        if(isNaN(id)){
            return ;
        }
        const sql = `SELECT * FROM area WHERE city_id=${id}`;
        con.query(sql, (err, area) => {
            if (err) throw err;
            res.status(200).json({
                message: 'Area Fetched',
                area: area
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}




exports.pincodeController = async (req, res, next) => {
    try {
        const id = req.query.id;
        if(isNaN(id)){
            return ;
        }
        console.log(id);
        const sql = `SELECT * FROM pincode WHERE area_id=${id}`;
        con.query(sql, (err, pincode) => {
            if (err) throw err;
            res.status(200).json({
                message: 'pincode Fetched',
                pincode: pincode
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
