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

| Off-the-shelf Components  | Count |
| ------------- | ------------- |
| M3x0.5 | 17  |
| M3 Heat Inserts | 8  |
| Arduino Uno  | 1  |
| Breadboard  | 1  |
| Mean Well RT-65D Power Supply  | 1 |
| Limit Switch  | 1 |
| 3-color RGB LED  | 1 |
| Latching Button  | 1 |
| NEMA-17 Motor  | 1 |
| 8x8x250mm Lead Screw  | 1 |
| 8x200mm Linear Rod  | 1 |
| 5mm to 8mm Flexible Coupler  | 1 |
| 8x8mm Brass Nut  | 1 |
| 8mm Shaft Collar  | 4  |
| V-Slot 20x40x350 Aluminum Extrusion  | 1 |
| Flanged Ball Bearing  | 2  |
| M3x 10   | 6  |
| M5 Tee Nuts   | 6 |
| M5 x 8 Bolts  | 6  |
| M3x8 Thread forming screws  | 4  |
| 8mm Linear Bearing  | 1  |
| M4x0.7 Alloy Steel Cup-Point Set Screw  | 2  |
| M3x0.5 Alloy Steel Socket Head Screw  | 2 |
| Potentiometer  | 1 |
| Momentary Button  | 1 |
| Stepper Motor Driver Module  | 1 |


| 3D Printed Components  | Count |
| ------------- | ------------- |
| Motor Mounting Plate  | 1  |
| Housing (Box Pieces)   | 5  |
| Carriage  | 1  |
| Simple End Support  | 1  |
| Syringe End Support  | 1  |

# How to Operate The Syringe Pump 
1. Select the syringe with the desired diameter and place it in the carriage. Align it in the proper position.
2. Input the syringe used, the total volume of liquid to be dispensed, and the desired flow rate into the program.
3. Plug in the power supply to power the Arduino, stepper motor driver, and stepper motor.
4. On the pump the user is then able to press three selections: “Stop/Start”, “Forward”, and “Reverse”.
5. The “Forward” and “Reverse” buttons can be used when the device is paused and the yellow LED is lit. While either button is being held down, the carriage will move in the button’s respective directions.
6. To have the syringe pump run until completion or until being paused press the “Stop/Start” button.
7. While the device is in motion to pause it press the “Stop/Start” button

  
![Syringe pump render](/assets/img/rendersyringe.png)

# Design Description 
## Mechanical operation of the syringe pump
The syringe pump works by using a lead screw driven by a stepper motor. The plunger is moved forward or backward by a carriage that rides on a smooth rod using linear bearings.The design of the syringe pump allows for multiple syringe diameters by making the slots on both the carriage and the end support able to hold and support either syringe size. This allows for the general design of the syringe pump to work well for both, as only the code needs to know what diameter syringe is being used. The model itself can easily hold either size while still allowing for regular output (no vibrations or looseness).
## Multi-syringe compatibility
The design of the syringe pump allows for multiple syringe diameters by making the slots on both the carriage and the end support able to hold and support either syringe size. This allows for the general design of the syringe pump to work well for both, as only the code needs to know what diameter syringe is being used. The model itself can easily hold either size while still allowing for regular output (no vibrations or looseness).
## Button, switch, and LED functionality 
The syringe pump uses a simple control system with a latching button, two momentary buttons, a limit switch, and a tri-color LED. The latching button toggles the pump between running and paused states. While paused, the momentary buttons let the user move the plunger forward or backward for adjustments or priming. A limit switch at the end of the plunger’s travel detects when the syringe is empty and stops the motor to prevent overextension. The tri-color LED indicates system status: green for running, yellow for paused, and red for empty. This interface provides clear feedback and allows for reliable operation.
## Electronics protection 
The enclosure was designed to protect the Arduino, motor driver, and other wiring and electrical components from damage and liquid exposure. It uses a thick casing that can keep moisture and liquid out of the main body where the electrical components are, even in the case of accidental splashes. All the electronics are positioned beneath the main body of the syringe pump, so no live parts are accessible during regular use. Heat shrink tubing was used to cover any exposed wires and solder joints, which provides insulation and helps prevent any short circuits that could be caused by condensation, liquid splashes, or any other accidental contact. This design makes the device safer and should increase its lifespan without replacing any of the parts.
## Stepper motor microstepping 
The syringe pump utilizes a stepper motor controlled with 1/16 step microstepping which allows for both smooth and precise motion of the carriage and therefore the syringe plunger. Since each step has been divided into sixteenths, finer control over the movement is provided, and significantly reduces vibration and noise during the operation of the pump. This enhanced resolution is especially beneficial for accurate fluid delivery, which is amplified at the low flow rate seen in the pump. Although microstepping can slightly reduce torque, this is not an issue for this project. This configuration ensures reliable performance without excess vibrations.
## Programming approach 
The syringe pump is programmed using an Arduino Uno and the AccelStepper library to control a stepper motor via a driver. The core logic of the system centers around converting a user-defined flow rate (in mL/min) into a corresponding motor step rate (in steps/sec), which allows for the motor to move at the correct speed to get the requested flow rate.
In the setup phase, the Arduino initializes all button inputs and LED outputs. The primary control flow is handled in the loop() function, which continuously monitors the state of the latching button (to toggle the pump between the running and paused state), the limit switch (to detect when the syringe is empty), and the two momentary buttons (to manually move the pump forward or backward while paused). Each of these inputs is debounced in software to ensure reliability.
The syringe's inner diameter is used to calculate the cross-sectional area of the plunger, which is then factored into the stepsPerSecond equation. This converts a desired fluid flow into motor steps, based on the physical dimensions and mechanical characteristics of the system.
The LEDs provide feedback to the user: green indicates the pump is running, yellow indicates it's paused, and red signals that the syringe is empty (triggered by the limit switch).
## Operating Limits 
The theoretical maximum flow rate would be based on the maximum speed that the stepper motor can run out which is 1000 . This means that the maximum flow 𝑆𝑡𝑒𝑝𝑠/𝑠 rate for the small syringe would be 6.54 , and the maximum flow rate for the large 𝑚𝐿/𝑚𝑖𝑛 syringe would be 10.08 . 𝑚𝐿/𝑚𝑖𝑛 The smallest theoretical output would be that which is output by one step which is 0.109 μL for the small syringe and 0.168 μL for the large syringe.
## Code for Syringe Pump 
[Code Repository](https://github.com/Markothyy/Syringe-Pump-Project-Code/tree/main).


# CAD Model
<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b6028113474eb8b44f17749?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

{% include gallery caption="Simplified Circuit Diagram" %}
