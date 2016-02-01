[![Build Status](https://travis-ci.org/JeremyWei/easy_mongo.svg?branch=master)](https://travis-ci.org/JeremyWei/easy_mongo)

homework01(写一个NPM,发布到 npmjs上)
===========

Install
===========

	npm install nodejsstudy

How to use
===========

	var easyMongo = require('easy_mongo'),
	  easyClient = easyMongo.create();
  
	easyClient.collection('user', function (err, collection) {
	  // do something with collection user
	  var user = {'name' : 'foo'};
	  collection.insert(user, {w:1}, function(err, result) {
	    // ...
	  });
	});


	// DB
	easyClient.database('test', function (err, db) {
	  // do something with db test
	  db.createCollection('friend', function (err, collection) {
	    // ...
	  });
	});
