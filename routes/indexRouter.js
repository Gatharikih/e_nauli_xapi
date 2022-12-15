let express = require('express');
let router = express.Router();

let indexController = require('../controllers/indexController');

/* USER MANAGEMENT */

/* user login with phone and PIN */
router.post('/login', indexController.login);

/* reset user password */
router.post('/password/change', indexController.change_password);

/* reset user password */
router.post('/password/reset', indexController.reset_password);

/* END USER MANAGEMENT */


/* SACCO MANAGEMENT */

// TODO:  e-nauli api not deactivating
/* deactivate a sacco */
router.put('/sacco/status', indexController.edit_sacco);

/* create sacco */
router.post('/sacco', indexController.create_sacco);

/* edit a sacco */
router.put('/sacco', indexController.edit_sacco);

/* create an official */
router.post('/sacco/add_official', indexController.add_official);

/* deactivate and/or edit an official's details */
router.put('/sacco/:official_id', indexController.edit_official);

// TODO: add offset, page size
/* get a list of officials */
router.get('/sacco/official/list', indexController.get_officials);

/* add station to sacco */
router.post('/sacco/station', indexController.add_station);

/* deactivate and/or edit station in sacco */
router.put('/sacco/station', indexController.edit_station);

/* create charge on sacco */
router.post('/sacco/charge', indexController.charge_station);

/* edit charge on sacco */
router.put('/sacco/charge', indexController.edit_charge);

/* get sacco balance */
router.get('/sacco/balance', indexController.get_balance);

/* END SACCO MANAGEMENT */


/* FLEET MANAGEMENT */

/* add vehicle to sacco */
router.post('/sacco/vehicle', indexController.add_vehicle);

/* edit vehicle in sacco */
router.put('/sacco/vehicle', indexController.edit_vehicle);

/* add operator to vehicle */
router.post('/sacco/operator', indexController.add_operator);

/* edit operator in vehicle */
router.put('/sacco/operator', indexController.edit_operator);

// TODO: add offset, page size
/* get list of vehicles in sacco */
router.get('/sacco/:sacco_id/vehicles', indexController.get_sacco_vehicles);

/* END FLEET MANAGEMENT */


/* get e-nauli token*/
router.get('/token', indexController.token);

/* test route */
router.get('/test', indexController.test);


module.exports = router;