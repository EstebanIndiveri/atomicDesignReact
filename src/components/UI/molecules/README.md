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
<li><a href="#molecules">Molecules</a></li>
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

> <h2 id="molecules">Molecules</h2>

<img src="https://atomicdesign.bradfrost.com/images/content/atomic-design-molecules.png" alt="atom_design_img" height="300px"/>

<img src="https://atomicdesign.bradfrost.com/images/content/molecule-search-form.png" alt="atom_design_img" height="300px"/>

<div style="text-align:justify;">
<p style="text-decoration:underline;font-weight:bold">Molecules are a group of atoms that are put together. For example, a form label, search input, and button can join together to create a search form molecule.</p>
<p>Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.
</p>
<p>
For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.
</p>
<div>
<p>Building up to molecules from atoms encourages a “do one thing and do it well” mentality. While molecules can be complex, as a rule of thumb they are relatively simple combinations of atoms built for reuse.</p>
<p>Think of a title, read more button, visibility status, comments icon, etc in one card. With this step we’re aiming to generate components that can be reused on other places as well such as news teasers, topic teasers, etc.</p>

<p>
When combined, these abstract atoms suddenly have purpose. The label atom now defines the input atom. Clicking the button atom now submits the form. The result is a simple, portable, reusable component that can be dropped in anywhere search functionality is needed.
</p>
<p>
assembling elements into simple functioning groups is something we’ve always done to construct user interfaces. But dedicating a stage in the atomic design methodology to these relatively simple components affords us a few key insights.
</p>
</div>
<details>
  <summary>Our code - molecules level</summary>
  <div>
    <ul>
    <li>categories</li>
    <li>formFieldsGroup</li>
    <li>imageGrid</li>
    <li>imageListItem</li>
    <li>paginator</li>
    <li>tab</li>
    </ul>

  <img src="https://i.postimg.cc/QMymF7ZF/Captura-de-Pantalla-2022-11-18-a-la-s-15-34-02.png" alt="" height="400px"/>
  <img src="https://i.postimg.cc/qMfcVKkc/Captura-de-Pantalla-2022-11-22-a-la-s-00-29-15.png" alt="" height="400px"/>
 
  </div>
</details>
<p style="text-align:justify">In the next example we can see three atoms into a one Molecule in this case <b><i>"Block"</i></b></p>

```jsx
import React from "react";

import Title from "components/UI/atoms/Heading";
import Button from "components/UI/atoms/Button/Button";
import Card from "components/UI/atoms/Card";
import { BlockInterface } from "interfaces/blockInterface";

const buttonType = "button";
export default function Block({
  className,
  children,
  title,
  button,
}: BlockInterface) {
  return (
    <Card className={className}>
      <Title>{title}</Title>
      {children}
      {button !== "" && <Button type={buttonType}>{button}</Button>}
    </Card>
  );
}
```
