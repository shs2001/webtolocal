// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$("#uploadForm").submit(function (e) { 
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });
});

var url = "http://10.106.117.26/web2local/process.php";


ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {

    if (ajax.status) {

        if (ajax.status == 200){
            //To do tasks if any, when upload is completed
            console.log(ajax.status);
            console.log(ajax.readyState);
        }
    }
}
ajax.open("POST", url, true);
ajax.send();
//ajax.send is for uploading form data.