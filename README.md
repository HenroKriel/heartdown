# Video Demo

[<picture> <img src="https://github.com/HenroKriel/heartdown/assets/57759778/85512d73-e8d9-44bd-a8d6-b230cdd6573a"> </picture>](https://www.youtube.com/watch?v=WofSfaGkyDs "test")

# Gallery

![thesis-screenshot](https://user-images.githubusercontent.com/57759778/229257698-f7a526b0-f4bd-4356-b83d-72b5177b3838.png)
![specular phong](https://user-images.githubusercontent.com/57759778/233797570-670987a8-8ef8-4ff5-8f04-263d52f0774d.png)
![toon and phong](https://user-images.githubusercontent.com/57759778/233797589-5449b629-7a34-44de-8e4c-d280b73c85ef.png)
![box frame](https://user-images.githubusercontent.com/57759778/233797593-88a226e4-ae83-41e3-a987-39064e837b72.png)

# IH❤️IQ

A shader graphing calculator for signed distance functions (SDFs), forked from H❤️rtDown and inspired by the work of [Inigo Quilez](https://iquilezles.org/). Example scenes can be found in the examples directory.

Thesis paper: [PDF](https://github.com/HenroKriel/heartdown/files/11472474/ms_thesis.pdf)

[VIDEO DEMONSTRATION](https://www.youtube.com/watch?v=WofSfaGkyDs)

## Installing

Install [Anaconda](https://www.anaconda.com/products/individual) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html).
Miniconda is faster to install. (On Windows, choose the 64-bit Python 3.x version. Launch the Anaconda shell from the Start menu and navigate to this directory.)
Then:

    conda env create -f environment-heartdown.yml
    conda activate heartdown

To update an already created environment if the `environment-heartdown.yml` file changes or to change environments, activate and then run `conda env update --file environment-heartdown.yml --prune`.

## Running

To launch the editor, run:

    python server.py path/to/document.md

and then open `http://localhost:8000/` in a browser (Chrome is most tested).
