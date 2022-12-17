const notFound = (req,res)=>{
 res.status(404).send('Route does not exist')
}

exports.module = notFound