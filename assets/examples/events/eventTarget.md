# event target event

## Javascript

```html
<script>
  const selector = document.getElementById("e12Js").children;

  for (const li of selector) {
    li.addEventListener("click", function (e) {
      alert(e.target.textContent);
    });
  }
</script>
```

When a ul list item is clicked, show the item that was clicked

<ul id="e12Js">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>

## jQuery

```html
<script>
  $("#e12JQuery")
    .children()
    .on("click", function (e) {
      alert($(this).text());
    });
</script>
```

When a ul list item is clicked, show the item that was clicked

<ul id="e12JQuery">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>