causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});

<script>
  $('.carousel').carousel({
    interval: 3000
  })
</script>