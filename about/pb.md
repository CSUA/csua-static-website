---
title: Politburo
---

> Komrade! Let it be known that, in the era of Glasnost, the Ex-comm of the CSUA was renamed by the will of the people! That is how the Ex-comm was become the politbyuro, or politburo in the weak tongue of the American demons! All praise the people's will! All praise the mighty politburo!

-- CSUA Encyclopedia

The politburo is the executive committee of the CSUA.

{% assign titles = "President, VP of Tech, VP of Industry Relations, Secretary/Treasurer, External Events Coordinator, Internal Events Coordinator, Outreach Chair" | split:", " %}
{% assign unames = "president, vp, indrel, treasurer, externalevents, internalevents, outreach" | split:", " %}

{% for pb_roster in site.data.pb %}
{% if pb_roster.semester == "Fall 2018" %}

<table class="politburo">
{% for title in titles %}
{% assign uname = unames[forloop.index0] %}
{% assign fullname = pb_roster[uname] %}
{% assign firstname = pb_roster[uname] | split:" " | first %}
<tr>
<td>
<img class="photo-frame" src="">
</td>
<td>
<div class="title">{{ title }}</div>
<div class="name">{{ fullname }}</div>
<div class="email">{{ uname }}@csua.berkeley.edu</div>
<div markdown="1">
The President leads meetings and represents the CSUA in its duties as the
undergraduate computer science students' representative body. The President
communicates with the University, faculty, staff, and other student
organizations.

Please contact {{ firstname }} for general questions or concerns about the CSUA.
</div>
</td>
</tr>
{% endfor %}
{% endif %}
{% endfor %}
</table>

## Historical PB

<table class="pbroster">
{% for pb in site.data.pb %}
<tr>
<th markdown="1" colspan="2">
**{{ pb.semester }}**
</th>
</tr>
{% for title in titles %}
<tr>
<td class="title">
{{ title }}
</td>
<td class="name">
{% assign uname = unames[forloop.index0] %}
{{ pb[uname] }}
</td>
</tr>
{% endfor %}
{% endfor %}
</table>
