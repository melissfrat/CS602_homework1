/**
 * Created by melissafratangeli on 10/9/17.
 */
var _ = require('underscore');
const EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

// this is the employee emitter class
function EmployeeEmitter(args) {
    //store the data locally
    this.data = args;
    //bind to properties
    EventEmitter.call(this);
}
//call util inherits to inherit from event emitter
inherits(EmployeeEmitter, EventEmitter);

// Sample member function that raises an event

EmployeeEmitter.prototype.lookupById = function (value) {
    //search the data jason objects for the id pare and return that object
    var returndata = _.findWhere(this.data, { id: value });
    //emit the eventlookupByID
    this.emit('eventlookupById', value, returndata);
    return;

}
EmployeeEmitter.prototype.lookupByLastName = function (lastNameIn){
    //search the data jason objects for the id pare and return that object
    var returnnamelist = _.where(this.data, { lastName: lastNameIn });

    this.emit('eventlookupByLastName', lastNameIn, returnnamelist);
    return;

}
EmployeeEmitter.prototype.addEmployee = function (firstNameIn, lastNameIn) {


    //search the data jason objects for the id  and get the array of ids
    var returidlist = _.pluck(this.data, 'id');

    //loook for max id in the array
    var maxId = _.max(returidlist);

    //add one to id
    maxId++;

    //put the new json object on the json array with input name
    this.data.push({ id: maxId, firstName: firstNameIn, lastName: lastNameIn });
    this.emit('eventaddEmployee', firstNameIn, lastNameIn);

    return;
}

module.exports.EmployeeEmitter = EmployeeEmitter;


//From the module,
//export one property EmployeeEmitter referencing the constructor
//function.