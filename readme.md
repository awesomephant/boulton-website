---
---

# Readme

Hey Oliver! I decided to use a slightly more involved build process to work on your website. This is to make it easier for me (and you) to edit the site and add content while keeping everything consistent. However, it requires some setup which is detailed below.

## Getting started

The first time you run this project, you need to do the following steps in the order they are listed. 

1. Install [Node.js](https://nodejs.org/en/)
2. Install [yarn](https://yarnpkg.com/lang/en/)
3. Using your command line, ```cd``` into the project directory and run:
    1. ```yarn```
    2. ```npm i -g gulp-cli```
    3. ```gulp images```
    4. ```npm start```
4. In your browser, type in the URL the last command gave you. Usually, this is ```http://localhost:8080```.

Now, you have a local development server up and running. Whenever you make changes to the site, it will automatically re-compile everything and refresh the browser.

## Editing content

All your content (projects) are represented by Markdown files in the ```projects``` folder. You should open these in your code editor. When you do, you'll find some meta-information about the project at the top of the file:

```
tags: project
layout: project
title: A Glib Remark
subtitle: A Fragment or Unfinished Phrase. Sculptures, 2018.
featured-images:
    -   url: OLIVER_BOULTON_A_GLIB_REMARK_2.png
        width: 100
```

The list of available meta-data is as follows:

- ```tags```: Safe to ignore. 
- ```layout```: Safe to ignore. 
- ```title```: Appears on the homepage 
- ```subtitle```: Appears on the homepage next to the title 
- ```featured images```: These appear on the homepage. See ```octopus-of-offshoots.md``` for usage example. Each featured image has two sub-fields:
    - ```url```: The images filename
    - ```width```: The width the image will take up in percent. This will be ignored on small screens.
- ```file```: In cases where you want to link directly from the homepage to a PDF file (or any other static file), write it's URL into this field. See ```my-mouth-became-an-o.md``` for usage example. 

Below the meta-data is the content of each project page. You can write plain text into this, or use the [Markdown Syntax](https://www.markdownguide.org/basic-syntax) to do more advanced things. I've also set up two custom short codes: 

- ```sticky```: Anything between these tags will stick to the top of the page. See ```perspectives.md``` for usage.
- ```image```: This contains some custom logic to make images load quicker. It has several sub-fields:
    - ```src```: Filename of your image
    - ```alt```: Description fo your image (important for accessibillity)
    - ```align```: How the image is positioned horizontally. Possible values are ```left```, ```right``` and ```center```.
    - ```width```: How wide the image should be in relation to the browser window. This will be ignored on smaller screens.

See ```perspectives.md``` for usage examples of all of these.

## Deploying the site

Using an FTP program (or whatever method you prefer), transfer the contents of the ```_site``` directory to your hosting provider.