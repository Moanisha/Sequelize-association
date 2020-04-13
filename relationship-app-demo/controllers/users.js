const User = require('../models').User;
const Company = require('../models').Company;
const WorkingDay = require('../models').WorkingDay;

exports.addUser =(req,res)=> {
    let {email, firstName, lastName, CompanyId} = req.body;
    User.create({
        email,
        firstName,
        lastName,
        CompanyId
    })
    .then((user)=>{
        res.json({user, message: "Account created successfully"})
    })        
    .catch((err)=>{
        res.status(404).send(err);
    })
}

exports.getUser = (req, res) => {
    let userId = req.params.id;
    User.findByPk(userId, {
        include: [{
            model: Company, as:'company',
            attributes: ['name']
        },
        {
            model: WorkingDay, as:'WorkingDays',
            attributes: ['workingDate', 'weekDay']
        }]
    })
    .then((user)=>{
        res.json({details: user, message:'Fetched user details'})
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
}

exports.saveUserWorkingDays = (req, res) => {
    let UserId = req.body.userId;
    let WorkingDayId = req.body.workingDayId;
    User.findByPk(UserId)
    .then((user)=>{
        user.addWorkingDays(WorkingDayId);
        console.log(user);
    })
    .then(()=>{
        res.json('Working day assigned to user')
    })
    .catch(error=>{
        res.status(404).send(error);
    })
}

exports.getUsersWorkingInADay = (req,res) => {
    let workingDayId = req.params.id;
    WorkingDay.findByPk(workingDayId, {
        include: [{
            model: User, as:'employees',
            attributes: ['firstName']
        }]
    })
    .then((user)=>{
        res.json({details: user, message:'Fetched user details'})
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
}
