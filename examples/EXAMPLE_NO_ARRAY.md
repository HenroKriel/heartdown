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
`k_a`, `k_d`, `k_s` ∈ ℝ³: object material colors and the ambient color
A ∈ ℝ³: ambient light color
α ∈ ℝ: object shininess
`P_L` ∈ ℝ³: light positions
D ∈ ℝ³: light diffuse colors
S ∈ ℝ³: light specular colors
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
T((x,0,5))⋅`R_x`(r)
where
x ∈ ℝ
r ∈ ℝ"""

[[shapes]]
type = "torus"
material = "phong"
transform = """
T((x,0,5))
where\n
x ∈ ℝ"""
```