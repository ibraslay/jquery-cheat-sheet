# Onerror event

## Javascript

```html
<script>
  let img1 = document.createElement("img");
  img1.src = "./assets/img/assemblers.png";
  document.getElementById("e7Js").append(img1);

  img1.onerror = function () {
    document.getElementById("e7JsDemo").textContent = "Image Failed.";
  };
</script>
```

<div id="e7Js"></div>

<p id="e7JsDemo"></p>

## jQuery

```html
<script>
  $("#e7JQuery").append($("<img>", { src: "./assets/img/assemblers.png" }));

  $("img").on("error", function () {
    $("#e7JQueryDemo").text("Image failed.");
  });
</script>
```

<div id="e7JQuery"></div>

<p id="e7JQueryDemo"></p>