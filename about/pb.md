---
title: Politburo
permalink: /politburo/
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
{% assign officer = site.data.officers
	| where:"first_name",firstname
	| where:"last_name",lastname
	| first %}
<div class="pb-member">
<img class="photo-frame" src="https://www.csua.berkeley.edu/media/{{ officer.photo1 }}">
<div class="text">
<div class="title">{{ title }}</div>
<div class="name">{{ officer.first_name }} {{officer.last_name }}</div>
<div class="email">{{ uname }}@csua.berkeley.edu</div>
{% if uname == "president" %}
<div markdown="1" class="about">
The President leads meetings and represents the CSUA in its duties as the
undergraduate computer science students' representative body. The President
communicates with the University, faculty, staff, and other student
organizations.

Please contact {{ officer.first_name }} for general questions or concerns about the CSUA.
{% endif %}

{% if uname == "vp" %}
<div markdown="1" class="about">
The VP of Technology administers and maintains the technical resources of the
CSUA, such as the computer equipment, servers, and list-serves. The VP is also
the head of our root staff and a liaison with all campus IT and technical
services. The VP solves or delegates the solving of any technical issues.

If you have any questions about your account or the CSUA servers or software,
please contact {{ officer.first_name }}.
{% endif %}

{% if uname == "indrel" %}
<div markdown="1" class="about">
The VP of Industry Relations is the CSUA liaison with companies and alumni. The
VP attains sponsors for external events and generates industry interest in the
CSUA. The VP also coordinates speakers for events, manages info sessions and
the job list-serve, and assists the President.

Please contact {{ officer.first_name }} for any questions regarding events, info sessions,
speaking events, or sponsorships. Thank you for your support and interest in
the CSUA.
{% endif %}

{% if uname == "treasurer" %}
<div markdown="1" class="about">
The Secretary/Treasurer takes minutes at meetings, maintains the CSUA's
monetary and physical resources (office, study lounge, library, etc.), and
keeps all financial and non- financial records. The Secretary/Treasurer is also
the liaison with any University funding programs or facility maintenance and
the primary signatory power with the ASUC.

Please contact {{ officer.first_name }} for questions about the CSUA's budget, resources, or
records.
{% endif %}

{% if uname == "externalevents" %}
<div markdown="1" class="about">
The External Events Coordinator plans all external CSUA events. An external
event is defined as an event sponsored by a company. The External Events
Coordinator works closely with the VP of Industrial Relations and the Internal
Events Coordinator.

Please contact {{ officer.first_name }} for any questions regarding upcoming external events or
with offers for potential future events.
{% endif %}

{% if uname == "internalevents" %}
<div markdown="1" class="about">
The Internal Events Coordinator plans all internal CSUA events. An internal
event is defined as an event that does not have a company sponsor. This
includes general meetings, intersocial events, and alumni events. The Internal
Events Coordinator works closely with the External Events Coordinator.

Please direct internal events questions to {{ officer.first_name }}.
{% endif %}

{% if uname == "outreach" %}
<div markdown="1" class="about">
The Outreach chair maintains or delegates the maintenance of the website and
various social media accounts. The Outreach chair also publicizes all CSUA
events to the student body, promotes interaction between current students and
alumni, and welcomes new members.

If you are a student interested in joining the CSUA, feel free to reach out to
{{ officer.first_name }}.
{% endif %}
</div>
</div>
</div>
{% endfor %}
{% endif %}
{% endfor %}
</div>
