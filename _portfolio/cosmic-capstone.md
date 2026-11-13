---
title: "In-space manufacturing payload"
short_title: "In-space manufacturing payload"
summary: "A semi-autonomous payload that molds, cures, and stows small resin parts in orbit, designed by a four-person senior design team for the COSMIC Capstone Challenge."
category: "Space hardware"
context: "Senior design, COSMIC Capstone"
year: "2026–2027"
role: "Mechanical and hardware design"
tools: "CAD, trade studies"
status: "In progress"
featured: true
order: 3
facts:
  - label: "Envelope"
    value: "15.75 × 15.75 × 35.45 in"
  - label: "Sustained power"
    value: "100 W"
  - label: "Peak power"
    value: "500 W for 1 hour"
  - label: "Cure method"
    value: "UV light"
---

## The challenge

The COSMIC Capstone Challenge asks university teams to design a payload for Arkisys's Bosuns Locker Max that chains three or more operations to demonstrate an orbital manufacturing or assembly capability. The payload has to fit the host's volume and power limits.

## How it works

The payload runs a short manufacturing sequence on its own once it receives a command:

1. A user activates the machine and sends a print command.
2. Resin is pumped toward the mold.
3. The mold fills with UV-curable resin.
4. UV light cures the resin.
5. The finished part is extracted from the mold.
6. A robot arm places the part in a collection bin.

Sensors and imaging check for errors at several steps along the way.

## My part

I work on mechanical and hardware design across the payload, from defining requirements and the concept of operations to CAD that has to account for launch loads, vacuum, microgravity, and thermal limits.

I also did the curing trade study, comparing UV light against laser curing on power, thermal, vacuum, and microgravity constraints. We chose UV for its lower power draw and better fit for in-space operation.
