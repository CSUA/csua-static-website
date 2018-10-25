---
title: Sponsors
---

We are very grateful to all our company sponsors who make much of what we do
possible. Thank you!  

<div markdown="1" class="block">
# Industry
Interested in working with the CSUA to sponsor an event or to speak at one of
our events? Please send an email to indrel@csua.berkeley.edu.
</div>


{% for sponsor in site.data.sponsors %}

{% endfor %}

<div markdown="1" class="block">
# Current Sponsors
<div class="sponsors">
{% assign sponsors = site.data.sponsors | sort: "name" %}
{% for sponsor in sponsors %}
<div class="sponsor">
<div class="sponsor-image"><img src="https://www.csua.berkeley.edu/media/{{ sponsor.photo }}"></div>
<div class="sponsor-name"><a href="{{ sponsor.url }}">{{ sponsor.name }}</a></div>
<div class="sponsor-description">{{ sponsor.description }}</div>
</div>
{% endfor %}
</div>
</div>
