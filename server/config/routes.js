var ApiHotel = require ('./ApiHotel.js')
module.exports = function (app, express) {

 /*								Api Hotel route
 / ============================================================================== */
		app.get('/api/hotelData',ApiHotel.getData);
	};