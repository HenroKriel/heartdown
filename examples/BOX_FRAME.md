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

❤: box_frame
```iheartla
shape
D = min(‖(max(0, `p'`_1), max(0, q_2), max(0, q_3))‖ + min(max(`p'`_1, q_2, q_3),0), ‖(max(0, q_1), max(0, `p'`_2), max(0, q_3))‖ + min(max(q_1, `p'`_2, q_3),0), ‖(max(0, q_1), max(0, q_2), max(0, `p'`_3))‖ + min(max(q_1, q_2, `p'`_3),0))
`p'` = (|p_1|, |p_2|, |p_3|) - b
q = (|`p'`_1 + e| - e, |`p'`_2 + e| - e, |`p'`_3 + e| - e)
where
p ∈ ℝ³
b ∈ [0,1]x[0,1]x[0,1] default = (1, 1, 1)
e ∈ [0,1] default = 0.1
```

```scene
[[shapes]]
type = "box_frame"
material = "phong"
transform = """
T(X)⋅`R_x`(`rx`)⋅`R_y`(`ry`)
where
X ∈ [-5,5]x[-5,5]x[2,10] default = (-1, 0, 5)
`rx` ∈ [-3,3] default = 0
`ry` ∈ [-3,3] default = 0.71"""

[[shapes]]
type = "box_frame"
material = "phong"
transform = """
T(X)⋅`R_x`(`rx`)⋅`R_y`(`ry`)⋅`R_z`(`rz`)
where
X ∈ [-5,5]x[-5,5]x[2,10] default = (-1, 0, 5)
`rx` ∈ [-3,3] default = 1.14
`ry` ∈ [-3,3] default = 1.57
`rz` ∈ [-3,3] default = 1.57"""
```