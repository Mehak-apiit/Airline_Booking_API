'use strict';

import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { ServerConfig} from '../config/server-config.js';
export default function defineUser(sequelize) {
  class User extends Model {
    static associate(models) {
      
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(function encrypt(user){
    const encryptedPassword = bcrypt.hashSync(user.password, +ServerConfig.SALT_ROUNDS);
    user.password = encryptedPassword;

  });
  return User;
};

