


$(() => {

  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
  document.getElementById("icon-delete").onclick = function() {
    document.getElementById("delete").submit();
}
})
