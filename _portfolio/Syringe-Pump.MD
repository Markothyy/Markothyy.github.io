---
title: "Rapid Prototype Syringe Pump"
excerpt: "A DIY Medical Syringe Pump using addtive manufacturing techniques and microelectronics."
header:
  image: /assets/img/Bettersyringpump.png
  teaser: /assets/img/rendersyringe.png
gallery:
  - image_path: assets/img/wiresimpli.png
   
---

# Introduction 
Syringe pumps are motor-driven devices used to deliver precise volumes of fluid at a wide range of flow rates. They have many medical applications as well as laboratory and research settings. They operate by turning a lead screw with a motor which then in turn moves a carriage that pushes the syringe plunger forward and expels a controlled amount of liquid at a set pace. These pumps offer several advantages over other fluid delivery methods. For one, high sterility and minimal cross-contamination make them applicable in medical application. Syringes can also be easily swapped. More so, there is an ability to control flow rate and resistance. As a result, they are commonly used in labs for microfluidics and for administering critical therapeutics in medical settings. However, syringe pumps are typically unable to recirculate fluids and must be reloaded once the syringe is empty. Despite their relatively simple mechanical and electronic design, commercial syringe pumps often cost several hundred dollars, even for entry-level models, which limits their accessibility, particularly in low-resource or educational environments. To address this, a low-cost, open-source syringe pump built from 3D-printed components and Arduino-based controls is presented, with the goal of replicating the core functionality of these expensive commercial models while trying to make the device more accessible.

# Design Description 
## Mechanical operation of the syringe pump
The syringe pump works by using a lead screw driven by a stepper motor. The plunger is moved forward or backward by a carriage that rides on a smooth rod using linear bearings.The design of the syringe pump allows for multiple syringe diameters by making the slots on both the carriage and the end support able to hold and support either syringe size. This allows for the general design of the syringe pump to work well for both, as only the code needs to know what diameter syringe is being used. The model itself can easily hold either size while still allowing for regular output (no vibrations or looseness).

* **Massive Print Area: 1140 x 1200 x 1100 mm.** With a build envelop just shy of 4 feet in all dimensions, the LF3DP is capable of printing furniture and other large objects.
* **High Volumetric Output Extruder: 1 kg/hr - 450 C.** This printer come standard with a MDPH2 extruder by Massive Dimension, which can extrude at a rate of 1 kg/hr. Unlike typical filament extruders, the MDPH2 uses a screw to convey and liquify plastic pellets before the molten material is pushed out of a large nozzle (1 to 5 mm extrusion diameter). Please note: This printer can also be configured for other high flow rate extruders, such as the Typhoon and Pulsar by Dyze Design.
* **Affordable Pellet Feedstock** Pellets are the cheapest form of feedstock for any plastic-based manufacturing process. Save 50-75% of material costs by using pellets instead of spools of filament. Concentrated colorant can be added to the virgin material to achieve any color in the rainbow without requiring large amounts of storage. Recyled material can also be used for sustainable material printing.


# CAD Model
<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a4e9efbd94ab86a035?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

{% include gallery caption="Simplified Circuit Diagram" %}
