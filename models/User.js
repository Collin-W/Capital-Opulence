const {Model , DataTypes} = require('sequelize')

const sequelize = require('../config/connection')
//import bycrypt
const bcrypt = require('bcrypt')


//create User model
class User extends Model{
  //instance to compare password when logging in
  checkPassword(loginPW){
    return bcrypt.compareSync(loginPW, this.user_password)
  }
}

User.init(
  {
    //define user_id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    //define first name
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    //define last name
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    //define email
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    //define password
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        len:[4]
      }
    }
  },
  {
    //define hooks
    //beforeCreate makes sure to hash the password before creating a new user
    //beforeUpdate makes sure to hash the password before a user is updated
    hooks: {
      async beforeCreate(newUserData){
        newUserData.password = await bcrypt.hash(newUserData.password, 10)
        return newUserData
      },
      async beforeUpdate(updatedUserData){
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
        return updatedUserData
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
)

module.exports = User