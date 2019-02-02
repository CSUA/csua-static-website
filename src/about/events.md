---
title: Events
permalink: /events/
---


{% assign categories = site.data.events.fa18 | map:"category" | uniq %}
<div class="events">
{% for category in categories %}
{% assign events = site.data.events.fa18 | where:"category",category %}

<div markdown="1" class="event-category">
## {{ category }}

{% include events.html events=events %}

</div>

{% endfor %}

</div>

## Google Calendar

<div class="google-calendar">
<iframe
src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=berkeley.edu_rv641pmt9o13qnh1ss4uib78bs%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FLos_Angeles"
style="border-width:0" width="800" height="600" frameborder="0"
scrolling="no"></iframe>
</div>
