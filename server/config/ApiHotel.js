/* 
I used request method to get the data from external Api using Http request as show 
*/

var request = require('request');
module.exports = {
	getData:function(req,res){
			    request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function( err , resp , data ) {
			    	    if (err) {
			    	    	throw err ;
			    	    }else {
				    	    var result = JSON.parse( data);
				    	    /*
							convert the data to JSON parse because it return as stringify 
				    	    */
				    	    /*
							then take the data i need  
				    	    */
				    	    result  = result['offers']['Hotel'];
  				    	    /*
							then loop for specfic data to decode it because i recieved it as encoding    
				    	    */
	      	      			for (var i = 0; i < result.length; i++) {
	      				        result[i].hotelUrls.hotelInfositeUrl=decodeURIComponent(result[i].hotelUrls.hotelInfositeUrl);
  				    	    /*
							then check  each offer if don't have pic assign default pic    
				    	    */
  				          		if ( result[i].hotelInfo.hotelImageUrl === ''){      			
									result[i].hotelInfo.hotelImageUrl = 'http://pamirtimes.net/wp-content/uploads/2014/06/Tourism-Travel.jpg';
										}
	      					}
	      					/*
	      					finaly send the exactly data i need 
	      					*/
					      	res.json(result)
			    	    }
			    })
	}
};