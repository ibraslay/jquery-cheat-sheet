# Mousemove event

## Javascript

```html
<script>
  const input = document.getElementById("e4Js");
  input.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("e4JsDemo").innerHTML = coor;
  });
</script>
```

Mouse over the rectangle above, and get the coordinates of your mouse pointer

<div id="e4Js"></div>
<p id="e4JsDemo">Coordinates: </p>

## jQuery

```html
<script>
  $("#e4JQuery").on("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    $("#e4JQueryDemo").html(coor);
  });
</script>
```

Mouse over the rectangle above, and get the coordinates of your mouse pointer

<div id="e4JQuery"></div>
<p id="e4JQueryDemo">Coordinates: </p>