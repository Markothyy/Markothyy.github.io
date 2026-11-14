---
title: "In-space manufacturing payload"
short_title: "In-space manufacturing payload"
summary: "Senior design project developing a semi-autonomous payload for Arkisys's Bosuns Locker Max that molds and UV-cures resin structural parts in orbit."
category: "Space hardware"
context: "Senior design, COSMIC Capstone Challenge"
year: "2026–present"
role: "Member of a four-person senior design team"
tools: "CAD, 3D printing, COMSOL Multiphysics, vacuum testing"
status: "In progress"
featured: true
order: 3
math: true
facts:
  - label: "Envelope"
    value: "15.75 × 15.75 × 35.45 in"
  - label: "Power"
    value: "100 W sustained, 500 W peak"
  - label: "Mass limit"
    value: "Under 250 kg"
  - label: "Cure"
    value: "405 nm UV"
---

## Project

Senior design project (ME 4213) for the COSMIC Capstone Challenge, Track 1: Orbital Manufacturing and Assembly. COSMIC is the Consortium for Space Mobility and ISAM Capabilities. The four-person team, the Cosmic Commodores, is developing a payload for Arkisys's Bosuns Locker Max that chains at least three operations into a useful orbital manufacturing capability and runs semi-autonomously with limited remote commands.

The payload produces modular structural components, such as bricks and truss members, for assembly into larger structures, including space telescopes. Launching compact raw material instead of finished structures reduces launch volume and transport cost.

## Requirements

| Category | Requirement |
| --- | --- |
| Mass | Under 250 kg |
| Loads | Survive launch and operating loads (to be defined) |
| Volume | Fit within 15.75 × 15.75 × 35.45 in |
| Power | 100 W sustained; 500 W peak for 1 hour |
| Function | Process at least 0.5 kg of material into a molded part |
| Autonomy | Run with no oversight beyond start and stop commands |

## Design-build-test 1: pellet feeding

The first concept was thermoplastic injection molding. Without gravity, pellets cannot be fed from a conventional hopper, so the team tested one element of one feeding concept: a piston pushing pellets through a tapered hopper.

An aluminum extrusion frame represents the payload enclosure and provides modular mounting for components. A 3D-printed linear motion assembly, driven by a stepper motor and lead screw on guide rails, moves the piston.

<div class="fig-row fig-row--fill" style="--cols: 2; --ratio: 2 / 1">
  <figure>
    <img src="{{ '/assets/img/cosmic/pellet-feeder-cad.jpg' | relative_url }}" alt="CAD render of the linear motion assembly: stepper motor, lead screw, guide rails, and hopper block on an aluminum extrusion" loading="lazy">
    <figcaption>Linear motion assembly, CAD.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/cosmic/pellet-feeder-prototype.jpg' | relative_url }}" alt="3D-printed linear motion assembly prototype on an aluminum extrusion" loading="lazy">
    <figcaption>Printed prototype during pellet testing.</figcaption>
  </figure>
</div>

Three hopper tapers were tested: 45°, 25°, and 15°.

<div class="fig-row fig-row--fill fig-white" style="--cols: 3; --cols-sm: 3; --ratio: 3 / 2">
  <figure>
    <img src="{{ '/assets/img/cosmic/taper-45.png' | relative_url }}" alt="Section view of the piston and hopper with a 45 degree taper" loading="lazy">
    <figcaption>45° taper</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/cosmic/taper-25.png' | relative_url }}" alt="Section view of the piston and hopper with a 25 degree taper" loading="lazy">
    <figcaption>25° taper</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/cosmic/taper-15.png' | relative_url }}" alt="Section view of the piston and hopper with a 15 degree taper" loading="lazy">
    <figcaption>15° taper</figcaption>
  </figure>
</div>

<figure class="fig-white fig-medium">
  <img src="{{ '/assets/img/cosmic/ejection-vs-taper.png' | relative_url }}" alt="Chart of percent of pellets ejected versus taper angle: about 20 percent at 15 degrees, about 69 percent at 25 degrees, and about 76 percent at 45 degrees" loading="lazy">
  <figcaption>Percent of pellets ejected versus taper angle.</figcaption>
</figure>

- Steeper tapers ejected more pellets, with diminishing returns: roughly 20% at 15°, 69% at 25°, and 76% at 45°.
- Pellets pinched more readily in the gradual tapers.
- No tested taper ejected all of the pellets.

## Direction change: UV-curable resin

After the first review, the team moved from thermoplastic pellets to a UV-curable thermoset resin. The change reduces power, simplifies material transport, and reduces size and complexity while keeping the same manufacturing objective. It introduces new risks that require testing: complete cure, resin containment, and the mechanical properties of the finished part.

## Concept of operations

1. Operator activates the payload and sends a print command.
2. Circuit board receives the command.
3. Onboard computer checks sensor inputs and starts the print.
4. Resin is pumped into the mold.
5. UV light cures the resin.
6. The part is extracted from the mold.
7. The part is checked for hardness, weight, and deflection, then passed or failed against use-case requirements.
8. A robot arm places the part in an accepted or rejected bin.

Sensors and imaging provide error detection at several steps. The second design-build-test addressed pumping, curing, and part validation.

## Design-build-test 2: resin handling and part validation

### Pumping in vacuum

A piezoelectric pump and a peristaltic pump were tested moving mineral oil between containers inside a vacuum chamber at about −95 kPa. Both provide active transport without relying on gravity; the peristaltic pump also keeps the fluid inside flexible tubing, which simplifies containment and cleaning.

