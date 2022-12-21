let express = require('express');
let router = express.Router();

let indexController = require('../controllers/indexController');

/* USER MANAGEMENT */

/* user login with phone and PIN */
router.post('/user/login', indexController.login_user);

/* reset user password */
router.post('/user/password/change', indexController.change_password);

/* reset user password */
router.post('/user/password/reset', indexController.reset_password);

/* END USER MANAGEMENT */


/* SACCO MANAGEMENT */

/* edit a sacco */
router.put('/sacco', indexController.edit_sacco);

/* deactivate a sacco */
router.put('/sacco/status', indexController.update_sacco_status);

/* create sacco */
router.post('/sacco', indexController.create_sacco);

/* search sacco */
router.get('/sacco/:id', indexController.search_sacco);

// TODO: always displaying error - MsisdnLog with Msisdn 254721146559 could not be found
/* create an official */
router.post('/sacco/official', indexController.add_official);

/* edit an official's details */
router.put('/sacco/official', indexController.edit_official);

/* activate/deactivate an official */
router.put('/sacco/official/status', indexController.update_official_status);

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
router.post('/vehicle', indexController.add_vehicle);

/* edit vehicle in sacco */
router.put('/sacco/vehicle', indexController.edit_vehicle);

/* add operator to vehicle */
router.post('/sacco/operator', indexController.add_operator);

/* edit operator in vehicle */
router.put('/sacco/operator', indexController.edit_operator);

/* get list of vehicles in sacco */
router.get('/sacco/:sacco_id/vehicles', indexController.get_sacco_vehicles);

/* END FLEET MANAGEMENT */


/* get e-nauli token*/
router.get('/token', indexController.token);

/* test route */
router.get('/test', indexController.test);


module.exports = router;