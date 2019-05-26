$( document ).ready(function() {
    $("#toTextBox").val(localStorage.getItem("storage"));
    localStorage.clear("storage");
    var d = new Date();
    var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();

    alert(strDate);

    $('selector').datepicker('setDate', null);
    $("#departureDate").attr("min", strDate);
});