---
title: "Vibration test benches"
summary: "Two scaled vibration benches for checking that PCBs, connectors, and assemblies keep working under vibration before they fly."
category: "Test equipment"
context: "Vanderbilt Aerospace Design Lab"
year: "2026"
role: "Design and build"
tools: "SOLIDWORKS, LabVIEW, Dytran VibraScout"
status: "Assembled, testing next"
featured: true
order: 1
tile: wide
facts:
  - label: "Component bench"
    value: "0–4 kHz"
  - label: "Assembly bench"
    value: "0–63 Hz, up to 1.5 lb"
  - label: "Hardware"
    value: "Off-the-shelf parts"
  - label: "Data acquisition"
    value: "LabVIEW with .NET API"
---

## Why

Rocket avionics and payload electronics see sustained vibration during powered flight. A loose connector or a cracked solder joint can end a flight, so the team wanted a way to shake hardware on the ground first. A commercial shaker table that can reproduce flight conditions is expensive and large, so I designed a scaled-down version.

## Two benches

Rather than one machine that does everything, the job is split in two:

- **Component bench:** runs up to 4 kHz for individual PCBs, connectors, and small parts.
- **Assembly bench:** runs from 0 to 63 Hz and carries assemblies up to about 1.5 lb.

Both benches are built from off-the-shelf components to keep the cost down. The concept started as summer work and was simplified this semester to fit the team's budget.

## Measuring the response

Measurements come from the lab's Dytran VibraScout USB accelerometer. I'm writing a LabVIEW VI that talks to the sensor through its .NET API, to log data from each test.

## Status

I wrote the Design Concept Review for the benches. CAD is complete and the hardware is assembled. Next is measuring each bench's actual range and running the first tests on flight hardware.
