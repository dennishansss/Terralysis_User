import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';
import { v4 as uuidv4 } from 'uuid';

const User_Google = sequelize.define('User_Google', {
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
});

// Generate userId unik sebelum simpan data
User_Google.beforeCreate((user_google) => {
  user_google.userId = uuidv4();
});

export default User_Google;

(async () => {
  await sequelize.sync();
})();
