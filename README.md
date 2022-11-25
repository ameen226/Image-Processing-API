# Image Processing API

Image Processing API is node js api used for resizing images and saving them in a serate folder.

## Usage
 
add your desired images into the full folder found in the assets folder and visit this endpoint for resizing images [/api/images/](http://localhost:3000/api/images) and provide filename, width and height at the end of the end point, as follows ?filename=(file name)&width=(desired width)&height=(desired height)

e.g. [http://localhost:3000/api/images?filename=fjord&width=300&height=3000](http://localhost:3000/api/images?filename=fjord&width=300&height=3000)

## valid query arguments

### Width and Height should be positive numbers

### Files Name

* encenadaport
* fjord
* icelandwaterfall
* palmtunnel
* santamonica


## Scripts

* (npm i): for installing all the dependencies
* (npm run test): for testing using jasmine and supertest
* (npm run start): for transpiling from typescript to javascript code and running the server

## Note

* images are selected from the assets/full/ folder and the resized images are outputed in the assets/thumbs/ folder, if the thumbs folder does not exist the server will create one. 


