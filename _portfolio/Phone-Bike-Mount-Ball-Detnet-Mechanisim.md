---
short_title: "Bike phone mount"
summary: "Top-down modeled bike phone mount with dovetail clamping jaws and a ball-detent mechanism for portrait and landscape rotation."
category: "Additive manufacturing"
tools: "Fusion 360, PLA printing"
featured: false
order: 23
title: "Top-down bike phone mount"
header:
  image: /assets/img/web/RealL2.jpg
  teaser: /assets/img/web/RealL2.jpg
gallery:
  - image_path: /assets/img/web/RealL2.jpg
  - image_path: /assets/img/web/RealL1.jpg
---

## Overview

Filament-printed bike phone mount designed with a top-down modeling approach.

**Requirements**

- Secure attachment to the handlebar
- Phone retention under vibration, across a range of phone sizes
- Tool-free rotation between portrait and landscape
- Practical to print and assemble with minimal hardware

## Top-down modeling

All components were modeled within a single assembly by projecting and offsetting shared geometry, rather than editing parts individually and updating the assembly. This sped up iteration and kept interfaces consistent, particularly the dovetail clamp offsets and the ball-detent interface.

## Detent mechanism

- **Gear:** carries the detent teeth; fixed to the phone mount
- **Housing:** holds the ball bearing and spring; jointed to the bike handle
- The ball seats in the gear teeth, allowing rotation between orientations while holding position under load

## Assembly

- Spring-loaded clamping jaws connected by an elastic spring, anchored by a tooth on the inner face of the base
- Detent gear on the back of the phone holder engages the ball and spring housing
- The bottom piece carries the detent housing and attaches to the bike
- Minimal screws; the assembly is held together by spring and ball preload

## Printing and tolerances

- PLA at 50% infill, chosen for fast iteration and functional strength; tested to hold a phone with all three jaws
- **Dovetail sliders:** 0.4 mm clearance for free sliding without a friction fit
- **Countersinks:** about 3.2 mm deep, keeping screw heads flush so the rigid bike joint meets the gear without added friction
- **Gear clearance:** accounts for print shrinkage and expansion and prevents binding during rotation

## CAD model

<div class="media-frame">
<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b602811be0c1d884ddf56cb?mode=embed" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" title="Bike phone mount CAD model" style="display:block;border:0;"></iframe>
</div>

## Photos

![Printed phone mount](/assets/img/web/RealL1.jpg)

![Printed phone mount on a handlebar](/assets/img/web/RealL2.jpg)

<video width="700" autoplay loop muted playsinline>
  <source src="{{ '/assets/img/Phonemountgif-ezgif.com-video-to-gif-converter.mp4' | relative_url }}" type="video/mp4">
</video>
<p class="media-caption">Rotation between portrait and landscape.</p>

![Fusion render of the phone holder with a phone installed](/assets/img/fusion-render.png)

![Cross-section of the internal rotation mechanism](/assets/img/cross-section.jpg)

## Components

![Component 1](/assets/img/component-1.png)

![Component 2](/assets/img/component-2.png)

![Component 3](/assets/img/component-3.png)

![Component 4](/assets/img/component-4.png)
