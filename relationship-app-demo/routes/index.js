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
  app.get('/api/get-employees/:id', userController.getEmployeesOfCompany);

};