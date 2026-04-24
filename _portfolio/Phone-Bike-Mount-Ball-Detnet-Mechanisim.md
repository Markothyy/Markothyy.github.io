---
title: "Top-Down Bike Phone Mount/Holder"
excerpt: "A top-down modeled, filament-printed phone holder designed for secure mounting, easy phone insertion, and rotation between portrait and landscape orientations."
header:
  image: /assets/img/RealL2.jpg
  teaser: /assets/img/RealL2.jpg
---

# Project Overview

This project focused on designing and filament 3D printing a bike phone mount using a top down modeling approach. The goal was to create a holder that could mount securely to a bike handle, allow the phone to be inserted and snap into place, and support phones of different sizes within reason. The device is also supposed to rotate between portrait and landscape orientations with a ball detent mechanisim.
Top down modeling was useful in this assignment because the parts all depended on one another.

The rationale behind the design was to balance three needs: secure mounting, secure phone retention, and easy user operation. The mount needed to attach firmly to the bar, the phone needed to stay in place under vibration, and the rotating feature needed to switch orientations without tools. I also wanted the design to be practical to print and assemble, which meant limiting unnecessary complexity and choosing geometries that would be strong enough in filament-printed form.

A major part of the design was the detent mechanism, this allowed for the entire assembly to work.

Because the parts were filament printed, I had to make dimensional adjustments for the manufacturing process. Several features needed added clearance or minor resizing to account for printer tolerance, material expansion, or surface roughness. In particular
The printing process used for this project was PLA filament printing with a high infill of 50%. I chose this process because it allowed quick iteration, was accessible for prototyping, and was suitable for producing functional mechanical parts.

Assembly 
To construct my phone mount it requires minimal screws and is held together by the pressure made from the spring and ball bearing. First, the clamps which hold the phone tight are conencted using an elastic spring. This spring is connected to these jaws by a small tooth made on the surface facing the inside of the base of the phone mount. the detent system then works with what we will call the gear on the back of the phone with the divits of where the ball bearing and spring would be on top. This bottom most piece is also the piece that connects to the bike. 

## Top Down Modeling Approach
In top down modeling, its an approach where an entire assembly can be made without importing each part, unlike how the workflow works in SOLIDWORKS. This allows for faster and more accuurate dimensioning and modeling since the time it takes to go into one component of an assembly, edit it, going back to the assembly, and updating it is saved. In my case this was through modeling and projecting geometries to make other bodies to be turned into components within my assembly. This approach assisted me in modeling and offsetting my dovetail clamps at just the right amount for the mount to work. This approach also helped with interfacing components with other components namely the ball dentent system.  

## Detent Mechanism
My rational for my phone holder was to use a ball detent system to allow the device to rotate from portriat to landscape easily and securely. This was done through two parts. One part containing the "teeth" for the ball bearing to sit in, and another which houses the ball bearing and the spring. The teeth for the detent mechanism sits in the middle of the housing, where the teeth is connected only to the phone mount, and the housing is jointed to the bike handle. This makes my assembly unconstrained, in otherwords, allows for the rotation of the device allowing it to securely stay in place when being rotated.  

## Printing / Tolerance Changes
Parts were all printed using PLA, which upon testing proves it can hold up a phone using the three jaws of the mount. As for tolerancing, without it the device even if unconstrained will not work due to the high amount of surface contact from rotating parts, sliding parts, screws, and so on. For example, the dovetail sliders have a 0.4mm tolerance which is reasonably in range for a easily sliding jaw for the phone mount. Any smaller and the fit will be a tight friction fit, which is not what the device wants to exhibt when in use. Another part was taking into account the size of the screws used, not just the threaded region, but also the head. Countersinks were made to be around 3.2mm in height, which when tested were proven to keep the screws flush, allowing for example the rigid joint to the bike to interface with the gear without any unwanted friction from the screws. Tolerancing was also used for the gear, as one, when printing objects naturelly can shrink and expand to the undesired length, and two, to prevent friction from being present in the device which inhibits the mount's ability to function. 

# CAD Model
<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b602811be0c1d884ddf56cb?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>


# Real-Life Photos
![Real Life Photo1](/assets/img/RealL1.jpg)
![Real Life Photo2](/assets/img/RealL2.jpg)

# Rotation GIF

![Phone holder rotating between portrait and landscape](/assets/img/rotation.gif)

# Fusion Render

![Fusion rendering of the phone holder with the phone installed](/assets/img/fusion-render.png)

# Internal Rotation Mechanism Cross-Section

![Cross-section of the internal rotation mechanism](/assets/img/cross-section.jpg)

# Individual Top-Down Components

## Component 1
![Top-down component 1](/assets/img/component-1.png)

## Component 2
![Top-down component 2](/assets/img/component-2.png)

## Component 3
![Top-down component 3](/assets/img/component-3.png)

## Component 4
![Top-down component 4](/assets/img/component-4.png)
