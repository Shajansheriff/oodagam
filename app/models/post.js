// app/models/post.js
import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({  
    title: attr('string'),
    body: attr('string'),
    thumbnail: attr('string')
});