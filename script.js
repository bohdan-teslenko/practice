document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("fixedHeader");
  const transitionStart = 5; // Adjust this value based on when you want the transition to start
  const transitionEnd = 100; // Adjust this value based on when you want the transition to be complete
  const transitionDuration = 0.3; // Adjust this value for the transition duration in seconds

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let opacity = Math.min(
      (scrollPosition - transitionStart) / (transitionEnd - transitionStart),
      1
    );

    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.9})`;
    header.style.border = `none`;
    header.style.transition = `background-color ${transitionDuration}s `;
  });
});
