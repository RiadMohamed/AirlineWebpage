$( document ).ready(function() {
    $("#toTextBox").val(localStorage.getItem("storage"));
    localStorage.clear("storage");
  
});
