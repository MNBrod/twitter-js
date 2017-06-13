const _ = require('lodash');

var tweets = [];
var num = 0;
var tnum = 0;
//url's for puppy profile pictures
var p = [
  'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg',
  'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
  'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-5.jpg',
  'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/The-stages-of-puppy-growth.jpg?itok=9ptPJwY8',
  'https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg',
  'https://assets.merriam-webster.com/mw/images/article/art-wap-article-main/puppy-3143-7cfb4d6a42dfc7d9d1ae7e23126279e8@1x.jpg',
  'http://ghk.h-cdn.co/assets/16/09/980x490/landscape-1457107485-gettyimages-512366437.jpg',
  'http://cdn.skim.gs/image/upload/v1456344012/msi/Puppy_2_kbhb4a.jpg',
  'http://www.pawderosa.com/images/puppies.jpg',
  'http://dakotapethospital.com/clients/14546/images/pile_of_puppies.jpg',
  'https://blogs-images.forbes.com/kristintablang/files/2016/02/Uber-Puppies.jpg'
]
//shuffle the array, for reasons!
var pics = shuffle(p);

function add(name, content) {
  num++;
  var img;
  var exists = false;
  for (var i = 0; i < tweets.length; i++) {
    if (tweets[i].name == name) {
      exists = true;
      img = tweets[i].image;
    }
  }
  if (!exists) {
    if (tnum < pics.length) {
      img = pics[tnum];
      tnum++;
    } else {
      var n = Math.floor(Math.random() * pics.length);
      img = pics[n];
    }
  }
  return tweets.push({ name: name, content: content, id: num, image: img });
}

function list() {
  return _.cloneDeep(tweets);
}

function find(properties) {
  return _.cloneDeep(_.filter(tweets, properties));
}

module.exports = { add, list, find };


const randArrayEl = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function () {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function () {
  const awesome_adj = ['woofable', 'bark-worthy', 'tail-waggingly tasty', 'yippy', 'is that a treat?', 'SQUIRREL', '*whimper*', 'worse than a leash', 'where are my balls? WHERE ARE THEY JERRY?'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The humans are just so " + randArrayEl(awesome_adj) + ".";
};

for (let i = 0; i < 10; i++) {
  var test = module.exports.add(getFakeName(), getFakeTweet());
}
module.exports.add('David Yoon', 'test');
module.exports.add('David Yoon', 'test2');


//shuffle function
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}
