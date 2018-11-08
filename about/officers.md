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
<td class="officer-cell">
{% assign office_hours = shortdays[forloop.index0] | append:" " | append:time %}
{% assign officers = site.data.officers
	| where:"office_hours",office_hours
	| where:"enabled","true" %}
{% for officer in officers %}
<div class="{% if officer.root_staff == "true" %}root-staff{% endif %}">
<a href="#{{ officer.first_name }}{{ officer.last_name }}">
{% if officer.root_staff == "true" %}$&nbsp;{% endif -%}
{{ officer.first_name }}&nbsp;{{ officer.last_name | slice: 0 }}
</a>
</div>
{% endfor %}
</td>
{% endfor %}
</tr>
{% endfor %}
</table>
</div>

`$`: Root staff officers--Technically knowledgable CSUA Officers who maintain
computing resources. Come talk to us!

### Current Officers

{% assign officers = site.data.officers | sort:"first_name" %}
<div class="roster">
{% for officer in officers %}
{% if officer.enabled == "true" %}
<div class="officer" id="{{ officer.first_name }}{{ officer.last_name }}">
<div class="photo-frame">
{% if officer.photo2 == nil %}
<img class="single" src="https://www.csua.berkeley.edu/media/{{ officer.photo1 }}">
{% else %}
<img class="photoone" src="https://www.csua.berkeley.edu/media/{{ officer.photo1 }}">
<img class="phototwo" src="https://www.csua.berkeley.edu/media/{{ officer.photo2 }}">
{% endif %}
{% if officer.root_staff == "true" %}
<div class="root-staff-banner">Root</div>
{% endif %}
</div>
<div class="name">{{ officer.first_name }} {{ officer.last_name }}</div>
<div class="officehours" markdown="1">
[{{ officer.office_hours }}](#office-hours)
</div>
<div class="blurb">"{{ officer.blurb }}"</div>
{% if officer.tutor_subjects %}
<div class="tutor_subjects">Tutors for: {{ officer.tutor_subjects }}</div>
{% endif %}
</div>
{% endif %}
{% endfor %}
</div>

