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
D ∈ [0,1]x[0,1]x[0,1]: light diffuse colors
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
D = ‖q‖ - t_2
q = (‖(p_1, p_3)‖ - t_1, p_2)
where
p ∈ ℝ³
t ∈ [0,2]x[0,2]
```

```scene
[[shapes]]
type = "torus"
material = "phong"
transform = """
sin from trigonometry
T(X)⋅`R_x`(r)
where
X ∈ [-5,5]x[-5,5]x[2,10]
r ∈ [-π,π]"""

[[shapes]]
type = "torus"
material = "phong"
transform = """
T((x,0,5))
where
x ∈ ℝ"""
```