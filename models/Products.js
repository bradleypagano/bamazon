module.exports = function(sequelize, DataTypes){
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        }
    });
    return Product;
}