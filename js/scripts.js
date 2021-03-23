$(document).ready(function () {
  $("button#green").click(function () {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function () {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function () {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#lightMode").click(function () {
    $("body").removeClass();
    $("body").addClass("lightMode-background");
  });
  $("button#darkMode").click(function () {
    $("body").removeClass();
    $("body").addClass("darkMode-background");
  });
});
