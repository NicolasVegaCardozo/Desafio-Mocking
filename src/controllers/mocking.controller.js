import * as faker from '@faker-js/faker';


const modelUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.image.avatar(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        gender: faker.person.gender(),
        birthdate: faker.date.birthdate(),
        phone: faker.phone.number(),
        country: faker.location.country()
    }
}

const createRandomUser = (cantUsers) => {
    const users = []

    for (let i = 0; i < cantUsers; i++) {
        users.push(modelUser())
    }

    return users
}

console.log(createRandomUser(60))


/*import Product from '../models/products.models.js';

export const generateMockProducts = async (req, res) => {
    try {
        for (let i = 0; i < 50; i++) {
            const productData = {
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                stock: faker.datatype.number({ min: 10, max: 100 }),
                category: faker.commerce.department(),
                status: true,
                code: faker.random.alphaNumeric(10),
                thumbnails: [faker.image.imageUrl()]
            };
            
            const newProduct = await Product.create(productData);
        }
        res.json({ message: 'Productos de prueba creados exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};*/