# hello, world
hello, world is a swipeable user interface meant to give tech-savvy users a quick insight on their day’s goals and outlooks.

## About the project
I wanted to make hello, world to combine all that I've learned this semester and become familiar with reactjs, jquery and how to use an api. Throughout the development process, I realized that using p5's text and canvas tools would be easier than using reactjs for my purposes. I used OpenWeatherAPI for the weather canvas, more specifically the daily weather and 5-day/3 hour forecast APIs. I used JQuery to create the rotating canvas elements and seperated each of the 3 "cards" with the welcome screen, time, and weather as 3 distinct p5 canvases. Weather conditions are given to users based on their physical coordinates, which are obtained from a geolocation API. 

I was originally going to use Leap Motion, but had trouble integrating it to recognize hand gestures, as this is only a Unity functionality. This project is viewable on Magic Leap's Helio browser. The black background allows for the transparent effect to occur when viewed with a headset. 

## Inputs, Outputs
Inputs: Your physical location, local time, and embedded next and previous buttons.
Outputs: 3 rotating canvases with location and time-accurate data. 

### Libraries Used
I used p5js, JQuery, OpenWeather API, and Geolocation.

##### Source Credit
JQuery source code for the rotating canvases was obtained from public [repository](https://github.com/DaftCreation/Card-Slider)

Background image in time canvas is royalty free stock photo with ID: 1195456621. "Abstract color of clouds and sky on pink in sunshine for texture background." by Nopphinan ["https://www.shutterstock.com/image-photo/abstract-color-clouds-sky-on-pink-1195456621"]

