$( document ).ready(function() {
var HOME_URL = window.location.origin;
var pathname = window.location.pathname;


 $(".custom-ss-submit").click(function(){
        var part_no = $("#part_no").val();
        if(part_no == '')
        {
          $("#part_no").css("border","1px solid red")
          return false;
        }else{
          $("#part_no").css("border","1px solid #ced4da")
        }

        var data={"part_no":part_no}

        $.ajax(
        {
        type:'POST',
        contentType: 'application/json;charset=UTF-8',
        data:JSON.stringify(data),
        url: HOME_URL+"/find_part_no",
        success: function(result){
                $(".msg").html("")
               if (result['status'])
               {
                 console.log(result)
                 var msg = '<span style="color:red;font-weight:bold">'+part_no+' <span style="color:#06717f;">is a Invalid Part Number</span></span>'
                 $(".msg").html(msg)
               }else
               {
               console.log(result['id'])
                var msg = '<span style="color:#06717f;font-weight:bold">Quantity is <span style="font-weight:bold;color:#0b8">'+result["quantity"]+'</span> for Part Number <span style="font-weight:bold;color:#0b8">'+result["part_no"]+'</span></span>'
                $(".msg").html(msg)
               }

        }
    });

    })


});// final quote