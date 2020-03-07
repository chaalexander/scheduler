
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];


var displaydate = () =>{

    var today = moment().format("ddd,MMMM do YYYY");
    $("#currentDay").text(today);

}

var creatTimeBloks = () => {



    for (let i = 0; i < hours.length; i++){

        var hourBock= " " +
        "<div class= "input-group mb-3">" +
        "<div class= "input-group-prepend">" +
        <span class= "input-group-text">09</span> +
        "</div>" +
        "<input type="text" class="form-control">" +
        "<div class= "input-group-append">" +
        ",button class ="btn btn-primary"><i class="fa fa-save"></i></button>" +
        "</div>" +
        "</div>"
    }


    $("#timeblocks").html(

    )
}
$(document).ready(function(){


displaydate();

creatTimeBloks();




})