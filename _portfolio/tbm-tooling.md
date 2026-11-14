---
title: "Tunnel boring machine tooling"
short_title: "TBM tooling and storage"
summary: "Tool stations, cutter-ring storage, and a part-locating system for two tunnel boring machines, designed during a summer internship."
category: "Tooling and storage"
context: "The Boring Company"
year: "2026"
role: "Tunnel Engineering Intern"
tools: "SOLIDWORKS, SOLIDWORKS FEA, ESP32, Google Apps Script"
status: "In use on both machines"
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

## Context

Crews in the tunnel are kept small, about six people per shift across day and night shifts, to limit how many people are underground at once. Before this work, tools and parts had no fixed home. Things were regularly lost or damaged, and finding the right part slowed the crew down.

## Gantry tool stations

I owned the tooling subsystem for both machines: a tool station on each TBM gantry for drill bits, sockets, consumables, hand tools, and cutterhead maintenance hardware, plus a rack for larger items like drills, bandsaws, and torque wrenches. I produced the SOLIDWORKS fabrication drawings, weld drawings, and BOMs for the custom tooling and storage.

## Cutter-ring storage

<figure>
  <img src="{{ '/assets/img/tbm/cutterhead.jpg' | relative_url }}" alt="TBM cutterhead with blue disc cutters installed" loading="lazy">
  <figcaption>A TBM cutterhead with its disc cutters installed.</figcaption>
</figure>

The machines use roughly 100 cutter rings at about 60 lb each, around 6,000 lb in all. I designed a storage rack with waterjet-cut locating plates that hold each ring in place. A buckling analysis in SOLIDWORKS FEA led to exterior bracing and cross-members every four rings to keep the rack stable under that load.

## Pick-to-light part locator

Hydraulic fittings were the hardest parts to find: over 100 types of adapters, plugs, caps, and crimps spread across 80+ bins. I built a pick-to-light system using an ESP32 driving LEDs at each bin, with a Google Form, Google Sheets, and Apps Script behind it. A crew member submits the part they need and the right bin lights up. Finding a part used to take up to two minutes for someone unfamiliar with the bins; now it takes a few seconds.

## In the field

I also operated excavators and forklifts and worked as a ground spotter for crane lifts during active tunneling.
