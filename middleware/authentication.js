module.exports = (req,res,next)=>{
  if(req.decoded.role==1){
      console.log('admin')
      next()
  }else if(req.decoded._id == req.params.id){
      console.log('pemilik data')
      next()
  }else{
      next({
          message: 'Maaf anda tidak punya hak atas data ini'
      })
  }
}