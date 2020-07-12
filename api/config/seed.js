'use strict';// Insert seed models below

var User = require('../api/users/users.model');

User.countDocuments({}).exec((err, count) => {
    if (err) {
         console.error(err);
         return;
    }    if (count == 0) {
       User.create({
            name : 'Sithara',
            username : 'sithara',
            password : 'vendoradmin'
       }, (err, seedUser) => {
            if (err) {
                console.error(err);
                return;
            }
           console.log("Seed superuser created");
       })
    }
})