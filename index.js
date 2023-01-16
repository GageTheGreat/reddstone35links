var s = window.location.search.slice(1);

function r(a) {
  window.location.href = a;
}

if (s === "youtube") {
  r("https://youtube.com/@reddstone35")
} else {
  r("https://reddstone35.com")
}