---
title: "Generative Design Skateboard Truck Hanger with Integrated Motor Mount"
excerpt: "A generatively designed skateboard truck hanger"
header:
  image: /assets/img/IMG_3341.JPG
  teaser: /assets/img/IMG_3341.JPG
gallery:
  - image_path: /assets/img/IMG_3341.JPG
  - image_path: /assets/img/IMG_3342.JPG
  - image_path: /assets/img/IMG_3347.JPG
  - image_path: /assets/img/IMG_3349.JPG
---

# Generative Design Skateboard Truck Hanger with Integrated Motor Mount

## Project Overview

This project used generative design to create a lightweight skateboard truck hanger with an integrated brushless DC motor mount. The design goal was to reduce mass while preserving the critical functional interfaces of the truck, including the axle bearing seats, pivot cup interface, kingpin clearance region, and motor mounting features.

The final design combines what would normally be separate truck and motor mount components into one optimized structure. The model was assembled with the longboard, motor, belt, pulley, and wheel system to check overall fit, clearance, and mechanical layout.

---

## Design Objective

The main objective was to create a skateboard truck hanger that could support realistic riding and motor loads while minimizing unnecessary material. The generative design study was set up to preserve important connection points while allowing Fusion 360 to reshape the rest of the body around the load paths.

Key goals included: Reducing the mass of the hanger and motor mount , maintaining the wheel bearing seat geometry, preserving the pivot cup and kingpin assembly function, maintaining motor bolt and shaft clearance, keeping enough clearance for the belt and pulley system, comparing generative outcomes for different metal materials

---

## CAD 

The starting CAD model included the skateboard hanger, axle region, motor mount, motor, belt, pulley, wheels, kingpin region, and pivot interface. Before running the generative design study, I separated the model into preserve geometry and obstacle geometry.

### Preserve Geometry

The preserve geometry included the features that had to remain fixed for the skateboard truck to function correctly:

* Axle ends for the wheel bearing seats
* Pivot cup interface
* Motor mounting holes
* Motor shaft clearance hole
* Kingpin and bushing clearance region
* Critical assembly contact surfaces

These regions were preserved because they define how the truck attaches to the longboard, how the wheels are mounted, and how the motor system connects to the hanger. In other words, these were preserved because we need them in the final design otherwise we have a part that does not function. 

### Obstacle Geometry

Obstacle geometry was used to protect the spaces where the design could not grow material. These regions included:

* Wheel clearance
* Belt path clearance
* Motor pulley clearance
* Wheel pulley clearance
* Kingpin and bushing installation clearance
* Allen key and bolt access clearance

This was especially important because the hanger must still rotate around the pivot and kingpin region without interfering with the bushings or motor system.

---

## Embedded Fusion 360 Models

### Final Truck Model

<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b6028117bade36171b9257d?mode=embed" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>

### Aluminum Generative Design Model

<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b60281111a247b21f0b0aac?mode=embed" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>

### Original / Previous Model

<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b6028112772f9c1c3e640cb?mode=embed" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>

---

## Generative Design Study

The generative design study was created to minimize mass while maintaining a minimum safety factor of 2. The manufacturing method was set to unrestricted so that the solver could generate models without being limited by machining constraints.

---

## Load Cases

The loading conditions were chosen to represent realistic forces that the truck could experience during riding, turning, braking, motor operation, and impact loading.

| Force Name | Magnitude | Location Applied | Short Rationale |
|---|---:|---|---|
| Rider vertical load | [Insert value] N | Axle ends | Represents the rider’s weight transferred through the wheels into the hanger |
| Lateral turning load | [Insert value] N | Axle / wheel direction | Represents side loading during carving or turning |
| Motor belt force | [Insert value] N | Motor mount / pulley direction | Represents the belt tension created by the motor driving the wheel |
| Braking load | [Insert value] N | Axle / wheel direction | Represents longitudinal force during deceleration |
| Impact load | [Insert value] N | Axle ends | Represents a bump, curb, or sudden road impact |

