---
title: "Tunnel boring machine tooling"
short_title: "TBM tooling and storage"
summary: "$20K tooling subsystem for the MB1 and MB2 tunnel boring machines: gantry tool stations, cutter-ring storage, and a pick-to-light part locator."
category: "Tooling and storage"
context: "The Boring Company"
year: "2026"
role: "Tunnel Engineering Intern"
tools: "SOLIDWORKS, SOLIDWORKS FEA, ESP32, Google Apps Script"
status: "In daily use on both machines"
featured: true
order: 2
image: /assets/img/tbm/tunnel-site.jpg
image_position: "center 38%"
image_alt: "Tunnel boring site with conveyor and lifting structures"
teaser: /assets/img/tbm/tunnel-site-square.jpg
facts:
  - label: "Subsystem budget"
    value: "$20K"
  - label: "Machines"
    value: "MB1 and MB2"
  - label: "Cutter rings stored"
    value: "About 100 at 60 lb each"
  - label: "Part bins tracked"
    value: "80+"
---

## Problem

Crews of about six per shift, across day and night shifts, are kept small to limit underground personnel. Tools and parts had no fixed storage locations and were regularly lost or damaged, slowing maintenance and repairs.

## Gantry tool stations

Owned the tooling subsystem for both machines. A tool station on each TBM gantry holds drill bits, sockets, consumables, hand tools, and cutterhead maintenance hardware. A separate rack stores large tools, including drills, bandsaws, and torque wrenches. Deliverables included SOLIDWORKS fabrication drawings, weld drawings, and BOMs for all custom tooling and storage, applying DFM/DFA.

## Cutter-ring storage

<figure>
  <img src="{{ '/assets/img/tbm/cutterhead.jpg' | relative_url }}" alt="TBM cutterhead with blue disc cutters installed" loading="lazy">
  <figcaption>TBM cutterhead with disc cutters installed.</figcaption>
</figure>

- Storage for approximately 100 cutter rings at 60 lb each, about 6,000 lb total
- Waterjet-cut locating plates hold each ring in position
- SOLIDWORKS buckling FEA drove the addition of exterior bracing and cross-members every four rings

## Pick-to-light part locator

- 80+ bins covering 100+ hydraulic part types: adapters, plugs, caps, and crimps
- ESP32-driven LEDs at each bin, controlled through Google Forms, Google Sheets, and Apps Script
- A submitted part request lights the matching bin
- Part lookup reduced from up to two minutes to a few seconds

## Field operations

Operated excavators and forklifts and served as ground spotter for crane lifts during active tunneling.
