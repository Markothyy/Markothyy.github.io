---
title: "Generative Design Drone"
excerpt: "A topology-optimized quadcopter airframe designed with Fusion 360 generative design, with an STM32-based flight controller. In progress."
header:
  image: /assets/img/drone.jpg
  teaser: /assets/img/drone.jpg
---

*Status: in progress*

# Overview

This project uses Autodesk Fusion 360's generative design tools to create a lightweight quadcopter airframe. Instead of drawing the frame by hand, I define where the motors, flight controller, and landing points have to be, apply the loads the frame will see in flight and on landing, and let the solver grow material only along the load paths. The result is an organic, low-mass structure that I'm building to fly.

# Design Approach

* **Preserve geometry:** the mounting features the frame must keep, such as the motor mounts on each arm
* **Obstacle geometry:** keep-out zones the solver isn't allowed to fill
* **Load cases:** motor thrust and landing loads
* **Manufacturing:** outcomes are set up for additive manufacturing, since the organic shapes generative design produces are impractical to machine

# Analysis

* Checking the generative outcomes for structural performance under thrust and landing loads in ANSYS
* Running CFD to assess the frame's drag and its effect on control performance

# Electronics

The drone is built around an STM32-based flight controller with an onboard IMU, four brushless motors, and ESCs. Integrating these is the current step toward flight testing.

# CAD Model

The model below is interactive. Click and drag to rotate it, and scroll to zoom.

<div class="media-frame">
  <iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b602811e513816e89740228?mode=embed" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" title="Generative design drone CAD model" style="display:block;border:0;"></iframe>
</div>
