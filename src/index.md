---
title: Welcome to the CSUA!
layout: page
---

<div markdown="1" class="block" id="texttitle">

The Computer Science Undergraduate Association supports the undergraduate
computer science student body at UC Berkeley and acts as an entry point
to industry.

</div>

<div class="row">

<div markdown="1" class="block">

# Hello World!

The CSUA hosts tech talks, hackathons, info sessions, CS workshops, LAN parties, and the biannual [Startup Fair](http://ucbstartupfair.com/).

Looking for a place to learn more about computer science and meet other
students? Come visit us at our office (311 Soda) or use our study
lounge (341\* Soda).

</div>

<div markdown="1" class="block" id="upcoming-events">

# Upcoming Events

{% assign events = site.data.events.fa18 %}
{% assign upcoming = "" | split:"" %}
{% assign nowepoch = "now" | date:"%s" %}
{% for event in events %}
{% assign eventepoch = event.start | date:"%s" %}
{% if eventepoch > nowepoch %}
{% assign upcoming = upcoming | push:event %}
{% endif %}
{% endfor %}
{% include events.html events=upcoming %}

[All events]({{ site.baseurl }}{% link about/events.md %})

</div>

</div>

<div class="row">

<div markdown="1" class="block" id="officer-image">
![CSUA Officers at Hearst Mining Circle]({{site.baseurl}}{% link assets/images/tushar_photoshoots/Officers_FA16.jpg %})
</div>

<div markdown="1" class="block">

# People

## [The Politburo]({{ site.baseurl }}{% link about/pb.md %})

The Politburo is composed of elected officers of the CSUA. You can contact the
Politburo at politburo@csua.berkeley.edu.

## [Officers]({{ site.baseurl }}{% link about/officers.md %})

Officers are people you find frequently at the office. They're responsible for
keeping the place open and friendly. Many of them are experienced with
programming and can help you with your classes.

</div>

</div>

<div class="row">

<div markdown="1" class="block">

# The Department

## [Computer Science](http://www.cs.berkeley.edu/)

Learn more about the Computer Science department at UC Berkeley.  The L&S CS
advisors are [Leslie Mach] (379 Soda), [Lydia Raya] (379 Soda) and [Charlene
Hughes] (315 Soda), 

[Leslie Mach]: https://eecs.berkeley.edu/resources/undergrads/cs/advising
[Charlene Hughes]: https://eecs.berkeley.edu/resources/undergrads/cs/advising
[Lydia Raya]: https://eecs.berkeley.edu/resources/undergrads/cs/advising

## [Electrical Engineering & Computer Science](http://www.eecs.berkeley.edu/)

Learn more about the Electrical Engineering & Computer Science department in UC
Berkeley's College of Engineering. The Director of EECS Undergrad affairs is [Audrey Sillers] (203 Cory) and the EECS undergrad advisors are [Nicole McIntyre], [Mayra Rivera] and [Andrea Mejia Valencia] (all 205 Cory).

[Audrey Sillers]: https://eecs.berkeley.edu/resources/undergrads/eecs/advising
[Nicole McIntyre]: https://eecs.berkeley.edu/resources/undergrads/eecs/advising
[Mayra Rivera]: https://eecs.berkeley.edu/resources/undergrads/eecs/advising
[Andrea Mejia Valencia]: https://eecs.berkeley.edu/resources/undergrads/eecs/advising

</div>

<div markdown="1" class="block">

# Our Office

The CSUA Office is located in 311 Soda Hall in front of the 3rd floor entrance
to Soda Hall, at the corner of Hearst & LeRoy.  We also maintain a study lounge
at 341 Soda Hall (within Soda).

We work around the clock to provide computing resources, support, and community
to the computer science students at Berkeley.  In the rare case that you have
an emergency and the office is vacant, you may email us at
politburo@csua.berkeley.edu.

<div markdown="1" id="office-address" class="text">

**Address**\\
Computer Science Undergraduate Association\\
University of California, Berkeley\\
311 Soda Hall\\
Berkeley, CA 94720-1776

</div>

</div>

</div>
