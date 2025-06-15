---
layout: page
title: Sobre mi
permalink: /about/
weight: 1
---

<link rel="stylesheet" href="{{ '/assets/css/timeline.css' | relative_url }}">

# **Sobre mi**

Hola, soy **{{ site.author.name }}** :wave:,<br>
Soy un desarrollador autodidacta y creativo que ofrece un punto de vista diferente para obtener los resultados óptimos. Con energía y ganas de adquirir experiencia y nuevos conocimientos que satisfagan mis inquietudes en las Tecnologías de la Información. Además, quiero demostrar mi capacidad para trabajar en equipo adaptándome con intuición y esfuerzo. 

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>