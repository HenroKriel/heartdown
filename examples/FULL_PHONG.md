---
full_paper: False
---

❤: phong
```iheartla
material
`C` = `k_a`∘`i_a` + (L̂⋅N̂)`k_d`∘D + max(0, R̂⋅V̂)^α`k_s`∘S
L̂ = (`P_L`-p)/‖`P_L`-p‖
R̂ = 2(L̂⋅N̂)N̂ - L̂
`i_a` = A
V̂ = I - p

where
p ∈ ℝ³: point on surface
N̂ ∈ ℝ³: normal at the point on the surface
I ∈ ℝ³: eye/camera position
`k_a` ∈ [0,1]x[0,1]x[0,1] default = (0, 0, 0.38): material ambient
`k_d` ∈ [0,1]x[0,1]x[0,1] default = (0, 0, 1): material diffuse
`k_s` ∈ [0,1]x[0,1]x[0,1] default = (0, 0.1, 0.18): material specular
A ∈ [0,1]x[0,1]x[0,1] default = (0.55, 0.41, 0.72): ambient light color
α ∈ [0,10] default = 1.84: shininess
`P_L` ∈ [-10,10]x[-10,10]x[-10,10] default = (-4, 5, 1.5): light positions
D ∈ [0,1]x[0,1]x[0,1] default = (0.5, 0.5, 0.5): light diffuse colors
S ∈ [0,1]x[0,1]x[0,1] default = (0.5, 0.3, 0.25): light specular colors
```

❤: sphere
```iheartla
shape
D = ‖p‖ - 2
where
p ∈ ℝ³
```

```scene
[[shapes]]
type = "sphere"
material = "phong"
transform = """
T((x,0,5))⋅`R_x`(r)
where
x ∈ ℝ
r ∈ ℝ"""
```