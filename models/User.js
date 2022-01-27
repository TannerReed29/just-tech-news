const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


    // Create our User model
class User extends Model {}

    // define table colums and configuration
User.init(
    {
            // TABLE COLUMN DEFINITIONS GO HERE
        // define an id column
        id: {
                // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
                // this is the equivalent of SQL's 'NOT NULL' option
            allowNull: false,
                // instruct that tthis is the Primary Key
            primaryKey: true,
                // tuen on suto increment
            autoIncrement: true
        },
            //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
            // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
                // ther cannot be any duplicate email values in this table
            unique: true,
                // if allowNull is set to false, we can run our data trhough validators before creating the table data
            validate: {
                isEmail: true
            }
        },
            // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                    // this means the password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass in our imported sequelize connection ( the direct connection to our database)
        sequelize,
        // dont's automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize the name of the database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. 'comment_text' and not 'commentText')
        underscored: true,
        // make it so our model naem stays in lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;