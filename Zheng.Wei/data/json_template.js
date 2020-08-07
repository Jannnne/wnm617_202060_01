

/* User Template */
[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    username: function() {
      return 'user'+this.id;
    },
    name: '{{firstName()}} {{surname()}}',
    age: '{{integer(20, 40)}}',
    gender: '{{gender()}}',
    occupation: '{{company()}}',
    email: function() {
      return this.username+'@gmail.com';
    },
    phone: '+1 {{phone()}}',
    password: 'md5(\'pass\')',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    Bio: '{{lorem(1, "paragraphs")}}',
   
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! How are you? ' + 'Now is ' + tags.date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd T hh:mm:ss ") + ' Have a good day.';
    },
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999)+'/fff/?text='+this.username;
    }
  }
]





/* Location Template */
[
  '{{repeat(100)}}',
  {
    
    id: '{{index(1)}}',
    user_id: '{{integer(1,10)}}',
    
    lat: '{{floating(37.801030, 37.698676)}}',
    lng: '{{floating(-122.502619, -122.389420)}}',
    
    name: '{{company()}}',
    
    type: '{{random("Wall","Ground")}}',
    breed: function(tags) {
      var breeds = {
        Wall:["wood","cement","glass"],
        Ground:["asphalt","Concrete","Brick"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
   
    description: '{{lorem(3, "sentences")}}',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
   
    img: function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999)+'/fff/?text='+this.name;
    },
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/888/fff/?text=ICON'
    
  }
]


/* Artwork Template */

[
  '{{repeat(500)}}',
  {
    
    id: '{{index(1)}}',
    
    location_id: '{{integer(1,100)}}',
    
    artwork_title: '{{company()}}',
    artist_name: '{{firstName()}} {{surname()}}',
    
    type: '{{random("Graffiti","Murals","outdoor_media")}}',
    breed: function(tags) {
      var breeds = {
        Graffiti:["Tag","Throw-up","Blockbuster","Wildstyle","Heaven","Stencil","Poster","Sticker","Piece"],
        Murals:["Abstract","Contemporary","Decorative","Illustration","Kids","Landscape","Large Wall Murals","Trompe L’Oeil","Wall Mural Ideas"],
    outdoor_media:["Billboards","Lamp Post","Bridge","Guerilla Advertising","Stunt Advertising"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
   
    description: '{{lorem(1, "paragraphs")}}',
    
    date_appear: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    date_disappear: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    
    picture: 'http://placehold.it/32x32',
    inspiration: '{{lorem(1, "paragraphs")}}',
    critique: '{{lorem(1, "paragraphs")}}',
   
    main_img: function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999)+'/fff/?text='+this.name;
    
    },
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/888/fff/?text=ICON'
  }
]



/* Original Template */
[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]