---
title: "Vibration test benches"
summary: "Two scaled vibration test benches for verifying PCBs, connections, and assemblies before flight."
category: "Test equipment"
context: "Vanderbilt Aerospace Design Laboratory"
year: "2026"
role: "Design and build"
tools: "SOLIDWORKS, LabVIEW, Dytran VibraScout"
status: "Assembled; characterization next"
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
    value: "LabVIEW, .NET API, Dytran VibraScout"
---

## Problem

Avionics and payload electronics experience sustained vibration during powered flight. Loose connectors and cracked solder joints are common failure points. A commercial shaker table capable of reproducing flight conditions exceeds the team's budget and lab space.

## Design

Two scaled benches split the frequency range:

- **Component bench:** 0–4 kHz. Individual PCBs, connections, and small parts.
- **Assembly bench:** 0–63 Hz. Assemblies up to 1.5 lb.

Both benches are built from off-the-shelf components to reduce cost. The concept originated as summer research and was simplified to fit the team budget.

## Instrumentation

Response is measured with the lab's Dytran VibraScout USB accelerometer (0–1 kHz). A LabVIEW VI with .NET API integration handles data acquisition and logging for each test.

## Status

- Design Concept Review: complete
- CAD: complete
- Hardware: assembled
- Next: frequency-range characterization and first flight-hardware tests
