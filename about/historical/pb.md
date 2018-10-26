---
title: Historical PB
---

{% assign titles = "President, VP of Tech, VP of Industry Relations, Secretary/Treasurer, External Events Coordinator, Internal Events Coordinator, Outreach Chair" | split:", " %}
{% assign unames = "president, vp, indrel, treasurer, externalevents, internalevents, outreach" | split:", " %}

<table class="pbroster">
{% for pb in site.data.pb %}
<tr>
<th markdown="1" colspan="2" class="semester">
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
