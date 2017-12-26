const Discord = require('discord.js');
const SpotifyWebHelper = require('spotify-web-helper');
const helper = SpotifyWebHelper();

var config = require("./config.json");
var bot = new Discord.Client();

var googl = require('goo.gl');

// Set a developer key (_required by Google_; see http://goo.gl/4DvFk for more info.)
googl.setKey(config.googlekey);
console.log(config.googlekey);

console.log(`Trying to Log In to Discord`)
try {
    bot.login(config.token, output);   
} catch(e) {
    console.log(`Caught outer exception`)
    console.log(e);
}

function output(error, token) {
    if (error) {
        console.log(`There was an error logging in: ${error}`);
        return;
    } else {
        console.log(`Logged in. Token: ${token}`);
    }
}

bot.on('ready', function () {
    try {
        console.log("Connected to Discord using: " + bot.user.username);
        bot.on('disconnected', function () {
            console.log(`Disconnected from Discord. Reconnecting.`)
            setTimeout(function () {
                bot.loginWithToken(config.token, output);
            }, 5000);
        });
        console.log(`Trying to Connect to Spotify`)
        // Spotify stuff
        helper.player.on('ready', () => {
            console.log(`Connected to Spotify`)
            // set game to whatever is playing, or empty if not playing
            helper.player.on('status-will-change', status => {
                if (status.playing) {
                    var promise = googl.shorten(status.track.track_resource.location.og);
                    // Playing What
                    promise.then(function (shortlink) {
                        var pa = "♪" + status.track.track_resource.name + "-" + status.track.artist_resource.name + "@ " + shortlink +"♪";
                        console.log(pa);
                        bot.user.setGame(pa);
                    }).catch(function (error) {console.log(error)});
                } else {
                    console.log("Paused");
                    bot.user.setGame();
                }
            });

        });
    } catch(e) {
        console.log(`Caught Inner Exception`)
        console.log(e);
    }
});