Discord Spotify Integration
===================


**Discord Spotify Integration** is my super-catchy name for a Discord self-bot which updates the 'Now Playing' field of the Discord client with whatever song happens to be playing on your local Spotify client.
Visit https://sam-shannon.id.au/home/programming/discord-spotify-integration/ for more information.

----------


How to Use
----------------
1. Download and install [**Node.js**](https://nodejs.org) (if you don’t already have it)
>**Note:**
>The version of Node.js used is `6.10.2`

2. Git clone the repository (or manually download it)
3. Put the folder with the **bot.js** file inside it somewhere it won’t get deleted
4. Open a command prompt window with the context of that folder using one of the following options
	* SHIFT+RIGHT CLICK in the folder and `Open Command Window here`
	* Run command prompt normally and cd into the folder
5. In the command prompt window, run `npm init` and run through the initialiser. Use the defaults for everything, it’s not really important except that it lets you do the next bit without errors
6. In the command prompt window, run `npm install spotify-web-helper@1.7.1 discord.js@11.0.0 goo.gl@0.1.4 --save` to install dependencies for the bot, and link them to the bot so it can find them.
>**Note:**  
>You can ignore any warnings about Unmet Dependencies for Discord.js, they are all optional.  
>The versions I used are: spotify-web-helper `1.7.1`, discordjs `11.0.0`, goo.gl `0.1.4`

7. Get your Discord token:
	1. Open up discord and open the inspector window (CTRL + SHIFT + I)
	2. Go to the Application tab
	3. Under Storage, select Local Storage, and then discordapp.com
	4. Find the token row and copy the value that is in quotes.
8. Paste that (quotes included) into the config.json file where it says “token”:  
So it’d look something like:  
	```    
{  
	    "email":"",   
	    "password":"",     
	    "username":"",     
	    "token":"YOURTOKEN",
	    "googlekey":"YOURGOOGLEKEY"     
}  
	```

9. You will also need to get a key from google for the URL shortening (see http://goo.gl/4DvFk for more info).
10. In the command prompt window, run ‘Node bot.js’ and you should see it connect as you, and then output whatever song you’re playing in Spotify. 
>**Note:**
>I’d have Spotify running beforehand just in case it doesn’t detect Spotify after it starts. 
>Also, due to a quirk of Discord... Everyone else can see the status changes, but you can't. Even if you log in as yourself on a different client. Only **other** users can see the changes.

 Further Refinements
------------------------------
If you want it to run invisibly in the background like how I talked about in my blog post (Windows only):

1. Open the **Task Scheduler** app
2. Click **Create Task** in the right hand column
3. Name it and Describe it how you like
4. In the **Triggers** tab, create a new one and choose **At log on** from the topmost dropdown
5. I personally delayed the task for 1 minute to allow Spotify to start first, though that may not be necessary, or a longer delay may be necessary.
6. In the **Actions** tab, create a new one and browse to the location of the included .vbs script
7. After selecting it, copy everything except the `\botStart.vbs` at the end, and paste that into the **Start in (optional)** box (IE: Set the Start in box to be whatever folder the .vbs script is in)
8. Configure the rest however you like, it should now automatically run, invisibly, when you log in.
