---
title: Officers
layout: page
permalink: /officers/
---

Our officers are here to make your undergraduate computer science experience
the best it can be. Need tutoring? Want help on a personal project? Looking for
a job? Want to find your community? Come visit us in 311 Soda!

### Office Hours

{% assign days = "Monday Tuesday Wednesday Thursday Friday" | split:" " %}
{% assign shortdays = "Mon Tues Wed Thu Fri" | split:" " %}
{% assign times = "10-11 AM,11-12 PM,12-1 PM,1-2 PM,2-3 PM,3-4 PM,4-5 PM,5-6 PM,6-7 PM"
	| split:"," %}

<div class="officer-calendar">
<table>
<tr>
<th>
</th>
{% for day in days %}
<th class="day">
{{ day }}
</th>
{% endfor %}
</tr>
{% for time in times %}
<tr>
<td class="time">
{{ time }}
</td>
{% for day in days %}
{% assign office_hours = shortdays[forloop.index0] | append:" " | append:time %}
{% assign officers = site.data.officers
	| where:"office_hours",office_hours
	| where:"enabled","true" %}
<td class="officer-cell {% if officers %} occupied {% endif %}">
{% for officer in officers %}
<a href="#{{ officer.first_name }}{{ officer.last_name }}">
<span class="{% if officer.root_staff %} root-staff {% endif %}">
<span class="{% if officer.tutor_subjects %} tutor {% endif %}">
<span class="officer-name">{{ officer.first_name }} {{ officer.last_name | slice: 0 }}.</span>
</span>
</span>
</a>
{% endfor %}
</td>
{% endfor %}
</tr>
{% endfor %}
</table>
</div>

[Spreadsheet of office hours][oh]

[oh]: https://docs.google.com/spreadsheets/d/1EXPLi9cWIM1x5mC6fq6_MQnvJ5aantnrjwcIfEXqHuc/edit#gid=0


💻: Root staff officers--CSUA Officers who maintain CSUA's computing resources.
Come talk to them if you need help with your CSUA account, or email them at
root at csua.berkeley.edu.

✋: Tutors--Can help you with your classes, click to find out more. [Read more
about tutoring][tutoring]

[tutoring]: {{ site.baseurl }}{% link about/tutoring.md %}

### Current Officers

{% assign officers = site.data.officers | sort:"first_name" %}
<div class="roster">
{% for officer in officers %}
{% if officer.enabled %}
<div class="officer" id="{{ officer.first_name }}{{ officer.last_name }}">
<div class="photo-frame">
{% if officer.photo2 %}
<img class="photoone" src="https://www.csua.berkeley.edu/media/{{ officer.photo1 }}">
<img class="phototwo" src="https://www.csua.berkeley.edu/media/{{ officer.photo2 }}">
{% else %}
<img class="single" src="https://www.csua.berkeley.edu/media/{{ officer.photo1 | default:"images/officers/cardigan.jpg" }}">
{% endif %}
{% if officer.root_staff %}
<div class="root-staff-banner">Root</div>
{% endif %}
</div>
<div class="name">{{ officer.first_name }} {{ officer.last_name }}</div>
<div class="officehours" markdown="1">
[{{ officer.office_hours }}](#office-hours)
</div>
<div class="blurb">{{ officer.blurb | default:"$BLURB" }}</div>
{% if officer.tutor_subjects %}
<div class="tutor-subjects">Tutors for: {{ officer.tutor_subjects | join:", " }}</div>
{% endif %}
</div>
{% endif %}
{% endfor %}
</div>

