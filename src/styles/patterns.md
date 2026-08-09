# Design Patterns Reference

## Button Patterns

### Primary Button (Green)
```html
<a href="/donate" class="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors duration-200 no-underline shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
  Donate Now
</a>

<button type="submit" class="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-dark bg-accent rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
  Subscribe
</button>

<a href="/learn-more" class="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 no-underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
  Learn More
</a>

<div class="text-center mb-12 md:mb-16">
  <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark text-balance">
    Section Title
  </h2>
  <p class="mt-4 text-lg md:text-xl text-dark/70 max-w-2xl mx-auto text-balance">
    Descriptive subheading that explains what this section contains.
  </p>
  <div class="mt-6 w-16 h-1 rounded-full bg-accent mx-auto" aria-hidden="true"></div>
</div>

<article class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
  <img src="/path/to/image.jpg" alt="Description" class="w-full h-48 object-cover" loading="lazy" />
  <div class="p-6">
    <h3 class="font-heading text-xl font-bold text-dark mb-2">Card Title</h3>
    <p class="text-dark/70 leading-relaxed">Card description text.</p>
  </div>
</article>


