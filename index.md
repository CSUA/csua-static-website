---
title: Welcome to the CSUA!
layout: page
---

<div class="block" id="texttitle">

The Computer Science Undergraduate Association supports the undergraduate
computer science student body at UC Berkeley and acts as an entry point
to industry.

</div>

<div markdown="1" class="block" id="upcoming-events">

# Upcoming Events

{% for event in site.data.events %}
<div class="event">
<div class="event-title">
<a href="{{ event.link }}">
{{ event.title }}
</a>
</div>
<div class="event-time">{{ event.time }}</div>
<div class="event-location">{{ event.location }}</div>
</div>
{% endfor %}
</div>

<div class="column columnleft">

<div markdown="1" class="block">

# Hello World!

The CSUA hosts tech talks, hackathons, info sessions, CS workshops, LAN parties, and the biannual [Startup Fair](http://ucbstartupfair.com/).

Looking for a place to learn more about computer science and meet other
students? Come visit us at our office (311 Soda) or use our study
lounge (341\* Soda).

</div>

<div markdown="1" id="officer-image">
![CSUA Officers at Hearst Mining Circle]({{site.baseurl}}{% link assets/images/tushar_photoshoots/Officers_FA16.jpg %})
</div>

<div markdown="1" class="block">

# The Department

## [Computer Science](http://www.cs.berkeley.edu/)

Learn more about the Computer Science department at UC Berkeley.  The L&S CS
advisors are [Lily Zhang][lily] (379 Soda), [Charlene Hughes][charlene] (203
Cory), and [Emerald Templeton][emerald] (377 Soda).

[lily]: https://lilyzhang.youcanbook.me/ 
[charlene]: https://cdhughes.youcanbook.me/
[emerald]: https://emeraldtempleton.youcanbook.me/

## [Electrical Engineering & Computer Science](http://www.eecs.berkeley.edu/)

Learn more about the Electrical Engineering & Computer Science department in UC
Berkeley's College of Engineering.  
The CoE EECS advisor is [Sarah Van Nostrand][sarah] (203 Cory).

[sarah]: http://www.eecs.berkeley.edu/Students/Staff/vannostrand.shtml

</div>

</div>

<div class="responsivehidden blockseparation"></div>

<div class="column columnright">

<div markdown="1" class="block">

# People

## [The Politburo]({{ site.baseurl }}{% link about/pb.md %})

The Politburo is composed of elected officers of the CSUA. You can
contact the Politburo at politburo@csua.berkeley.edu.

## [Officers]({{ site.baseurl }}{% link about/officers.md %})

Officers are people you find frequently at the office. They're responsible
for keeping the place open and friendly. Many of them are experienced
with programming and can help you with your classes.

</div>

<div markdown="1" class="block">

# Our Office

The CSUA Office is located in 311 Soda Hall in front of the 3rd floor entrance
to Soda Hall, at the corner of Hearst & LeRoy.  We also maintain a study lounge
at 341 Soda Hall (within Soda).

We work around the clock to provide computing resources, support, and
community to the computer science students at Berkeley.
In the rare case that you have an emergency and the office is vacant, you
may email us at politburo@csua.berkeley.edu.

<div markdown="1" id="office-address" class="text">

**Address**  
Computer Science Undergraduate Association  
University of California, Berkeley  
311 Soda Hall  
Berkeley, CA 94720-1776

</div>

</div>

</div>