<div class="fig-row fig-row--fill" style="--cols: 2; --ratio: 4 / 3">
  <figure>
    <img src="{{ '/assets/img/cosmic/vacuum-chamber.jpg' | relative_url }}" alt="Pump test container inside a vacuum chamber" loading="lazy">
    <figcaption>Test container in the vacuum chamber.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/cosmic/pump-test.jpg' | relative_url }}" alt="Pump, controller, tubing, and source and receiving containers inside a clear test box" loading="lazy">
    <figcaption>Pump, controller, and fluid containers.</figcaption>
  </figure>
</div>

- **Trial 1:** the chamber had not reached target pressure before the pump triggered.
- **Trial 2:** with the program adjusted and an activity light added, the pump could not move oil through a line preloaded with air; heavy bubbling and splashing.
- **Trial 3:** with the pump primed with oil before evacuation, the peristaltic pump moved fluid under vacuum.

| Pump | Self-primes in vacuum | Moves fluid in vacuum |
| --- | --- | --- |
| Piezoelectric | No | No |
| Peristaltic | No | Yes |

Degassing and pre-priming are necessary to keep voids out of the mold. A peristaltic pump is feasible if a priming mechanism can be added.

### Curing through a clear mold

A clear tube mold was designed and 3D printed, and resin was hand-poured for this test; it will later be fed by the pumping system. The outer surfaces cured well. Cure at the center could not be confirmed by inspection.

<div class="fig-row fig-row--fill" style="--cols: 2; --cols-sm: 2; --ratio: 1 / 1">
  <figure>
    <img src="{{ '/assets/img/cosmic/mold-empty.jpg' | relative_url }}" alt="Empty clear 3D-printed tube mold" loading="lazy">
    <figcaption>Empty mold.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/cosmic/mold-full.jpg' | relative_url }}" alt="Clear tube mold filled with cured resin" loading="lazy">
    <figcaption>Filled mold.</figcaption>
  </figure>
</div>

To check whether light reaches the full depth of the resin, the team set up a curing-time model:

$$
t_c = \frac{H_c \, e^{\alpha_r t_r}}{I_0 \, T_m}
$$

| Variable | Definition |
| --- | --- |
| $$t_c$$ | Required UV exposure time (s) |
| $$H_c$$ | Critical UV dose to cure the resin to a defined threshold (mJ/cm²) |
| $$\alpha_r$$ | UV attenuation coefficient of the liquid resin (1/mm) |
| $$t_r$$ | Resin thickness along the light path (mm) |
| $$I_0$$ | UV irradiance at the outer mold surface (mW/cm²) |
| $$T_m$$ | UV transmittance of the clear mold, 0 to 1 |

### Resin flow in microgravity

In microgravity, gravity cannot help move resin or separate trapped air by buoyancy. Nine COMSOL simulations (2D axisymmetric, laminar, pressure-driven, no-slip walls, zero gravity) covered tubing inner diameters of 1, 2, and 3 mm and viscosities of 0.1, 1, and 10 Pa·s, to size tubing and estimate pumping requirements before hardware testing.

<div class="fig-row fig-white" style="--cols: 1">
  <figure>
    <img src="{{ '/assets/img/cosmic/cfd-diameter.png' | relative_url }}" alt="Log-scale plot of volumetric flow rate versus tube inner diameter for three resin viscosities" loading="lazy">
    <figcaption>Flow rate versus tubing diameter.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/img/cosmic/cfd-viscosity.png' | relative_url }}" alt="Log-scale plot of volumetric flow rate versus resin viscosity for three tube diameters" loading="lazy">
    <figcaption>Flow rate versus viscosity.</figcaption>
  </figure>
</div>

Flow rate scales with roughly the fourth power of diameter and inversely with viscosity, as expected for laminar pipe flow. The model is single-phase and steady; bubbles, curing, and non-Newtonian behavior are not included.

### Part validation plan

The test part is a solid resin rod cast in the clear mold and cured with 405 nm UV light. The goal is to show that a part molded and cured in vacuum matches the same part made on the ground.

| Test | Measures | Method |
| --- | --- | --- |
| Weight and density | Fill quality and void content | Archimedes method, ASTM D792 |
| Hardness | Degree of cure, Shore D | Durometer, ASTM D2240 |
| Deflection | Flexural stiffness | Three-point bend, based on ASTM D790 |
| Strength | Failure load | Testing machine, ASTM D638, D790, or D695, if lab access allows |

Two groups of at least three rods from the same resin batch: one molded and cured in the vacuum chamber, one on the bench. Each rod is weighed in air and in water, sectioned and photographed for bubbles, measured for hardness five times per cut face, and bend-tested in three to four load steps. Stiffness comes from the bend test:

$$
E = \frac{F L^3}{48 \, \delta \, I}, \qquad I = \frac{\pi d^4}{64}
$$

where F is the applied load, L the support span, δ the midspan deflection, and d the rod diameter.

Proposed pass criteria, pending team confirmation: void content under 2%, hardness within 5 Shore D points of the bench rods, and modulus within 10% of the bench rods.

## Next steps

- Run the validation plan and build a three-point bend fixture
- Remote triggering of pump settings
- Requirements, design, and testing of a robotic arm for part extraction
- Heat rejection from the mold and electronics without convection
- Fail-safes for leaks, mold cleaning or replacement, and overflow

<p class="media-caption">Figures from the team's design-build-test reviews.</p>
