const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const { truncate } = require('fs');

//create our Post model
class Post extends Model {}

//create fileds/columns for Post Model

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL:true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                modle: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName,
        underscored:true,
        modelName:'post'
    }
)

module.exports = Post;