$("img").click(function () { 
    var nda = $(this).attr('id');
    localStorage.setItem("storage",nda);
});


