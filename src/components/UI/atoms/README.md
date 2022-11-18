## ATOMIC DESIGN

<hr/>
<div style="text-align:justify; margin-top:30px;">
<p >Atomic Design is a methodology used to create web designs. This principle is based on the concept of first creating elements and then putting them together to make sense for the user.</p>

<p> <i>The basic idea is that a website is build from scratch without designing all the pages separately</i></p>
<p>The need for some kind of a design system appears when we start to get overwhelmed by the count of components on a project.</p>

<p>
The five stages of atomic design are:
<ul>
<li>Atoms</li>
<li>Molecules</li>
<li>Organisms</li>
<li>Templates</li>
<li>Pages</li>
<ul>
</p>
</div>

### Methodology

> Atomic

<img src="https://atomicdesign.bradfrost.com/images/content/atomic-design-atoms.png" alt="atom_design_img" height="300px"/>

<div style="text-align:justify;">
<p style="text-decoration:underline;font-weight:bold">The first step is building atoms. Atoms are buttons, labels, inputs</p>
<p>They are all small items that are used widely across a website
with this step allows a designer/developer to create a library with a lot of elements that can be re-used without creating them over and over again.
</p>
<p>
Atoms demonstrate all your base styles at a glance, which can be a helpful reference to keep coming back to as you develop and maintain your design system
</p>
<span>Good exercise: check Ant Design or Material UI</span>
<p>
<a href="https://ant.design/components/overview">Ant Design web</a>
</p>
<p>
<a href="https://mui.com/">Material UI</a>
</p>
</div>

<details>
  <summary>Our code - atomic level</summary>
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
  <p>i think it has something to do with the fact h3 is a block element</p>
</details>
