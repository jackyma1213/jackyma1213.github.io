/**
 Name: MA Ho Chi, Jacky
 Sid: 11555116029
 **/

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://s1155116029:x95916@localhost/s1155116029");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
	// Upon opening the database successfully
db.once('open', () => {
	console.log("Connection is open...");
});


/***** Schema *****/ 

const LocationSchema = mongoose.Schema({
	locId: { type: Number, required: true,
	unique: true },
	name: { type: String, required: true },
	quota: { type: Number }
});

const EventSchema = mongoose.Schema({
	eventId: { type: Number, required: true,
	unique: true },
	name: { type: String, required: true },
	loc: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
	quota: { type: Number }
});

const Location = mongoose.model('Location', LocationSchema);
const Event = mongoose.model('Event', EventSchema);


/***************/


/****** Get Method ******/

app.get('/event/:eventId', (req,res) => {

	let eventName, eventLocation, eventQuota, locObjId, locId;

	Event.findOne(
	{
		eventId: req.params['eventId']
	},
	'eventId name loc quota', 
	(err, e) => {
		if (err)
			res.send(err);
		if(e != null)
		{
			eventName = e.name;
			locObjId = e.loc;
			eventQuota = e.quota;
			Location.findOne(
			{
				_id: locObjId
			},
			'locId name', 
			(err, e) => {
				if (err)
					res.send(err);
		
				
				locId = e.locId;
				eventLocation = e.name;
				res.send(`
				Event name: ${eventName}<br>
				Location Id: ${locId}<br>
				Event location: ${eventLocation}<br>
				Event quota: ${eventQuota}`);
		
			});
		}
		else
		{
			res.send(`Event with {eventId:${req.params['eventId']}} not found`);
		}
		

	});

});

app.get('/event', (req,res) => {

	let content = "";

	Event
	.find({
		quota : {$gt: 0}
	})
	.populate("loc")
	.exec((err, events) => {
		if(err)
			res.send(err);
		events.map(event => {
			content+=`
			Event name: ${event.name}<br>
	 		Location Id: ${event.loc.locId}<br>
	 		Event location: ${event.loc.name}<br>
	 		Event quota: ${event.quota}<hr>`;
		});
		res.send(content);
	});
});

app.get('/loc/:locId', (req,res) => {
	Location.findOne(
	{locId: req.params['locId']},
	'locId name quota', 
	(err, location) => {
		if (err)
			res.send(err);
		if(location != null)
		{
			res.send(`
			Location Id: ${location.locId}<br>
			Location name: ${location.name}<br>
			Location quota: ${location.quota}
			`);
		}
		else
		{
			res.send(`Location with {locId:${req.params['locId']}} not found`);
		}
	});
});

app.get('/loc', (req,res) => {

	let content = "";

	if(req.query.quota != undefined)
	{
		Location
		.find({
			quota :  { $gte : req.query.quota }
		},
		'locId name quota',
		(err, locations) => {
			if(err)
				res.send(err);
			if(Object.entries(locations).length !== 0)
			{
				locations.map(location => {
					content+=`
					Location Id: ${location.locId}<br>
					Location name: ${location.name}<br>
					Location quota: ${location.quota}<hr>`;
				});
				res.send(content);
			}
			else
			{
				res.send(`There is no location with ${req.query.quota} quotas`);
			}
		});
	}
	else
	{
		Location
		.find({},
		'locId name quota',
		(err, locations) => {
			if(err)
				res.send(err);
			locations.map(location => {
				content+=`
				Location Id: ${location.locId}<br>
				 Location name: ${location.name}<br>
				 Location quota: ${location.quota}<hr>`;
			});
			res.send(content);
		});
	}

});


/*************************/

/****** Post Method ******/

app.post('/event', (req,res) => {

	let newEvent, newEventId;

	Event
	.findOne()
	.sort({eventId : -1})
	.limit(1)
	.exec((err, event) => {
		if(err)
			res.send(err);

		newEventId = event.eventId + 1;

		Location
		.findOne(
		{locId : req.body['loc']},
		'locId quota',
		(err, location) => {
			if(err)
				res.send(err);
			if(location != null){
				if(location.quota < req.body['quota'])
				{
					res.send(`Selected Location not enough for the event`);
				}
				else
				{
					newEvent = new Event({
						eventId : newEventId,
						name: req.body['name'],
						loc: location._id,
						quota: req.body['quota'],
					});

					newEvent.save( (err) => {
					if (err)
						res.send(err);
					res.send(`Event created!`);
					});
				}
			}
			else
			{
				res.send(`Location not found`);
			}
		});

	});

});

app.post('/loc', (req,res) => {

	let newLocation, newLocationId;

	Location
	.findOne()
	.sort({locId : -1})
	.limit(1)
	.exec((err, location) => {
		if(err)
			res.send(err);

		newLocationId = location.locId + 1;

		newLocation = new Location({
			locId : newLocationId,
			name: req.body['name'],
			quota: req.body['quota'],
		});

		newLocation.save( (err) => {
		if (err)
			res.send(err);
		res.send(`Location created!`);

		});

	});


});


/**************************/

/****** Delete Method ******/

app.delete('/event/:eventId', (req,res) => {

	Event
	.findOne({eventId : req.params['eventId']})
	.exec((err, events) =>{
		if(err)
			res.send(err);
		if(events != null)
		{
			Event.remove(
				{
					eventId : req.params['eventId']
				},
				(err, e) =>
				{
					if(err)
						res.send(err);
					res.send(`Event deleted`);
				})
		}
		else
		{
			res.send(`eventId ${req.params['eventId']} not exist`);
		}
	});

});

/***************************/

app.all('/*', (req,res) => {
	res.send(`Hello World!`);
});

const server = app.listen(2061);
