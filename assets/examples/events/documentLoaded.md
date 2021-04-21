# Document Loaded

## Javascript

```html
<script>
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
  });
</script>
```

## jQuery

```html
<script>
  $(document).ready(function () {
    console.log("DOM loaded from jQuery");
  });
</script>
```