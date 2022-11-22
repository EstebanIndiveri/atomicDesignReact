## ATOMIC DESIGN 🔬

<hr/>
<div style="text-align:justify; margin-top:30px">
<p >Atomic Design is a methodology used to create web designs. This principle is based on the concept of first creating elements and then putting them together to make sense for the user.</p>

<p> <i>The basic idea is that a website is build from scratch without designing all the pages separately</i></p>
<p>The need for some kind of a design system appears when we start to get overwhelmed by the count of components on a project.</p>

<p>
The five stages of atomic design are:
<ul>
<li><a href="#atomic">Atoms</a></li>
<li>Molecules</li>
<li>Organisms</li>
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

> <h2 id="atomic">Atoms</h2>

<img src="https://atomicdesign.bradfrost.com/images/content/atomic-design-atoms.png" alt="atom_design_img" height="300px"/>

<img src="https://atomicdesign.bradfrost.com/images/content/atoms-form-elements.png" alt="atom_design_img" height="300px"/>

<div style="text-align:justify;">
<p style="text-decoration:underline;font-weight:bold">The first step is building atoms. Atoms are buttons, labels, inputs</p>
<p>They are all small items that are used widely across a website
with this step allows a designer/developer to create a library with a lot of elements that can be re-used without creating them over and over again.
</p>
<p>
Atoms demonstrate all your base styles at a glance, which can be a helpful reference to keep coming back to as you develop and maintain your design system
</p>
<div>
<p>Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.</p>
<p>Like atoms in nature they’re fairly abstract and often not terribly useful on their own. However, they’re good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.</p>
</div>
<span>Good exercise: check Ant Design or Material UI </span>
<p>
<a href="https://ant.design/components/overview">Ant Design web</a>
</p>
<p>
<a href="https://mui.com/">Material UI</a>
</p>
</div>

> <i style="color:red"><b>warning. not every is an atom, some components don't need to be generic, just you need think first in atom and next in all steps to arrive to the page</b></i>

<details>
  <summary>Our code - atomic level</summary>
  <div>
    <ul>
    <li>button</li>
    <li>credits</li>
    <li>dropdown</li>
    <li>expander</li>
    <li>formField</li>
    <li>icons</li>
    <li>header</li>
    <li>inputField</li>
    <li>loader</li>
    </ul>  
    <p>Examples:</p>
      <img src="https://i.postimg.cc/c1TfWMH7/Captura-de-Pantalla-2022-11-18-a-la-s-12-13-11.png" alt="atomic_level_img" height="400px"/>
      <img src="https://i.postimg.cc/rwGfSRjf/Captura-de-Pantalla-2022-11-18-a-la-s-12-19-07.png" alt="atomic_level_img" height="400px"/>
      <img src="https://i.postimg.cc/d0GmMhDz/Captura-de-Pantalla-2022-11-18-a-la-s-12-34-19.png" alt="atomic_level_img" height="400px"/>
      <img src="https://i.postimg.cc/TYY6pm6J/Captura-de-Pantalla-2022-11-18-a-la-s-12-35-52.png" alt="atomic_level_img" height="400px"/>
  </div>
</details>
  
  ```jsx
import React from 'react';

import { ButtonInterface } from 'interfaces/buttonInterface';

import './styles.scss';

export default function Button({ type, disabled, className, children, onClick }: ButtonInterface) {
return (
// eslint-disable-next-line react/button-has-type
<button type={type} onClick={onClick} disabled={disabled} className={`button ${className}`}>
{children}
</button>
);
}
