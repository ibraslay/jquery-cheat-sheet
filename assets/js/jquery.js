/*
 * SECTION OF EVENTS
 */

// click event
export function fnClick() {
  $(".e1JQuery").on("click", function (event) {
    alert("jQuery code");
  });
}

// double click event
export function fnDblClick() {
  $(".e2JQuery").on("dblclick", function (event) {
    alert("jQuery - double click");
  });
}

// press key event
export function fnPressKey() {
  $("#e3JQuery").on("keypress", function (event) {
    $("#e3JQuery").css("backgroundColor", "blue");
  });
}

// Mouse move event
export function fnMouseMove() {
  $("#e4JQuery").on("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    $("#e4JQueryDemo").html(coor);
  });
}

// on change event
export function fnOnChange() {
  $("#e5JQuery").on("change", function (e) {
    $(this).val($(this).val().toUpperCase());
  });
}

// on image loaded event
export function fnOnImgLoaded() {
  $("#e6JQuery").append($("<img>", { src: "./assets/img/assembler.png" }));
  $("img").on("load", function () {
    $("#e6JQueryDemo").text("Image loaded.");
  });
}

// on image loaded event
export function fnOnImgFailed() {
  $("#e7JQuery").append($("<img>", { src: "./assets/img/assemblers.png" }));
  $("img").on("error", function () {
    $("#e7JQueryDemo").text("Image failed.");
  });
}

// on form submit event
export function fnFormSubmit() {
  $("#e8JQuery").on("submit", function () {
    alert("The form was submitted");
  });
}

// change select event
export function fnChangeSelect() {
  $("#e9JQuery").on("change", function (e) {
    let value = e.target.value;
    alert("You selected: " + value);
  });
}

// mouse over event
export function fnMouseOver() {
  $("#e10JQuery").on("mouseover", function (e) {
    $(this).css("color", "red");
  });
}

// mouse over event
export function fnChecked() {
  $("#e11JQuery").on("click", function (e) {
    let checkBox = $("#e11JQuery");
    let text = $("#e11JQueryDemo");

    if (checkBox.prop("checked")) {
      text.css("display", "block");
    } else {
      text.css("display", "none");
    }
  });
}

// event target
export function fnEventTarget() {
  $("#e12JQuery")
    .children()
    .on("click", function (e) {
      alert($(this).text());
    });
}

/*
 * SECTION OF FUNCTIONS & SELECTORS
 */
export function fnCreate() {
  $("#f0JQuery").on("click", function (e) {
    let para = $("<p>", { text: "This is a paragraph." });
    //or
    // let para = $("<p>").text("This is a paragraph.");
    $("#f0JQueryDemo").append(para);
  });
}

export function fnRemove() {
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
}

export function fnAppend() {
  $("#f2JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click Me!" });
    $("#f2JQueryDemo").append(para);
  });
}

export function fnPrepend() {
  $("#f3JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click Me!" });
    $("#f3JQueryDemo").prepend(para);
  });
}

export function fnAfter() {
  $("#f4JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click" });
    $(".f4JQueryDemo").after(para);
  });
}

export function fnBefore() {
  $("#f5JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click" });
    $(".f5JQueryDemo").before(para);
  });
}

export function fnClone() {
  $("#f6JQuery").on("click", function (e) {
    let cln = $("#f6JQueryDemo").clone();
    $("#f6JQueryDemo").after(cln);
  });
}

export function fnAddClass() {
  $("#f7JQuery").on("click", function (e) {
    let cln = $("#f7JQueryDemo").addClass("red-text");
  });
}

export function fnRemoveClass() {
  $("#f8JQuery").on("click", function (e) {
    let cln = $("#f8JQueryDemo").removeClass("red-text");
  });
}

export function fnToggleClass() {
  $("#f9JQuery").on("click", function (e) {
    let cln = $("#f9JQueryDemo").toggleClass("red-text");
  });
}

export function fnAddAttr() {
  $("#f10JQuery").on("click", function (e) {
    $(this).attr("disabled", "true");
  });
}

export function fnRemoveAttr() {
  $("#f11JQuery").on("click", function (e) {
    $("#f11JQueryDemo").removeAttr("disabled");
  });
}

export function fnToggleDataAttr() {
  $("#f12JQueryb1").on("click", function () {
    $("#f12JQueryImg").attr("data-src", "./assembler.png");
    alert("data-src is: " + $("#f12JQueryImg").attr("data-src"));
  });

  $("#f12JQueryb2").on("click", function () {
    $("#f12JQueryImg").removeAttr("data-src");
    alert("data-src is: " + $("#f12JQueryImg").attr("data-src"));
  });
}

export function fnHide() {
  $("#f13JQuery").on("click", function (e) {
    $("#f13JQueryDemo").hide();
  });
}

export function fnShow() {
  $("#f14JQuery").on("click", function (e) {
    $("#f14JQueryDemo").show();
  });
}

export function fnFadeIn() {
  $("#f15JQuery").on("click", function (e) {
    $("#f15JQueryDemo").fadeIn();
  });
}

export function fnFadeOut() {
  $("#f16JQuery").on("click", function (e) {
    $("#f16JQueryDemo").fadeOut();
  });
}

export function fnIterator() {
  $("#f17JQuery").on("click", function (e) {
    $("#f17JQueryDemo li").each(function (index) {
      $(this).css("color", "red");
    });
  });
}

export function fnChildren() {
  $("#f18JQuery").on("click", function (e) {
    $("#f18JQueryDemo")
      .children()
      .each(function (index, element) {
        $(element).css("color", "red");
      });
  });
}

export function fnParent() {
  $("#f19JQuery").on("click", function (e) {
    $("#f19JQueryDemo li").parent().css("background", "red");
  });
}

export function fnClassSelector() {
  $("#f20JQuery").on("click", function (e) {
    $(".f20JQueryDemo").css("font-weight", "Bold");
  });
}

export function fnIdSelector() {
  $("#f21JQuery").on("click", function (e) {
    $("#f21JQueryDemo").css("font-weight", "Bold");
  });
}

export function fnPropSelector() {
  $("#f22JQuery").on("click", function (e) {
    $('.textJq[style="display:none;"]').css({
      color: "red",
      display: "block",
    });
  });
}

export function fnSelectedOption() {
  $("#f23JQuery").on("click", function (e) {
    let para = $("#f23JQueryDemo option:selected").text();
    // Or value
    // $("#f23JQueryDemo option:selected").val();
    $("#f23JQueryP").text("Selected: " + para);
  });
}

export function fnChangeFirst() {
  $("#f24JQuery").on("click", function (e) {
    let para = $("#f24JQueryDemo a")
      .first()
      .attr("href", "https://www.google.com/")
      .attr("target", "_blank")
      .text("Go to Google");
  });
}

export function fnValueFirst() {
  $("#f25JQuery").on("click", function (e) {
    let para = $("#f25JQueryDemo input").first().val();
    alert("Your name is: " + para);
  });
}

export function fnRemoveAll() {
  $("#f26JQuery").on("click", function (e) {
    $(".textjq").remove();
  });
}

export function fnAnimate() {
  $("#f27JQuery").on("click", function (e) {
    $("#f27JQueryDemo").animate({ width: "300px" });
  });
}
