---
title: "Pinch Flow Fractionation Microfluidic Device"
excerpt: "A resin printed microfluidic device designed to sort particles by size using pinch flow fractionation"
header:
  image: /assets/img/IMG_3049.JPG
  teaser: /assets/img/IMG_3049.JPG
---

# Introduction

Pinch flow fractionation (PFF) is a microfluidic sorting technique that separates particles by size using only fluid flow. Particles are squeezed against a wall in a narrow pinched channel, where larger particles are physically blocked from getting as close to the wall as smaller ones due to their radius. When the channel suddenly expands, this small positional difference is amplified across the broad section, directing each particle size into a separate outlet. For more detailed information on the underlying principles of pinch flow fractionation, see <a href="/assets/img/Asger.pdf">Primary source PDF</a>

Resin printed molds are coated with parylene prior to casting PDMS because uncured resin inhibits the PDMS from curing properly, and parylene acts as a thin barrier layer between the two materials preventing interference.

One specific application of PFF is sorting drug carrying microparticles for targeted cancer treatment. For a particle to reach a tumor site, it needs to be small enough to travel through narrow blood vessels without affecting surrounding tissue. A traditional filter can only separate particles by a fixed pore size, either it passes or it does not. PFF can sort particles into multiple precise size ranges in one continuous flow, making it far more suitable for medical manufacturing where size consistency directly affects whether the drug reaches its target. Beyond drug delivery, PFF has hypothetical applications in water quality testing, where microplastic particles of different sizes need to be sorted and identified, and in blood diagnostics, where separating cell types by size is a critical first step in analysis.

# Design Theory

A symmetric approach was chosen for this design. To determine where to place the outlet boundaries, the Y₀ equation was used to calculate where each particle size would end up in the broad section after the pinch.

With a pinch width of 0.70 mm and a broad section width of 15 mm, the small particles (150 μm) were calculated to sit 1.6 mm from the pinched wall, and the large particles (500 μm) at 5.4 mm. The boundary between the small and large particle outlets was placed at the midpoint between these two positions, at 3.5 mm. The fraction of flow each outlet receives is proportional to its opening width divided by the total broad section width. The small outlet carries 24.3%, the large outlet 28.3%, and the buffer outlet 18.7%. The remaining percentage is occupied by the solid PDMS walls separating the channels.

Key dimensions of the device are as follows:
  **Pinch width (wₚ):** 0.70 mm
  **Broad section width (w_b):** 15 mm
  **Small particle outlet width:** 3.414 mm opening at broad section exit
  **Large particle outlet width:** 3.978 mm opening at broad section exit
  **Buffer outlet width:** 2.631 mm opening at broad section exit
  **Outlet post diameter:** 2.2 mm
  **Outlet post spacing (center to center):** ≥ 11 mm
  **Small particle outlet channel length:** 19.435 mm
  **Large particle outlet channel length:** 19.443 mm
  **Buffer outlet channel length:** 21.733 mm

![Sketch of critical channel dimensions](/assets/img/PLACEHOLDER_SKETCH.png)

During the design process, an issue was identified with the broad section because it was not tall enough for the device to function correctly. This was corrected in revision. Additionally, flat walls that were initially spacing the two inlet channels were removed to allow the flow streams to converge more naturally into the pinched section.

To ensure each outlet pulls its intended fraction of flow without disrupting adjacent streams, the channels were designed to fan out at different angles from the broad section. This creates different hydraulic resistances between channels — a longer narrower channel is harder to push fluid through, so it naturally limits how much flow enters it. The buffer outlet is intended to be the shortest and widest channel, giving it the lowest resistance so it carries the largest fraction of the flow, while the particle outlets carry smaller controlled fractions. This resistance difference is what keeps each stream in its correct outlet and prevents particles from being pushed into the wrong channel. In the final design, the buffer channel ended up being the longest of the three. Ideally this would be corrected in a future iteration by shortening the buffer path and lengthening the particle outlet channels.

If given the opportunity to iterate further on this design, the buffer outlet channel would be made the shortest of the three to reduce its hydraulic resistance and allow it to carry a greater fraction of the total flow. Additionally, the broad section would be made taller to improve particle separation across the outlet boundaries.

# Instructions

The most important steps for creating a microfluidic device with resin printing begin with designing the CAD model with the printer's minimum feature size in mind, as features that are too small will not print accurately. The mold must be printed with the bottom surface flat on the build plate to ensure a smooth sealing surface. After printing, the mold should be washed and checked for any uncured resin inside the channels, as this will prevent the PDMS from curing correctly. When casting PDMS, the mix ratio must be followed precisely, because too much or too little hardener will affect the final properties of the device. Finally, both surfaces must be plasma treated before bonding the PDMS to the glass slide to seal the device.

<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b6028112e76dd85967fe0f8?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>


![Picture of the casted device](/assets/img/IMG_3050.JPG)


![Plasma treating process](/assets/img/Plasma-Treating-Image (2).jpg)

# Discussion

Resin printing was chosen over other manufacturing techniques for several reasons. The high resolution of the Form 3+ SLA printer, with a small minimum feature size, allows for the precise small scale channel geometries required for pinch flow fractionation, features that would not be achievable with standard FDM printing. Resin prints are also watertight by nature, which is critical for a microfluidic device that must contain and direct fluid without leaking. Additionally, the smooth surface finish produced by resin printing is necessary for bonding a glass slide to seal the device, since a rougher surface would prevent a proper seal and cause leakage along the edges.

To handle a wider range of particle sizes, the design could be modified to include multiple outlet channels of varying lengths, each corresponding to a different size range. More channels would allow finer separation between size groups that are closer together. Flow separators could also be incorporated at the point where the broad section meets the outlets, physically dividing the streams before they enter their respective channels and reducing the chance of particles crossing into the wrong outlet.

The lower limit on particle size is set by two main factors. First, particles smaller than the surface roughness of the channels cannot follow predictable streamlines and will instead interact with the channel walls. Second, the minimum feature size of the printer limits how small the pinch channel can be made, which directly limits how small the particles can be while still achieving separation.

# Testing Results

Experimental testing demonstrated partial particle separation, indicating that the device was able to perform pinch flow fractionation to some degree. However, the separation quality was limited by flaws in the final channel geometry. The broad section did not provide sufficient expansion space for the streams to separate as cleanly as intended before reaching the outlet boundaries.

Testing also revealed that the inlet design contributed to this reduced performance. Removing the inlet walls appeared to make the incoming flow less controlled as it entered the pinch region. Additionally, the curved left edge of the broad section produced visible recirculation zones and vortices in the video, which disturbed the streamlines and likely reduced the effectiveness of particle sorting.

# Testing

![Picture of testing setup](/assets/img/IMG_3049.JPG)



<iframe width="560" height="315"
src="https://www.youtube.com/embed/Mm7DW0skopM"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard write; encrypted media; gyroscope; picture in picture; web share"
allowfullscreen>
</iframe>
