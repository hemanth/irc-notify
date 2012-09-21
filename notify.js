#!/usr/bin/env node
var irc = require('irc');
var config = require('./config');

var chans   = config.chans.split("/, */");
var server  = config.server;
var botName = config.botName;
var friends = config.friends.split(/, */);
var master  = config.master;

var bot = new irc.Client(server,botName, {
  channels: chans
});

bot.addListener('join', function (channel, who) {
  console.log(who);
  console.log(friends.indexOf(who));
  console.log(friends);
  if(friends.indexOf(who) >=0){
    bot.say(master,who + " joined "+channel); 
  } 
});
