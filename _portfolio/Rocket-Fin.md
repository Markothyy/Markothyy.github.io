---
title: "Mini Rocket Fin Control System"
excerpt: "A tabletop rocket fin control demonstrator using an Arduino Uno R4, MPU-6050 IMU, PCA9685 servo driver, I2C LCD, four servo-actuated fins, and a 3D printed airframe."
header:
  image: /assets/img/rocket-fin-control/IMG_3516.JPG
  teaser: /assets/img/rocket-fin-control/FinandServos.png
gallery:
  - image_path: /assets/img/rocket-fin-control/IMG_3516.JPG
    alt: "Full mini rocket fin control system with electronics and fins"
    title: "Full System Assembly"
  - image_path: /assets/img/rocket-fin-control/FinandServos.png
    alt: "Labeled fin and servo channel layout"
    title: "Servo and Fin Channel Layout"
  - image_path: /assets/img/rocket-fin-control/IMG_3517.JPG
    alt: "Servo horn connected to 3D printed fin"
    title: "Servo Horn to Fin Connection"
  - image_path: /assets/img/rocket-fin-control/IMG_3522.JPG
    alt: "LCD displaying live servo and IMU values"
    title: "Live LCD Feedback"
---

# Mini Rocket Fin Control System

The Mini Rocket Fin Control System is a tabletop mechatronics demonstrator that shows how rocket orientation data can be converted into fin motion. The system uses an MPU-6050 inertial measurement unit, an Arduino Uno R4, a PCA9685 servo driver, four CN0023 servos, an I2C LCD screen, and a 3D printed airframe with four 3D printed fins.

The goal was to build a simplified active fin control system. When the airframe is tilted, the IMU measures the motion, the Arduino estimates pitch and roll, and the servos move the fins in response.

![Mini Rocket Fin Control System](/assets/img/rocket-fin-control/IMG_3516.JPG)

## Project Summary

This project combines mechanical design, electronics, programming, and control logic into one working prototype. The main system flow is:

```text
MPU-6050 IMU -> Arduino Uno R4 -> PCA9685 servo driver -> CN0023 servos -> 3D printed fins
```

The MPU-6050 measures acceleration and angular velocity. The Arduino uses those values to estimate pitch and roll. The PCA9685 creates the PWM signals for the four servos. The servos rotate the fins, and the LCD displays live values during testing.

This is not a flight-ready rocket control system. It is a scaled down model that demonstrates the basic mechatronics process used in active control systems:

```text
Sense motion -> Process sensor data -> Calculate correction -> Move actuator -> Change fin position
```

## Parts List

| Part | Quantity | Purpose |
|---|---:|---|
| Arduino Uno R4 WiFi | 1 | Main controller that reads the IMU, runs the control logic, updates the LCD, and commands the servo driver |
| MPU-6050 GY-521 IMU | 1 | Measures acceleration and angular velocity so the Arduino can estimate pitch and roll |
| PCA9685 servo driver | 1 | Generates PWM signals for the four servos through I2C |
| CN0023 servos | 4 | Actuate the fins |
| I2C 16 by 2 LCD screen | 1 | Displays live pitch, roll, servo angle, gain, deadband, range, and trim values |
| External 5 V, 10 A power supply | 1 | Powers the servos separately from the Arduino |
| 3D printed airframe section | 1 | Holds the servos and represents the rocket body |
| 3D printed fins | 4 | Act as the control surfaces |
| Servo horns | 4 | Connect each servo shaft to a fin |
| Breadboard | 1 | Helps organize wiring during testing |
| Jumper wires | As needed | Connect the Arduino, IMU, LCD, PCA9685, and power supply |
| Fusion 360 CAD model | 1 | Used to design and document the airframe and fins |

## Mechanical Design

The mechanical structure was built around a 3D printed airframe section. Four fins were mounted around the airframe in a cross layout. Each fin is connected to a servo through a servo horn.

The fins were glued to the servo horns so that the fins would not slip during motion. This mattered because the code assumes that the commanded servo angle matches the actual fin angle. If the fin slipped relative to the horn, the Arduino would command one angle while the fin physically sat at another angle.

![Servo Horn and Fin Connection](/assets/img/rocket-fin-control/IMG_3517.JPG)

The measured fin face area was:

```text
6619.915 mm^2
```

The measured distance from the assumed airframe center of mass to the fin center was:

```text
106.961 mm
```

These dimensions helped document the scale of the prototype and the position of the fins.

## CAD Model

The airframe and fins were modeled in Fusion 360. The CAD model was used to design the airframe geometry, fin size, and servo spacing.

