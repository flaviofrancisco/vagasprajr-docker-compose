use('vagasprajrdb');

const email = "youremail@yahoo.ca";

db.users.updateOne({email: email}, {$set: {is_email_confirmed: true}});

const result = db.roles.insertOne({name: "admin", _id: ObjectId('650d5e137ece568cd2f11a0a')});

// remove roles from the user
db.users.updateOne({email: email}, {$set: {roles: []}});

db.users.updateOne({email: email}, {$set: {roles: ['650d5e137ece568cd2f11a0a']}});