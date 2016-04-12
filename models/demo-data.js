var Activity = require( './activity' );


module.exports.initDatabase = function() {
  
  /********************* IMPORTANT !!! ************************
  need to figure out how to use demo data in dev. mode AND
  with webpack-dev-server (which currently hi-jacks dev. mode)
  *************************************************************/

  //if( app.get('env') === 'development' ) {

    Activity.remove().exec(); // clear database

    Activity.collection.insertMany( demoData, function(err,r) {

      if( err )
        console.log( "error loading demo data:", err );
      else
        console.log( "seeded database with " + r.insertedCount + " records\n" );
    });

  //}
};

var demoData = [

  {
    'title' : 'Affordable Pottery and Glassware by Local Artists',
    'description' : 'Some truly amazing pieces, and totally worth browsing, even if your not in the market to buy -- although the prices are totally affordable.',
    'image' : 'http://i.ebayimg.com/00/s/MTA3MFgxMDcw/z/5dsAAOxyRNJSdbtV/$(KGrHqV,!nsFJv)qWSH4BSdbtVnGLw~~60_1.JPG?set_id=2',
    'category' : 'museum-art',
    'region' : {
       longitude: -122.269195,
       latitude: 37.877361
    }
  },

  {
    'title' : 'Best Local Grocery Store',
    'description' : 'Lots of quality stuff -- priced so you will not have to rub elbows with the riff-raff while you shop.',
    'image' : 'http://cdn.bleedingcool.net/wp-content/uploads/2010/12/grocery-store.jpg',
    'category' : 'groceries',
    'region' : {
       longitude: -122.269948,
       latitude: 37.878923
    }
  },

  {
    'title' : 'World-Famous Chez Panisse Restaurant',
    'description' : 'Gordon Ramsay WISHES he could cook like this! Pricey (~$100), but worth it. Dont bother trying to get reservations for the main restaurant, but the cafe is just as good, and usually has a few spots, with just a slightly more limited menu.',
    'image' : 'http://oakbaybeachhotel.com/wp-content/uploads/2015/05/KatesCafe.jpg',
    'category' : 'restaurant',
    'region' : {
       longitude: -122.268963,
       latitude: 37.879590
    }
  },

  {
    'title' : 'Chat With Published Local Authors',
    'description' : 'Little corner book shop targeting the Birkenstock-wearing wheat-grass-drinking college town demographic... which is why I love it so much!',
    'image' : 'https://morselsofbread.files.wordpress.com/2013/08/fireside-chat.jpg?w=705',
    'category' : 'books',
    'region' : {
       longitude: -122.268875,
       latitude: 37.880460
    }
  },

  {
    'title' : 'Pizza To Corrupt Your Soul',
    'description' : 'I honestly dont know how they do it, but I budget about $100/wk for pizza at this place.',
    'image' : 'http://417mag-images.dashdigital.com/417-Magazine/November-2012/Best-Italian-Restaurants-Springfield-MO/brunos-pizza.jpg?ver=1350940500',
    'category' : 'restaurant',
    'region' : {
       longitude: -122.269528,
       latitude: 37.879975
    }
  },

  {
    'title' : 'Quiet Little Hotel, Near Everything Downtown',
    'description' : 'Great little family-run hotel with a fantastic cafe on the ground floor. On one of the major shopping streets in Berkeley, but a few blocks away from the grittier area downtown.',
    'image' : 'http://www.minimalisti.com/wp-content/uploads/2014/03/historic-elements-modern-boutique-hotel-interior-design-Zash-Sicily-Italy.jpg',
    'category' : 'hotel',
    'region' : {
       longitude: -122.269355,
       latitude: 37.879590
    }
  },

  {
    'title' : 'Very beautiful rose garden',
    'description' : 'Very peaceful rose garden with views, nice tennis courts too',
    'image' : 'https://edgeofthewest.files.wordpress.com/2008/09/berkeley_rose_garden.jpg',
    'category' : 'garden',
    'region' : {
        longitude: -122.262901,
        latitude: 37.885296
    }
  },

  {
    'title' : "Peaceful trail walk",
    'description' : 'Great 30 minute trial walk, great views!!',
    'image' : 'http://images.fineartamerica.com/images-medium-large/peaceful-trail-nancy-graham.jpg',
    'category' : 'hiking',
    'region' : {
        longitude: -122.26442,
        latitude: 37.88647
    }
  },

  {
    'title' : 'Large softball field for biking, basketball, or soccer!',
    'description' : 'Great for groups to play sports!!',
    'image' : 'http://grfx.cstv.com/schools/rutu/graphics/facilities/images/softball2.jpg',
    'category' : 'sports',
    'region' : {
        longitude: -122.26204,
        latitude: 37.88484
    }
  },

  {
    'title' : 'Walk through and smell the eucalyptus trees here',
    'description' : 'There are benches for you to sit and enjoy the natural setting',
    'image' : 'https://images.sciencedaily.com/2011/05/110512104214_1_540x360.jpg',
    'category' : 'hiking',
    'region' : {
      longitude: -122.26429,
      latitude: 37.87094
    }
  },

  {
    'title' : 'Cozy space for working remotely!',
    'description' : 'Fast free wifi, upstairs area is very cozy and there are plenty of outlets!',
    'image' : 'http://farm8.staticflickr.com/7392/13155134573_a6f5d32879_z.jpg',
    'category' : 'coffee',
    'region' : {
      longitude: -122.26832,
      latitude: 37.87155
    }
  }

];
