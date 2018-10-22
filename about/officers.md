---
title: Officers
layout: page
permalink: /officers/
---

{% for officer in site.data.officers %}
<div class="officer">
<div class="photo-frame">
{% if officer.photo2 %}
<img class="single" src="">
{% else %}
<img class="photoone" src="">
<img class="phototwo" src="">
{% endif %}
{% if officer.root_staff %}
<div class="root-staff-banner">Root</div>
{% endif %}
</div>
<div class="name">{{ officer.first }} {{ officer.last }}</div>
<div class="officehours">{{ officer.office_hours }}</div>
<div class="blurb">"{{ officer.blurb }}"</div>
</div>
{% endfor %}

