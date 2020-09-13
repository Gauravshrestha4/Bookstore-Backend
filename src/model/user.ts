import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

/** defines the attributes required for user in request */
export interface UserAttributes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export class User extends Model {
  public id: number; /* FIX ME: Needs to be dicussed */

  public firstName!: string;

  public lastName!: string;

  public email!: string;

  public password!: string;

  public phone!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
  {
    id: DataTypes.INTEGER.UNSIGNED,
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user",
    timestamps: true,
    freezeTableName: true,
  }
);

User.sync({ force: true })
  .then(() => console.log(`SUCCESS: User table created successfully`))
  .catch((err) =>
    console.log(`ERROR: User table creation failed. \n CAUSE: ${err}`)
  );
