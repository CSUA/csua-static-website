---
title: Officers
layout: page
permalink: /officers/
---

{% assign officers = site.data.officers4 | sort:"last_name" %}
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

