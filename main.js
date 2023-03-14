const withTransitionBtn = document.getElementById("with-transition-btn");
const withoutTransitionBtn = document.getElementById("without-transition-btn");
const resetBtn = document.getElementById("reset");
const box = document.querySelector(".box");

withTransitionBtn.addEventListener("click", function () {
  if (!document.startViewTransition)
    return alert(
      "Update chrome to 111 or above, require transition API not available"
    );

  document.startViewTransition(() => {
    box.style.width = "100%";
  });
});

withoutTransitionBtn.addEventListener("click", function () {
  box.style.width = "100%";
});

resetBtn.addEventListener("click", function () {
  box.style.width = "200px";
});
