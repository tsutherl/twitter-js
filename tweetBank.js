var _ = require('lodash');

var data = {};

function add (name, content) {
    if (!data[name]) {
        data[name] = [content];
    } else {
        data[name].push(content)
    }
    
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
    //console.log(properties, _.filter(data, properties));
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Yuki', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (var i = 0; i < 20; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}


//module.exports.add('tati sutherland', 'awesome');

//console.log(data);

