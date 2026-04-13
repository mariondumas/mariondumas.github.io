---
layout: page
permalink: /publications/
title: publications
description: Publications spanning environmental economics, political economy, and innovation studies.
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications compact-publications">
  <p class="publication-intro">
    My publications span environmental economics, political economy, and innovation studies, with a current focus on green technological change and climate-policy institutions.
  </p>

  <h2>Working Papers</h2>
  {% bibliography -f papers --sort_by year --order descending -q @*[type=unpublished]* %}

  <h2>Key Publications</h2>
  {% bibliography -f papers --sort_by year --order descending -q @*[selected=true && type!=unpublished]* %}

  <h2>All Other Outputs</h2>
  {% bibliography -f papers --sort_by year --order descending -q @*[selected!=true && type!=unpublished]* %}

  <p class="publication-note">
    To add a PDF button for an entry, add <code>pdf = {filename.pdf}</code> in
    <code>/_bibliography/papers.bib</code> and place the file in <code>/assets/pdf/</code>.
    You can also use a full external URL in the <code>pdf</code> field.
  </p>
</div>
