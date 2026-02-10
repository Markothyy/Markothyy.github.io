---
title: "Muli-Material Pliers"
excerpt: "A rapid prototyped pair of pliers capable of gripping items using TPU and PETG"
header:
  image: /assets/img/CadA1_2026-Feb-02_01-42-20AM-000_CustomizedView9265646143_png.png
  teaser: /assets/img/CadA1_2026-Feb-02_01-42-20AM-000_CustomizedView9265646143_png.png
gallery:
  - image_path: assets/img/wiresimpli.png
   
---
# Design Methodology 
My design is meant to replicate a very simplified version of a pair of pliers. I first defined what filiments I should use. Then I assigned ABS to the arms/jaws for rigidity and TPU 95A to the center section to act as a spring that reopens the pliers after each squeeze. With the jaw length set to 85.051 mm, the ABS jaws provide a stiff, precise grip while the TPU element supplies the force that a spring would on real pliers. The key rationale was the interface between rigid ABS and TPU: because multi-material bonding depends on factors like surface energy/chemistry, and shrinkage/cooling behavior. I treated the ABS TPU transition as a dovetail style form fit joint, rather than using a multimaterial printer that would print the two materials and bond them together before completing the part. Using multimaterial printers can sacrifice time, and bring up the possibility of print failure since the filiments being used are alternating within each layer. Below was a center piece I had fabricated before reaching the final product. While this infill style till can make the pliers functional, the optimal infill would be rectilinear, since we are counting on the infill supports to "fail" so that the pliers work.

# Slicing 
In order for the pliers to work, some variables need to be changed within the print settings of the slicing software. First is to change the perimiter and shells settings. First, remove the solid layers from the "Horizontal shells" area from both the top and bottom. Doing this setting now exposes the infill of the center part. Next is to change the infill setting. For TPU, Gyroid or another infill type may be automatically selected as it is the best setting for most TPU prints just due to the mechanical properties of TPU. I switched this setting to rectilinear so that I use the infill "failure" as a spring for my pliers. The infill settings for my ABS jaws and arms were set to 23% infill to give it a strong structure so its capable of deforming the TPU piece without breaking. The center TPU piece for it to function required horizontial layers from the top and bottom to be removed. On my slicer they were automattically set to 3 layers which were changed to 0, again to show the TPU supports that will ultimately allow us to bend the pliers.The rectilinear infill for the TPU part was set at 10%, other low values work as well, keeping in mind however the ability for the TPU to "spring" back. Below is the G-code preview of the center piece after adjustments have been made. Also below is the G-code preview of the jaws and arm, as well as a CAD model to observe the online version of the model. 

# CAD Model
<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b6028115441302eab5825b7?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

# Final Product Photo Gallery  

{% include gallery caption="Final Product made in Vanderbilt Digital Fabrication Labratory using student made Voron printers." %}
