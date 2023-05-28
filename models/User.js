import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';
import { v4 as uuidv4 } from 'uuid';

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sebelum menyimpan data pengguna ke dalam database, generasi userId unik
User.beforeCreate((user) => {
  user.userId = uuidv4();
});

export default User;

(async()=>{
    await sequelize.sync();
})();
