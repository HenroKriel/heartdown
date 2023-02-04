---
full_paper: False
---

❤: phong
```iheartla
`I_p` = `k_a`∘`i_a` + (L̂⋅N̂)`k_d`∘D + max(0, R̂⋅V̂)^α`k_s`∘S
L̂ = (P-p)/‖P-p‖
R̂ = 2(L̂⋅N̂)N̂ - L̂
`i_a` = A

where
`k_a`, `k_d`, `k_s` ∈ ℝ³: object material colors and the ambient color
A ∈ ℝ³: ambient light color
α ∈ ℝ: object shininess
P ∈ ℝ³: light positions
p ∈ ℝ³: point on surface
D ∈ ℝ³: light diffuse colors
S ∈ ℝ³: light specular colors
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