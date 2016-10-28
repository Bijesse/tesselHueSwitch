# Tessel Hue Switch
The purpose of this project is to encourage more use of Philips Hue functionality by creating a board with pre-set Hue options.
![Image](http://i.imgur.com/ZhqZ2rh.jpg)

###The Issue
I purchased a Philip Hue set over a year ago and found that after a month or so you rarely find yourself going to the app on your phone to make cool lights. Instead, the appeal goes away and you just flip the light switch on like you would with any lightbulb.

###The Solution 
A small circuit board with buttons, lights and switches mounted next to a light switch that can quickly make use of the Philips Hue without taking out your phone.

###Resources
* [Philips Hue API](http://www.developers.meethue.com/)
* [Johnny-five Inventors Kit](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/hardware-installation-and-setup)

###Tessel 2 and Johnny-Five
When searching for the best hardware and software for this project the Johnny-Five Invetors Kit was a clear best option. The Tessel 2 comes with an Ethernet port and wifi capabilities and Johnny-Five makes writing the code as simple as possible for a for someone who is using node for the first time.

####Step 1: WebApp
The first step in this project for me was to tap into the Philips Hue API to create a webapp that can control the lights in my apartment when on the local network. Luckily the API is well documented and comes with this great debugger that allows you to test GET and PUT commands to your lights.

Debugger Clip can be found at
`http://<bridge ip address>/debug/clip.html`

My Webapp can be found at [http://bijesse.com/hueWebApp/](http://bijesse.com/hueWebApp/).

####Step 2: Prototype
The next step in this project was to take out the Johnny-Five inventors kit and set up a breadboard with a button and potentiometer with the capability of sending PUT requests to the lights on the network. After attending a Nodebots event I was able to walk through the [Johnny-five Inventors Kit](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/hardware-installation-and-setup) tutorial to set up the necessary modules (new to this) and wire up the circuit on a breadboard (old to this).  

I got the circuit up and running and immediately posted [this video](https://twitter.com/Bijesse/status/771714092625190912) to Twitter.

####Step 3: Permanent prototyping
Originally I was under the assumption that in order to get this thing off the breadboard I was going to have to print a circuit board. However, I have done this in 6 years and lack the space/capacity for a ferric acid bath in my apartment. That's when I learned about [solderable breadboards](https://www.amazon.com/s/ref=nb_sb_ss_c_1_11?url=search-alias%3Daps&field-keywords=solderable+breadboard&sprefix=solderable+%2Caps%2C421) and permanent prototyping. 

####Next Steps
I now have a board with 4 pre-set buttons (blue, red, green & yellow) and a dimmer switch hooked up to my tessel running on the network using `tessel push` and powered by the outlet. The last step in this process is to build a box for it to live in and mount it next to the light switch. I am hoping to find a clear plastic to use for the frame to show off the wiring and intricacies. 