# MAL Rankings Display Site

This project is meant as a demonstration of skills and knowledge from Wides🎸, the self taught developer, mediocre philosopher,
ugly bard, and village idiot...

Summary of purpose is really simple:

    1. Make a request to My Anime List API
    2. Display the Results

Reality is a cruel mistress, however, and I discover complications along the path to this humble goal.

As API Keys and security became a concern, I had to alter the intended simplicity of this project and inject a little complication. I
added my own simple backend server to proxy a request over to MAL and avoid exposing keys from the frontend. However, this has the
*small* problem of essentially turning my backend into an unmonitered and automagically authorized usage of MY API key, and I prefer
my backend remain mine alone, so, that's not ok...

I came up with what I hope is an eloquent solution to keep as much simplicity as possible. This may not work out long term, at scale,
and certainly would be a nightmare to manage with even just a couple more things going at once, so flame me as needed. I wrote a quick
pseudo random character generator, set it to generate a new slug every time a request to the server is made, send that slug to the frontend
to use as a URL endpoint, then change the slug before the next request comes in. This works because my simple server ONLY does these things.
I'm not trying to manage this system within hundreds of routes which I think would be near imposibble to maintain.

Anywho, this project is meant as the quick and dirty capstone to the simple projects I've been doing. Now, I'm moving on to the next layer of
complexity and will be building some more stuff soon. Also, I know there's more about security I don't know than I do know, so if I'm making a
glaring mistake here, please let me know. I truly do appreciate feedback and a chance to learn the right answer.

## Technologies Used

As this became more than a simple webpage showing some cool results of an API request, I had to and then decided to tack a couple extra layers
on top of the typical vanilla javascript, html, css I was using prior. First, Node and Express to build the simple server. I've played with these
systems a lot in the past so this was the easiest thing for me to do. Also, I decided to use Bootstrap to glue the frontend design together. I'm not
a designer and Ive done A LOT of css writing the last few days experimenting with the other projects looks and feels...seriously guys, I'm not a
designer, lol. So yeah, that made it simpler to get stuff going and I like the basic look now, so, meh?
