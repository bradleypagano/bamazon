module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Products", [
            {
                name: "Bullets",
                department: "Guns",
                price: 45,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Dress",
                department: "Fashion",
                price: 78,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Beer Six-Pack",
                department: "Alcohol",
                price: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Whiskey",
                department: "Liqour",
                price: 35,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Parcheesi",
                department: "Games",
                price: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Gloves",
                department: "Clothing",
                price: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Mask",
                department: "Costumes",
                price: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bat",
                department: "Sports",
                price: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Zelda",
                department: "Videogames",
                price: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Xbox",
                department: "Console",
                price: 200,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Products", null, {});
    }
};