---
summary: "Topology-optimized quadcopter airframe generated in Fusion 360 around thrust and landing loads, with an STM32-based flight controller."
category: "Structures"
context: "Generative design"
role: "Design and analysis"
tools: "Fusion 360, ANSYS, CFD, STM32"
status: "In progress"
featured: true
order: 7
tile: wide
links:
  - label: "CAD model"
    url: "https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b602811e513816e89740228"
title: "Generative design drone"
header:
  image: /assets/img/drone.jpg
  teaser: /assets/img/drone.jpg
facts:
  - label: "Material"
    value: "Aluminum AlSi10Mg"
  - label: "Manufacturing"
    value: "Additive"
  - label: "Safety factor limit"
    value: "1"
  - label: "Buckling safety factor limit"
    value: "1.5"
---

## Overview

Lightweight quadcopter airframe developed with Autodesk Fusion 360 generative design. Mounting locations, keep-out zones, and flight and landing loads are defined as inputs; the solver places material along the resulting load paths.

## Design inputs

- **Preserve geometry:** motor mounts on each arm and other required mounting features
- **Obstacle geometry:** keep-out zones excluded from the solution
- **Load cases:** motor thrust and landing impact
- **Manufacturing method:** additive manufacturing, suited to the organic geometry generative design produces

<figure>
  <img src="{{ '/assets/img/drone/design-space.png' | relative_url }}" alt="Fusion generative design setup showing a yellow starting shape, green preserve regions, and red obstacle cylinders at the four motor locations" loading="lazy">
  <figcaption>Study setup: starting shape (yellow), preserve geometry (green), and obstacle geometry (red) at the four motor locations.</figcaption>
</figure>

## Structural study

Fusion structural study with aluminum AlSi10Mg, an additive manufacturing constraint, a safety factor limit of 1, and a buckling safety factor limit of 1.5. Outcomes are compared across iterations before selecting a geometry to refine.

<figure>
  <img src="{{ '/assets/img/drone/outcome-viewport.jpg' | relative_url }}" alt="Generated airframe outcome from the Fusion structural study, an organic plate-like form with four motor mount openings" loading="lazy">
  <figcaption>Study outcome, iteration 2. Solve in progress.</figcaption>
</figure>

## Analysis

- Structural performance under thrust and landing loads in ANSYS
- CFD for drag and its effect on control performance

## Electronics

STM32-based flight controller with onboard IMU, four brushless motors, and ESCs. Integration is in progress ahead of flight testing.

## CAD model

Interactive model: drag to rotate, scroll to zoom.

<div class="media-frame">
  <iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b602811e513816e89740228?mode=embed" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" title="Generative design drone CAD model" style="display:block;border:0;"></iframe>
</div>
