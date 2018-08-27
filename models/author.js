// model: author.js
var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL. virtual is good because you only have to change the URL in one place.
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

AuthorSchema
.virtual('birth_formatted')
.get(function () {
  return this.date_of_birth ? moment(this.date_of_birth).format('MM/DD/YYYY') : '';

});

AuthorSchema
.virtual('death_formatted')
.get(function () {
  return this.date_of_death ? moment(this.date_of_death).format('MM/DD/YYYY') : '';
});

AuthorSchema
.virtual('birth_update_formatted')
.get(function () {
  return this.date_of_birth ? moment(this.date_of_birth).format('MM/DD/YYYY') : '';
});
  
AuthorSchema
.virtual('death_update_formatted')
.get(function () {
  return this.date_of_death ? moment(this.date_of_death).format('MM/DD/YYYY') : '';
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);