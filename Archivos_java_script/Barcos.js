function traerInformacionBarcos(){
    $.ajax({
        url:"http://localhost:8080/api/Barcos/todas",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBarcos(respuesta);
        }
    });
}

function pintarRespuestaBarcos(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].model+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionBarcos(){
    let var3 = {
        brand:$("#Bbrand").val(),
        name:$("#name").val(),
        model:$("#Bmodel").val(),
        description:$("#Bdescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://localhost:8080/api/Barcos/guardar",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo el Barco correctamente");
            alert("Se guardo el Barco correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se pudo guardar el Barco");
    
    
        }
        });

}