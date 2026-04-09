---
title: "μFluidic Device Experiment"
excerpt: "A resin-printed microfluidic device designed for pinch flow fractionation and particle sorting."
header:
  image: /assets/img/CadA1_2026-Feb-02_01-42-20AM-000_CustomizedView9265646143_png.png
  teaser: /assets/img/CadA1_2026-Feb-02_01-42-20AM-000_CustomizedView9265646143_png.png
gallery:
  - image_path: assets/img/IMG_2440.JPG
  - image_path: assets/img/IMG_2523-ezgif.com-video-to-gif-converter.gif
  - image_path: assets/img/IMG_2439.JPG

---

# Introduction

Pinch flow fractionation (PFF) is a microfluidic sorting technique that separates particles by size using only fluid flow. Particles are squeezed against a wall in a narrow pinched channel, where larger particles are physically blocked from getting as close to the wall as smaller ones due to their radius. When the channel suddenly expands, this small positional difference is amplified across the broad section, directing each particle size into a separate outlet.

One specific application of PFF is sorting drug-carrying microparticles for targeted cancer treatment. For a particle to reach a tumor site, it needs to be small enough to travel through narrow blood vessels without affecting surrounding tissue. A traditional filter can only separate particles by a fixed pore size, either it passes or it does not. PFF can sort particles into multiple precise size ranges in one continuous flow, making it far more suitable for medical manufacturing where size consistency directly affects whether the drug reaches its target.

# Design Theory

A symmetric approach was chosen for this design. To determine where to place the outlet boundaries, the Y₀ equation was used to calculate where each particle size would end up in the broad section after the pinch.

With a pinch width of 0.70 mm and a broad section width of 15 mm, the small particles (150 μm) were calculated to sit 1.6 mm from the pinched wall, and the large particles (500 μm) at 5.4 mm. The boundary between the small and large particle outlets was placed at the midpoint between these two positions, at 3.5 mm. The fraction of flow each outlet receives is proportional to its opening width divided by the total broad section width. The small outlet carries 24.3%, the large outlet 28.3%, and the buffer outlet 18.7%. The remaining percentage is occupied by the solid PDMS walls separating the channels.

During the design process, an issue was identified with the broad section because it was not tall enough for the device to function correctly. This was corrected in revision. Additionally, flat walls that were initially spacing the two inlet channels were removed to allow the flow streams to converge more naturally into the pinched section.

To ensure proper flow distribution across the three outlets, the channels were designed to fan out at different angles from the broad section. This naturally results in different channel lengths. The particle outlets are longer due to their angled paths, which increases their hydraulic resistance, while the buffer outlet is kept shorter and wider to give it lower resistance so it naturally carries a larger fraction of the flow. In the final design, the buffer channel ended up being the longest of the three. Ideally this would be corrected in a future iteration by shortening the buffer path and lengthening the particle outlet channels.

If given the opportunity to iterate further on this design, the buffer outlet channel would be made the shortest of the three to reduce its hydraulic resistance and allow it to carry a greater fraction of the total flow. Additionally, the broad section would be made taller to improve particle separation across the outlet boundaries.

# Instructions

The most important steps for creating a microfluidic device with resin printing begin with designing the CAD model with the printer's minimum feature size in mind, as features that are too small will not print accurately. The mold must be printed with the bottom surface flat on the build plate to ensure a smooth sealing surface. After printing, the mold should be washed and checked for any uncured resin inside the channels, as this will prevent the PDMS from curing correctly. When casting PDMS, the mix ratio must be followed precisely, because too much or too little hardener will affect the final properties of the device. Finally, both surfaces must be plasma treated before bonding the PDMS to the glass slide to seal the device.

# Discussion

Resin printing was chosen over other manufacturing techniques for several reasons. The high resolution of the Form 3+ SLA printer, with a small minimum feature size, allows for the precise small-scale channel geometries required for pinch flow fractionation, features that would not be achievable with standard FDM printing. Resin prints are also watertight by nature, which is critical for a microfluidic device that must contain and direct fluid without leaking. Additionally, the smooth surface finish produced by resin printing is necessary for bonding a glass slide to seal the device, since a rougher surface would prevent a proper seal and cause leakage along the edges.

To handle a wider range of particle sizes, the design could be modified to include multiple outlet channels of varying lengths, each corresponding to a different size range. More channels would allow finer separation between size groups that are closer together. Flow separators could also be incorporated at the point where the broad section meets the outlets, physically dividing the streams before they enter their respective channels and reducing the chance of particles crossing into the wrong outlet.

The lower limit on particle size is set by two main factors. First, particles smaller than the surface roughness of the channels cannot follow predictable streamlines and will instead interact with the channel walls. Second, the minimum feature size of the printer limits how small the pinch channel can be made, which directly limits how small the particles can be while still achieving separation.

<iframe width="560" height="315"
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen>
</iframe>
