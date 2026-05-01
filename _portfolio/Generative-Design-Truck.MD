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
| Reaction Load from Ground | 50 N | Preserved Bushing Geometry | Mainly just for structure, reaction of ground to the truck for sturdiness |
| Motor Weight Moment | 10 Nm | Preserved Motor Mount | Represents the weight/torsion the motor mount plate experiences when the motor is attached |
| Motor belt force | 9 N | Motor mount / pulley direction | Represents the belt tension created by the motor driving the wheel |
| Wheel bearing reaction load | 400 N | Bearing contact surface at wheel/axle interface | Represents distributed wheel loads transferred through the bearing into the axle. |
| Weight of the Rider | 100 N | Tip of hanger, part that attaches to the skateboard | Represents the weight of the rider on the center part of the hanger. |
| Pressure by Motor to Motor Mounting Plate | 5 N | Motor contact surface at Motor Mount | Represents normal force from the motor to motor mounting plate. |
| Reaction by center part to Hanger from bushing & skateboard force | 50 N | Backside of center part on hanger | Represents reaction force from the center hanger piece to the skateboard. |
| Bearing load on Axles | 100 N | Preserved Axles | Represents wheel forces transferred into the axle through the bearing. |
| Remote Moment | 9 Nm | In between Mounting plate and Axles | Represents the rotatting tension from the belt as the skateboard moves. The force felt by the axle and mounting plate as the belt turns. |

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

Generative design is useful because it can create efficient structures that follow the main load paths of a part. Sketching every support member takes tons of time and in an industry setting more money the more time spent working on the project. Alternatively you can just set what you need, what you don't need and what the part should experience. This is especially valuable in aerospace and automotive applications, where reducing mass can improve efficiency, performance, and cost. One commercial example of this is a project [by NASA contracted to Protolabs to create a vapor collection device for NASA's missions to the moon.](https://www.youtube.com/watch?v=S2aBP-dLg5w). This was produced and shipped in hours. This time frame is especially useful if this was being rapid prototyped, as it would heavily shorten the time it takes to iterate on the device. As for powder bed fusion, an example of this technology being put into practice is [Lockheed Martin’s use of laser powder bed fusion additive manufacturing](https://www.lockheedmartin.com/en-us/news/features/2026/Accelerating-Operational-Readiness-with-Laser-Powder-Bed-Fusion-Additive-Manufacturing.html), which shows how complex metal parts can be produced more efficiently for operational aerospace and defense applications. Lockheed Martin used laser powder bed fusion to produce complex thermal management components for high-performance aerospace systems. The article specifically connects the technology to platforms such as the UH-60M Black Hawk helicopter and the Precision Strike Missile program, with tested applications showing 15 to 20 percent weight reduction and 10 to 15 percent better heat dissipation. So generative design does not jsut serve as a way for companies that have to spend millions and maybe billions to save money, but also as a design technique that can improve the reponse of the desired object. Of course having better heat dissipation means less warping in aircraft, meaning an engineer does not have to build infurstructre like heat pipes in the aircraft for better heat transfer. The most important part of the generative design process was applying reasonable load cases. The software can only optimize around the information it is given, so of course unrealistic loads can lead to unrealistic results. If a major force is missing, the final design may remove material from an area that actually needs strength. If the applied forces are too large or placed incorrectly, the design may become unnecessarily heavy similar to how my first iterations for this project looked. For this project, I selected loads based on how a skateboard truck is actually used. For example the vertical rider loading, bearing loads on the axles , and motor belt tension. The AlSi10Mg and 17-4 PH generations showed how material properties influence the final design when using generative design. When comparing the generations between the two materials over the outcomes I have made, it showed a clear difference in the generated geometry. The AlSi10Mg aluminum result produced a thicker, bulkier structure because the material is lighter but not as strong or stiff as 17-4 PH stainless steel. The 17-4 PH stainless steel result became the final model because its higher strength and stiffness allowed the solver to create a skinnier, more compact geometry while still carrying the applied loads. This shows the tradeoff between material density, strength, stiffness, and final part shape in generative design. However, it also has drawbacks. The results often require cleanup, smoothing, and design interpretation before they can become a usable final part. Often times similar to what I experience in this project was that obstacle geometries would unintentionally disconnect your preserve geometries from the generated mesh. If someone did not notice this before printing, material and substatial amount of time would have been wasted. For example many times did my axles still form unwanted material that made fixing it troublesome. And other times It would generate however be not logically structurally stable. So an engineer still needs to define the correct preserve geometry, obstacle geometry, constraints, and loads. Without good engineering judgment, the software can generate a design that looks optimized but does not actually solve the real problem. Generative design would be most useful in applications that can be very cost heavy. As I mentioned earlier, in aerospace applications, you need a very spesific saftey factor (usually a very small one) so generative design makes it easy in that it targets a certain design along with mass to acheive the desired output. Generative design also can allow one to design something at a spesific minimal thickness or target mass, which often speeds up the process of generating a desired model to then be manufactured.  

---