[View the Fusion 360 airframe and fin model](https://a360.co/3PvCZI4)

![CAD Measurements](/assets/img/rocket-fin-control/measurephoto.png)

## Electronics Overview

The Arduino Uno R4 acts as the main controller. The MPU-6050, LCD, and PCA9685 all communicate with the Arduino using I2C.

On the Arduino:

```text
A4 = SDA
A5 = SCL
```

The MPU-6050 is powered from 3.3 V. The LCD and PCA9685 logic side are powered from 5 V. The four servos are powered by an external 5 V, 10 A supply because the Arduino cannot safely provide enough current for several servos moving at the same time.

The Arduino and the external servo power supply share a common ground. This is necessary because the servo control signals need the same voltage reference as the servo power.

![Arduino and IMU Wiring](/assets/img/rocket-fin-control/IMG_3514.jpg)

## Servo and Fin Layout

The PCA9685 controls the four servos through separate channels.

| PCA9685 Channel | Fin |
|---:|---|
| 0 | Top fin |
| 1 | Right fin |
| 2 | Bottom fin |
| 3 | Left fin |

The top and bottom fins respond to pitch. The right and left fins respond to roll.

![Servo and Fin Layout](/assets/img/rocket-fin-control/FinandServos.png)

## IMU Math

The MPU-6050 contains an accelerometer and a gyroscope.

The accelerometer measures acceleration along the x, y, and z axes. Since gravity points downward, the accelerometer can be used to estimate tilt.

The gyroscope measures angular velocity, meaning how fast the sensor is rotating. It gives smooth short-term motion, but tiny errors can build up over time. That buildup is called drift.

The Arduino uses both sensor measurements to estimate pitch and roll.

## Accelerometer Tilt Equations

The accelerometer estimates roll and pitch using gravity:

$$
roll_{accel} = \tan^{-1}\left(\frac{a_y}{a_z}\right)
$$

$$
pitch_{accel} = \tan^{-1}\left(\frac{-a_x}{\sqrt{a_y^2 + a_z^2}}\right)
$$

Where:

| Variable | Meaning |
|---|---|
| $a_x$ | Acceleration measured along the x-axis |
| $a_y$ | Acceleration measured along the y-axis |
| $a_z$ | Acceleration measured along the z-axis |
| $roll_{accel}$ | Roll estimate from the accelerometer |
| $pitch_{accel}$ | Pitch estimate from the accelerometer |

The accelerometer is useful because it can sense the direction of gravity. However, it can become noisy when the model is shaken or moved quickly.

## Gyroscope Angle Estimate

The gyroscope measures angular velocity. To estimate angle from the gyroscope, the code uses:

$$
new\ angle = old\ angle + angular\ velocity \cdot \Delta t
$$

For roll:

$$
roll_{gyro} = roll + g_x \Delta t
$$

For pitch:

$$
pitch_{gyro} = pitch + g_y \Delta t
$$

Where:

| Variable | Meaning |
|---|---|
| $g_x$ | Gyroscope rotation rate used for roll |
| $g_y$ | Gyroscope rotation rate used for pitch |
| $\Delta t$ | Time between readings |
| $roll_{gyro}$ | Roll estimate predicted from the gyroscope |
| $pitch_{gyro}$ | Pitch estimate predicted from the gyroscope |

The gyroscope is good for smooth short-term motion. The problem is that small measurement errors can build up over time, which causes drift.

## Complementary Filter

The complementary filter combines the accelerometer and gyroscope estimates.

The filter equations used in the code are:

$$
roll = \alpha(roll + g_x \Delta t) + (1 - \alpha)roll_{accel}
$$

$$
pitch = \alpha(pitch + g_y \Delta t) + (1 - \alpha)pitch_{accel}
$$

In the final code:

$$
\alpha = 0.97
$$

This means the filter mostly follows the gyroscope estimate, while the accelerometer gives a smaller correction.

In simple terms:

```text
Final angle = mostly gyro estimate + small accelerometer correction
```

With alpha equal to 0.97:

```text
97 percent gyroscope prediction
3 percent accelerometer correction
```

This made the pitch and roll readings smoother while still allowing the accelerometer to correct drift over time.

If alpha were higher, the fins would be smoother but slower to correct drift. If alpha were lower, the system would correct drift faster, but the fins could twitch more from accelerometer noise.

## Gyro Bias Calibration

At startup, the system asks the user to hold the model still. While it is still, the Arduino reads the gyroscope several times and averages the values.

That average is the gyro bias.

The bias is subtracted from future gyro readings so the Arduino does not interpret small sensor errors as real rotation.

In simple terms:

```text
Corrected gyro reading = measured gyro reading - gyro bias
```

This helps reduce slow drift in the pitch and roll estimate.

## Deadband and Smoothing

Small IMU noise can make the fins twitch even when the model is almost level. To reduce this, the code uses a small deadband.

The deadband ignores very small angles near level:

```text
If the measured angle is very small, treat it as zero
```

The code also smooths the pitch and roll command:

$$
currentPitch = 0.8(currentPitch) + 0.2(measuredPitch)
$$

$$
currentRoll = 0.8(currentRoll) + 0.2(measuredRoll)
$$

This prevents sudden jumps in fin position and makes the system look more controlled.

## Proportional Fin Control

The fin control is proportional. This means a larger tilt causes a larger fin movement.

The gain value used in the code is:

$$
K = 1.8
$$

The gain controls how strongly the fins respond.

For example, if the model tilts by 10 degrees:

$$
fin\ correction = 1.8 \times 10 = 18^\circ
$$

The servos are centered at 90 degrees. The correction is added or subtracted from 90 degrees.

The equations are:

$$
top\ fin = 90^\circ + K\theta
$$

$$
bottom\ fin = 90^\circ - K\theta
$$

$$
right\ fin = 90^\circ + K\phi
$$

$$
left\ fin = 90^\circ - K\phi
$$

Where:

| Symbol | Meaning |
|---|---|
| $K$ | Gain |
| $\theta$ | Pitch angle |
| $\phi$ | Roll angle |

The top and bottom fins respond to pitch. The right and left fins respond to roll. Opposite fins move in opposite directions so they act as correcting pairs.

## Servo Limits and Trim

The servos are limited to:

```text
50 degrees to 130 degrees
```

This prevents the fins from rotating too far and binding mechanically.

Each servo also has a trim value. Trim is a small adjustment used to straighten a fin when the servo is commanded to center.

For example, if a fin is slightly tilted at 90 degrees, the trim value can shift that servo a few degrees so the fin is physically straight.

## LCD and Serial Feedback

The LCD displays live system values during operation. It cycles through:

- Pitch and roll
- Servo angles
- Gain and deadband
- Servo range and trim values

![LCD Live Feedback](/assets/img/rocket-fin-control/IMG_3522.JPG)

The Serial Monitor was used for testing and calibration. It allowed the system to be zeroed, centered, debugged, and tested without changing the code.

## How a Real Rocket Fin Control System Works

A real active rocket fin control system follows the same general idea as this project, but it uses stronger hardware, faster sensors, and flight-tested software.

A real system needs to know how the rocket is moving during flight. It can use sensors such as:

| Sensor | Purpose |
|---|---|
| Accelerometer | Measures acceleration |
| Gyroscope | Measures angular velocity |
| Barometer | Estimates altitude from air pressure |
| GPS | Provides position and velocity |
| Magnetometer | Helps estimate heading |
| Flight computer | Processes sensor data and commands actuators |

The basic control loop is:

```text
Measure motion -> Estimate attitude -> Calculate correction -> Move fins -> Change aerodynamic force
```

If the rocket starts to rotate away from its desired orientation, the flight computer calculates a correction. The actuators move fins or canards. Those surfaces change the airflow around the rocket and create aerodynamic forces. These forces create a moment that helps rotate the rocket back toward the desired orientation.

In a real rocket, the fins do not simply move for visual effect. They change the aerodynamic forces on the vehicle. The correction depends on airspeed, fin size, fin angle, center of pressure, center of mass, and the rocket's current motion.

A simplified aerodynamic relationship is:

$$
F = \frac{1}{2}\rho V^2 A C_L
$$

Where:

| Variable | Meaning |
|---|---|
| $F$ | Aerodynamic force on the fin |
| $\rho$ | Air density |
| $V$ | Airspeed |
| $A$ | Fin area |
| $C_L$ | Lift coefficient |

The moment created by the fin force can be estimated as:

$$
M = FL
$$

Where:

| Variable | Meaning |
|---|---|
| $M$ | Correcting moment |
| $F$ | Force from the fin |
| $L$ | Distance from the center of mass to the fin center |

This project does not measure real aerodynamic force because it is a tabletop model with no airflow. Instead, it demonstrates the mechatronics part of the control process:

```text
Read sensor -> Estimate angle -> Calculate fin command -> Move servo -> Change fin angle
```

## Testing

The system was tested in stages.

| Test | Purpose |
|---|---|
| Servo sweep test | Confirmed that the PCA9685 and servos were working |
| LCD test | Confirmed that the screen displayed values over I2C |
| IMU connection test | Confirmed that the MPU-6050 appeared at I2C address 0x68 |
| IMU motion test | Confirmed that pitch and roll changed when the IMU was tilted |
| Servo response test | Confirmed that the fins moved in response to IMU motion |
| Zeroing test | Confirmed that the current orientation could be set as level |
| Power test | Confirmed that the external 5 V supply powered the servos correctly |

## What I Learned

This project helped me connect mechanical design, electronics, and control logic in one physical system.

The most important lessons were:

- Multiple servos need external power
- A shared ground is required when using external servo power
- IMU readings need filtering before they are useful for control
- The gyroscope provides smooth response, but it needs accelerometer correction
- The accelerometer corrects tilt using gravity, but it can be noisy during motion
- Mechanical slippage between the servo horn and fin can ruin the control response
- Gain, deadband, trim, and servo limits are important for making the physical system behave correctly
- LCD and Serial Monitor feedback make debugging much easier

## Project Files

The final Arduino code and supporting project files are available here:

[GitHub Repository: RocketFinControlSystem](https://github.com/Markothyy/RocketFinControlSystem)

{% include gallery caption="Mini Rocket Fin Control System prototype photos and CAD screenshots." %}
