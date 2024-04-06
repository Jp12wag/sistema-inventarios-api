const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
      trim: true
    }
  })
  
 


  
  // middleware --> route ---> create user --> pre ---> save 
  
  userSchema.pre('save', async function(next) {
    const user = this
  
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8) 
    }
  
    next()
  })
  
  RoleSchema.pre('remove', async function(next) {
    const user = this
  
    await Task.deleteMany({ owner: user._id })
  
    next()
  })
  
  
  const Roles = mongoose.model('users', RoleSchema)
  
  module.exports = Roles;
  