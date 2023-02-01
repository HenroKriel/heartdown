---
full_paper: False
---

❤: phong
```iheartla
`I_p` = `k_a`∘`i_a` + ∑_m ((L̂_m⋅N̂)`k_d`∘D_m + max(0, R̂_m⋅V̂)^α`k_s`∘S_m)
L̂_m = (P_m-p)/‖P_m-p‖
R̂_m = 2(L̂_m⋅N̂)N̂ - L̂_m
`i_a` = ∑_m (A_m)

where
`k_a`, `k_d`, `k_s` ∈ ℝ³: object material colors and the ambient color
A_m ∈ ℝ³: ambient light color
α ∈ ℝ: object shininess
P_m ∈ ℝ³: light positions
p ∈ ℝ³: point on surface
D_m ∈ ℝ³: light diffuse colors
S_m ∈ ℝ³: light specular colors
N̂ ∈ ℝ³: normal at the point on the surface
V̂ ∈ ℝ³: direction towards the viewer
```

❤: sphere
```iheartla
shape
d = ‖p‖ - 2
where
p ∈ ℝ³
```

❤: torus
```iheartla
shape
d = ‖q‖ - 1
q = (‖(p_1, p_3)‖ - a, p_2)
where
p ∈ ℝ³
a ∈ ℝ
```

```scene
[[shapes]]
type = "torus"
transform = """
T((x,0,5))⋅`R_x`(r)
where
x ∈ ℝ
r ∈ ℝ"""

[[shapes]]
type = "torus"
transform = """
T((x,0,5))
where\n
x ∈ ℝ"""
```