---
title: Officers
layout: page
permalink: /officers/
---

{% assign days = "Monday Tuesday Wednesday Thursday Friday" | split:" " %}
{% assign shortdays = "Mon Tues Wed Thurs Fri" | split:" " %}
{% assign times = "10-11 AM,11-12 PM,12-1 PM,1-2 PM,2-3 PM,3-4 PM,4-5 PM,5-6 PM,6-7 PM" | split:"," %}

<table>
<tr>
<td></td>
{% for day in days %}
<td>
{{ day }}
</td>
{% endfor %}
</tr>
{% for time in times %}
<tr>
<td>
{{ time }}
</td>
{% for day in days %}
<td>
{% assign office_hours = shortdays[forloop.index0] | append:" " | append:time %}
{% for officer in site.data.officers5 -%}
{% if officer.office_hours == office_hours -%}
{{ officer.first_name }}
{{ officer.tutor_subjects }}
{% if officer.tutor_subjects %}
{% endif -%}
{% endif -%}
{% endfor %}
</td>
{% endfor %}
</tr>
{% endfor %}
</table>

{% assign officers = site.data.officers5 | sort:"first_name" %}
<div class="roster">
{% for officer in officers %}
{% if officer.is_active == "true" %}
<div class="officer">
<div class="photo-frame">
{% if officer.photo2 %}
<img class="single" src="{{ officer.photo1 }}">
{% else %}
<img class="photoone" src="{{ officer.photo1 }}">
<img class="phototwo" src="{{ officer.photo2 }}">
{% endif %}
{% if officer.root_staff == "true" %}
<div class="root-staff-banner">Root</div>
{% endif %}
</div>
<div class="name">{{ officer.first_name }} {{ officer.last_name }}</div>
<div class="officehours">{{ officer.office_hours }}</div>
<div class="blurb">"{{ officer.blurb }}"</div>
</div>
{% endif %}
{% endfor %}
</div>

