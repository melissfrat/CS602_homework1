/**
 * Created by melissafratangeli on 10/9/17.
 */

var hwkVar = module.require('./employeeEmitter.js');
var colors = module.require('colors');
var util = module.require('util');
var EventEmitter = require('events');
var returnobject = null;

var TheEmployeeEmmitter = new hwkVar.EmployeeEmitter([{ id: 1, firstName: 'John', lastName: 'Smith' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'John', lastName: 'Doe' }]);

// register and handle on eventlookupByLastName
TheEmployeeEmmitter.on('eventlookupByLastName', function (args, retobj) {
    //print out the input arg
    console.log(("Event eventlookupByLastName raised! (" + args + ")").blue);
    //for all values returned print out the json object
    console.dir(retobj, { depth: null, colors: false });

});

TheEmployeeEmmitter.on('eventaddEmployee', function (firstName, lastName) {
    //print out the input arg
    console.log(("Event addEmployee raised! " + firstName + "," + lastName).blue);

});

TheEmployeeEmmitter.on('eventlookupById', function (args, retobj) {
    console.log(("Event lookupById raised! " + args).blue);
    console.dir(retobj, { depth: null, colors: false });
});



console.log(("Lookup by last name (Smith)").red);
TheEmployeeEmmitter.lookupByLastName('Smith');

console.log(("\nAdding employee William Smith").red);
TheEmployeeEmmitter.addEmployee('William', 'Smith');

console.log(("\nLookup by last name (Smith)").red);
TheEmployeeEmmitter.lookupByLastName('Smith');

console.log(("\nLookup by id (2)").red);
TheEmployeeEmmitter.lookupById(2);
 
