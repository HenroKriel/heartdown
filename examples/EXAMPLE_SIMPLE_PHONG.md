---
full_paper: False
---

❤: phong
```iheartla
material
`C` = (L̂⋅N̂)D
L̂ = (`P_L`-p)/‖`P_L`-p‖
R̂ = 2(L̂⋅N̂)N̂ - L̂
V̂ = I - p

where
p ∈ ℝ³: point on surface
N̂ ∈ ℝ³: normal at the point on the surface
I ∈ ℝ³: eye/camera position
`P_L` ∈ ℝ³: light positions
D ∈ ℝ³: light diffuse colors
```

❤: sphere
```iheartla
shape
D = ‖p‖ - 2
where
p ∈ ℝ³
```

❤: torus
```iheartla
shape
D = ‖q‖ - 1
q = (‖(p_1, p_3)‖ - a, p_2)
where
p ∈ ℝ³
a ∈ ℝ
```

```scene
[[shapes]]
type = "torus"
material = "phong"
transform = """
sin from trigonometry
T((x,0,5))⋅`R_x`(r)
where
x ∈ ℝ
r ∈ ℝ"""

[[shapes]]
type = "torus"
material = "phong"
transform = """
T((x,0,5))
where
x ∈ ℝ"""
```