The loads were applied to regions where the real truck would transfer force during use. The goal was not to overload the model artificially, but to give the solver enough realistic information to generate meaningful structural load paths.

---

## Final Assembly

The final truck was assembled with the longboard deck, motor, belt, pulley, and wheel system to verify the overall fit of the design.

![Completed longboard assembly](/assets/img/IMG_3341.JPG)

![Assembly side view](/assets/img/IMG_3342.JPG)

![Assembly alternate view](/assets/img/IMG_3347.JPG)

![Truck model by itself](/assets/img/IMG_3349.JPG)

---

## Assembly and Motion Testing

### Turning Clearance Test

The truck was checked by rotating the assembly to verify that the pivot and kingpin region had enough clearance during steering motion.

![Turning clearance GIF](/assets/img/aqm1ft.gif)

### Motor, Pulley, Belt, and Wheel Rotation Test

The motor and wheel system was also checked to confirm that the pulley and belt path had enough clearance to rotate without contacting the hanger.

![Motor pulley rotation GIF](/assets/img/aqm1k1.gif)

---

## Material Comparison

The aluminum generative design result provided a lightweight structure that is closer to the material behavior of traditional skateboard trucks. AlSi10Mg aluminum is useful for reducing mass while still maintaining enough stiffness and strength for this type of application.

A stronger material such as 17-4 PH stainless steel would likely allow thinner structural members because of its higher strength and stiffness, but the higher density could also increase the final mass. This means that the lighter aluminum option may be better for weight-sensitive applications, while stainless steel may be more useful when durability, stiffness, or compact high-strength geometry is the priority.

The comparison showed that material selection directly affects the final generative design geometry. A lower-density aluminum design tends to use larger but lighter load paths, while a denser and stronger steel design can use more compact members but may still end up heavier overall.

---

## Discussion

Generative design is useful because it can create efficient structures that follow the main load paths of a part. Instead of manually sketching every support member, I defined the preserved geometry, obstacle regions, constraints, materials, and load cases, then allowed the solver to generate a structure around those requirements.

This is especially valuable in aerospace and automotive applications, where reducing mass can improve efficiency, performance, and energy usage. One commercial example of this is [add a specific commercial generative design example here], where generative design was used to reduce the number of separate components in an assembly and create a lighter consolidated part.

The most important part of the generative design process was applying reasonable load cases. The software can only optimize around the information it is given, so unrealistic loads can lead to unrealistic results. If a major force is missing, the final design may remove material from an area that actually needs strength. If the applied forces are too large or placed incorrectly, the design may become unnecessarily heavy. For this project, I selected loads based on how a skateboard truck is actually used: vertical rider loading, lateral turning, motor belt tension, braking, and impact loading.

The AlSi10Mg and 17-4 PH material comparison showed how material properties influence the final design. Aluminum is lighter and more similar to common skateboard truck materials, making it a practical choice for a lightweight design. 17-4 PH stainless steel has greater strength and stiffness, but its higher density can make the part heavier even if the geometry becomes thinner. This creates a tradeoff between weight, strength, stiffness, and application.

Generative design is useful because it can quickly create efficient structures that follow the main load paths of a part. It is especially helpful when the goal is lightweighting, part consolidation, or exploring design options that a person may not sketch manually. However, it also has drawbacks. The results often require cleanup, smoothing, and design interpretation before they can become a usable final part. The designer still needs to define the correct preserve geometry, obstacle geometry, constraints, and loads. Without good engineering judgment, the software can generate a design that looks optimized but does not actually solve the real problem.

For this project, generative design was most useful for exploring how the truck hanger and motor mount could become one integrated structure. The final assembly helped connect the digital design process to a realistic mechanical layout by showing whether the truck, motor, belt, pulley, and wheel system could fit and move as intended.

---

## Reflection

This project helped me better understand how generative design depends on strong engineering setup before the solver is even run. The final result was not just about creating an organic-looking part, but about preserving the correct interfaces, choosing meaningful loads, checking clearances, and validating the design within the full assembly.

The most valuable part of the project was seeing how CAD decisions, loading assumptions, material selection, and assembly constraints all affect the final design.
