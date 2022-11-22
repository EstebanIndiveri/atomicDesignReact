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
<li>Organisms</li>
<li><a href="#Templates">Templates</a></li>
<li>Pages</li>
<ul>
</p>
</div>
<div>
<img src="https://andelav4prod.wpengine.com/wp-content/uploads/2019/10/gif.gif" alt="atom_design_img" height="300px"/>
</div>
<hr style="margin-bottom:30px;margin-top:30px"/>

### Methodology

> <h2 id="Templates">Templates</h2>

<img src="https://atomicdesign.bradfrost.com/images/content/atomic-design-templates.png" alt="atom_design_img" height="300px"/>

<img src="https://atomicdesign.bradfrost.com/images/content/template.png" alt="atom_design_img" height="300px"/>

<div style="text-align:justify;">
<p style="text-decoration:underline;font-weight:bold">At this stage in the process we’re creating visuals that actually makes sense for in our product. For this example we have put all the details in place. The username, profile image, title, etc. At this stage we’re not creating fully designed pages.</p>
<p>For example there can be a node template that will be used for an event and will be used for a topic. The structure is the same, header, hero, detail, sidebar, footer. A template can include multiple organisms this way.
</p>
<p>
Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. To build on our previous example, we can take the header organism and apply it to a homepage template.
</p>
<div>
<p> template displays all the necessary page components functioning together, which provides context for these relatively abstract molecules and organisms. When crafting an effective design system, it’s critical to demonstrate how components look and function together in the context of a layout to prove the parts add up to a well-functioning whole. We’ll discuss this more in a bit.</p>
<p>Another important characteristic of templates is that they focus on the page’s underlying content structure rather than the page’s final content. Design systems must account for the dynamic nature of content, so it’s very helpful to articulate important properties of components like image sizes and character lengths for headings and text passages.</p>

> <p><i>
> You can create good experiences without knowing the content. What you can’t do is create good experiences without knowing your content structure. What is your content made from, not what your content is.</i>

</p>
<p>
Page’s skeleton we’re able to create a system that can account for a variety of dynamic content, all while providing needed guardrails for the types of content that populate certain design patterns.
</p>
</div>
<details>
  <summary>Our code - Templates level</summary>
  <div>
    <ul>
    <li>Scroll</li>
    <li>animations</li>
    <li>displayers</li>
    <li>wrappers</li>
    </ul>

  <img src="https://i.postimg.cc/YCmCcdx8/Captura-de-Pantalla-2022-11-22-a-la-s-01-54-34.png" alt="" height="400px"/>
 
  </div>
</details>
