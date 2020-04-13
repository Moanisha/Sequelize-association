// const productController = require('../controllers').products;
const userController = require('../controllers/users')

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Company API!',
  }));
  app.post('/api/create-user', userController.addUser);
  app.get('/api/get-user/:id', userController.getUser);
  app.post('/api/save-user-working-days', userController.saveUserWorkingDays);
  app.get('/api/get-user-working-in/:id', userController.getUsersWorkingInADay);

  // app.post('/api/add-user', userController.addUser);
  // app.post('/api/login', userController.login);
  // app.get('/api/logout', userController.logout);
  // app.get('/api/favorites/:id', userController.getUserFav);

  // app.post('/api/remove-fav', productController.removeFavoritePastry);
  // app.get('/api/user-fav/:id', productController.getUserFavorites);
  // app.get('/api/product/:id', productController.getProductDetails);
};