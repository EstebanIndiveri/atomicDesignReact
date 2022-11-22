## ATOMIC DESIGN 🔬

<hr/>
<div style="text-align:justify; margin-top:30px">
<p >Atomic Design is a methodology used to create web designs. This principle is based on the concept of first creating elements and then putting them together to make sense for the user.</p>

<p> <i>The basic idea is that a website is build from scratch without designing all the pages separately</i></p>
<p>The need for some kind of a design system appears when we start to get overwhelmed by the count of components on a project.</p>

<p>
The five stages of atomic design are:
<ul>
<li>Atoms</li>
<li>Molecules</li>
<li><a href="#Organisms">Organisms</a></li>
<li>Templates</li>
<li>Pages</li>
<ul>
</p>
</div>
<div>
<img src="https://andelav4prod.wpengine.com/wp-content/uploads/2019/10/gif.gif" alt="atom_design_img" height="300px"/>
</div>
<hr style="margin-bottom:30px;margin-top:30px"/>

### Methodology

> <h2 id="Organisms">Organisms</h2>

<img src="https://atomicdesign.bradfrost.com/images/content/atomic-design-organisms.png" alt="atom_design_img" height="300px"/>

<img src="https://atomicdesign.bradfrost.com/images/content/organism-header.png" alt="atom_design_img" height="300px"/>

<div style="text-align:justify;">
<p style="text-decoration:underline;font-weight:bold">Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.</p>
<p>Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.
</p>
<p>
A search form can often be found in the header of many web experiences, so let’s put that search form molecule into the context of a header organism.
</p>
<div>
<p>The header forms a standalone section of an interface, even though it contains several smaller pieces of interface with their own unique properties and functionality.</p>
<p>Organisms can consist of similar or different molecule types. A header organism might consist of dissimilar elements such as a logo image, primary navigation list, and search form. We see these types of organisms on almost every website we visit.</p>

<p>
Organisms might consist of different types of molecules, other organisms might consist of the same molecule repeated over and over again. For instance, visit a category page of almost any e-commerce website and you’ll see a listing of products displayed in some form of grid.
</p>
<p>
Building up from molecules to organisms encourages creating standalone, portable, reusable components.
</p>
</div>
<details>
  <summary>Our code - organisms level</summary>
  <div>
    <ul>
    <li>onBoardingQuestionsForm</li>
    <li>paginatedFormLayout</li>
    <li>searchbar</li>
    <li>gridLayout</li>
    </ul>

  <img src="https://i.postimg.cc/bNq3Z55V/Captura-de-Pantalla-2022-11-22-a-la-s-01-14-12.png" alt="" height="400px"/>
  <img src="https://i.postimg.cc/9fwp3H40/Captura-de-Pantalla-2022-11-22-a-la-s-01-14-45.png" alt="" height="400px"/>
 
  </div>
</details>

<p style="text-align:justify">In the next example we can see a one organism Feature contain a child like molecules like "Block", you can see and test this example into storybook searching<b><i>"Feature"</i></b></p>

```jsx
import React from "react";

import { FeatureInterface } from "interfaces/featureInterface";

import "./style.scss";

export default function Feature({
  className,
  children,
  image,
}: FeatureInterface) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`feature ${className}`}
    >
      {children}
    </div>
  );
}
```
