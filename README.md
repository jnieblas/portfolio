# Portfolio
The code base for my portfolio site!

## About
My goal with Portfolio was to keep it simple, while adding a touch of visually appealing design. Portfolio was built using Node,
Express, Pug and SASS.

I chose to use Node/Express as a framework since it takes care of pretty much everything off the bat! Portfolio only has one page
(the index) and everything else is containers loaded off of the index, so I barely had to modify the framework code. 
Originally, I had separate routes/views/controllers for the index and projects pages, but I felt that the rendering between the two
was unnecessary for the amount of content on each page. The decision to do this ultimately made the server side extremely light weight, 
increasing the overall speed of rendering for Portfolio.

I implemented Pug as a template engine because it is much less cluttered than regular HMTL and is easier to modify. The clear advantage 
of Pug is its Python-style indentation, making the code easier to digest.

I decided to use SASS for maintainability's sake. Rather than having normal, messy CSS, SASS allowed me to organize the CSS in a 
much more readable, tiered fashion. Also, SASS allows for variable assignments; consequently, if I ever have the desire to completely
change the color palette, I can do so swiftly without having to manually change every hex color code.

## Set-Up
Simply do:

```
npm install
npm start
```
Node can be installed [here](https://nodejs.org/en/download/).

And that should be it!
