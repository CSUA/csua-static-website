---
title: Politburo
---

The Politburo consists of the seven elected officers of the CSUA. They are the
governing body of the CSUA and a unique group of people who are eager to talk
to you about the CSUA. You can contact the Politburo at
politburo@csua.berkeley.edu.

![](https://www.csua.berkeley.edu:8080/static/images/pb_fa18.jpg)

> Komrade! Let it be known that, in the era of Glasnost, the Ex-comm of the CSUA was renamed by the will of the people! That is how the Ex-comm was become the politbyuro, or politburo in the weak tongue of the American demons! All praise the people's will! All praise the mighty politburo!

-- CSUA Encyclopedia

{% assign titles = "President, VP of Tech, VP of Industry Relations, Secretary/Treasurer, External Events Coordinator, Internal Events Coordinator, Outreach Chair" | split:", " %}
{% assign unames = "president, vp, indrel, treasurer, externalevents, internalevents, outreach" | split:", " %}

{% for pb_roster in site.data.pb %}
{% if pb_roster.semester == "Fall 2018" %}

<div class="politburo">
{% for title in titles %}
{% assign uname = unames[forloop.index0] %}
{% assign fullname = pb_roster[uname] | split:" " %}
{% assign firstname = fullname | first %}
{% assign lastname = fullname | last %}
{% assign officer = site.data.officers5 | where:"first_name",firstname | where:"last_name",lastname | first %}
<div class="pb-member">
<img class="photo-frame" src="https://www.csua.berkeley.edu/media/{{ officer.photo1 }}">
<div class="text">
<div class="title">{{ title }}</div>
<div class="name">{{ officer.first_name }} {{officer.last_name }}</div>
<div class="email">{{ uname }}@csua.berkeley.edu</div>
<div markdown="1" class="about">
The President leads meetings and represents the CSUA in its duties as the
undergraduate computer science students' representative body. The President
communicates with the University, faculty, staff, and other student
organizations.

Please contact {{ officer.first_name }} for general questions or concerns about the CSUA.
</div>
</div>
</div>
{% endfor %}
{% endif %}
{% endfor %}
</div>
