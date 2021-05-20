// Using the Express Module
const express = require('express')
const app = express()

//Importing Sequeleze
const { Sequelize, DataTypes } = require('sequelize')
const ProductModel = require('./models/products')

// Connecting Sequelize with the database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'productslist.db'
})

// Declaring the connection and the data type
const products = ProductModel(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())


// Welcome Page
app.get('', (req, res) => {
    res.send('<html><body><h1>My Tasks List!</h1><p>Created by: Iramar Vasquez</p></body></html>')
})

// Listing products by using GET
app.get('/products', async (req, res) => {
    const allProducts = await products.findAll()

    // Usando SQLite puro
    // const allTasks = await sequelize.query('SELECT * FROM Tasks')

    res.json({ action: 'Listing Products', product: allProducts })
})

// Show a specific product using GET
app.get('/products/:id', async (req, res) => {

    const productId = req.params.id
    const product = await products.findByPk(productId)
    res.send({ action: 'Showing Product', product: product })
})

// Creating a products by using POST
app.post('/products', async (req, res) => {
    const body = req.body

    const newProduct = await products.create({

        name: body.name,
        description: body.description,
        quantity: body.quantity,
        price: body.price,
        urlimg: body.urlimg,
        nonmeat: body.nonmeat,
        protein: body.protein,
        sauce: body.sauce,
        potatoes: body.potatoes,
        drink: body.drink
    })

    res.json({ action: 'New Product Added', product: newProduct })
})

// Updating a product by using PUT
app.put('/products/:id', async (req, res) => {
    const productId = req.params.id
    const body = req.body
    const updateProduct = await products.findByPk(productId)
    updateProduct.update({
        name: body.name,
        description: body.description,
        quantity: body.quantity,
        price: body.price,
        urlimg: body.urlimg,
        nonmeat: body.nonmeat,
        protein: body.protein,
        sauce: body.sauce,
        potatoes: body.potatoes,
        drink: body.drink
    })

    res.send({ action: 'Updated Product', product: updateProduct })
})

// Delete a product
app.delete('/products/:id', async (req, res) => {
    const productId = req.params.id
    const deletingProduct = await products.destroy({ where: { Id: productId } })

    res.send({ action: 'Deleted Product', productId: productId, productDeleted: deletingProduct  })
})

app.listen(8080, () => {
    console.log('Starting ExpressJS in the 8080 port')
})