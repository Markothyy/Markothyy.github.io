---
title: "Vanderbilt Aerospace Design Lab"
excerpt: "Design engineering work for Vanderbilt's NASA Student Launch rocket team."
layout: single
permalink: /VADL/
author_profile: true
---

I'm a design engineer with the Vanderbilt Aerospace Design Laboratory (VADL), Vanderbilt's NASA University Student Launch team, which designs, builds, and flies a reusable high-power rocket and a novel payload each year. I joined in August 2025 and was part of the 2025–2026 team that placed 2nd of 33 nationally and won the Payload Design Award.

<div class="media-frame">
  <video controls muted playsinline preload="metadata" poster="{{ '/assets/img/vadl/vadl-reel-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/vadl-reel.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support embedded video.
  </video>
</div>
<p class="media-caption">2025–2026 vehicle and the Stop Drop &amp; Roll payload. Video: Vanderbilt Aerospace Design Laboratory.</p>

## Vibration Test Benches

My main focus this year is a pair of scaled vibration test benches for checking that flight hardware (PCBs, connections, and assemblies) still works under vibration. A commercial shaker table that can reproduce rocket flight conditions is expensive and large, so I designed two smaller benches built from off-the-shelf components:

* **Assembly bench:** 0–63 Hz, for assemblies up to about 1.5 lb
* **Component bench:** 0–4 kHz, for individual PCBs and connections

I wrote the Design Concept Review for the benches. CAD is complete and the hardware is assembled. I'm now developing a LabVIEW VI that uses the .NET API of a Dytran VibraScout accelerometer to acquire test data.

## Avionics Bays

I designed avionics bays for the subscale and full-scale vehicles. Each bay holds the altimeters, batteries, and rotary arming switches on a 3D-printed PETG sled, which mounts to the CNC-machined bulkheads with threaded rods anchored to the aft plate.

<figure class="cad-render">
  <img src="{{ '/assets/img/vadl/avionics-bay-cad.png' | relative_url }}" alt="SOLIDWORKS model of the avionics bay assembly">
</figure>
<p class="media-caption">SOLIDWORKS model of the avionics bay assembly.</p>

## Payload Gimbal Concepts

For the payload's 2-DOF camera and laser gimbal, I developed early housing concepts focused on lightweighting and shock isolation, and selected a damping pad to protect the optics.

## Carbon Fiber Airframe Cutting Jig

I designed and built a jig for cutting carbon fiber airframe and coupler sections from 4 in to 4 ft long. It holds ±1/32 in perpendicularity and flatness across the cut edge, meeting a team vehicle requirement, and was qualified during subscale construction. [See the full project page.](/portfolio/Carbon%20Fiber%20Cutting%20Jig/)

![Carbon fiber airframe cutting jig](/assets/img/1767337100637.jpg)
