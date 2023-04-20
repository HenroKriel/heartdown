❤: phong
```iheartla
material
`C` = (L̂⋅N̂)D
L̂ = (`P_L`-p)/‖`P_L`-p‖

where
p ∈ ℝ³: point on surface
N̂ ∈ ℝ³: normal at the point on the surface
I ∈ ℝ³: eye/camera position
`P_L` ∈ ℝ³: light positions
D ∈ [0,1]x[0,1]x[0,1] default = (1, 0, 0): light diffuse colors
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
t ∈ [0,2]x[0,2] default = (0.77, 0.6)
```

```scene
[[shapes]]
type = "torus"
material = "phong"
transform = """
sin from trigonometry
T(X)⋅`R_x`(r)
where
X ∈ [-5,5]x[-5,5]x[2,10] default = (-2, 0, 5)
r ∈ [-3,3] default = 1.5"""

[[shapes]]
type = "torus"
material = "phong"
transform = """
T((x,0,5))
where
x ∈ ℝ"""
```