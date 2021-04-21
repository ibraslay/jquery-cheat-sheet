import * as js from "./vanilla.js";
import * as jq from "./jquery.js";
/*
 * Here I get the files based on the
 * section wanted in HTML
 */

const links = document.querySelectorAll("li > a");

links.forEach((element) => {
  element.addEventListener("click", function (e) {
    const srcFile = "./assets/examples/events/" + e.target.title;
    fetch(srcFile)
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then((text) => {
        // console.log(text);
        document.querySelector(
          ".markdown"
        ).innerHTML = new showdown.Converter().makeHtml(text);
        hljs.highlightAll();
        addListeners(e);
      })
      .catch((err) => {
        console.log(err);
        // let message = err.statusText || "Error";
      });
  });
});

/*
 * Here I declare global listeners
 */
function addListeners(e) {
  const el = e.target;

  if (el.matches('[title="documentLoaded.md"]')) {
  }

  if (el.matches('[title="click.md"]')) {
    js.fnClick();
    jq.fnClick();
  }

  if (el.matches('[title="pressKey.md"]')) {
    js.fnPressKey();
    jq.fnPressKey();
  }

  //   if (el.matches('[title="mouseMove.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="onChange.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="imgLoad.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="imgFailLoad.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="formSubmit.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="change.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="mouseOver.md"]')) {
  //     js.
  //     jq.
  //   }

  //   if (el.matches('[title="checked.md"]')) {
  //     js.
  //     jq.
  //   }
  //   if (el.matches('[title="eventTarget.md"]')) {
  //     js.
  //     jq.
  //   }
}