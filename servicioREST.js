var port = process.env.PORT || 4080;
var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var server = app.listen(port);
var io = require('socket.io').listen(server);



//Rutas
app.use('/', express.static(__dirname + '/html/'));

// POST method route
app.post('/', function (req, res) {
  var jsondata={a:90,b:29,c:"hola c"}
  console.log("se ha hecho una solicitud post con un parametro de valor:  "+req.body.parametro1);
  res.json(jsondata);
});

app.get("/", function (req, res) {
  console.log("se ha realizado un metodo get con parametro : "+req.query.parametro1);
      res.sendFile(__dirname + '/html/index.html');
});



//comunicacion con socket
io.on('connection', function (socket) {
  socket.on('prueba',function(mensaje) {
    console.log(mensaje);
  });
});

//ejecucion procedimiento almacenado utilizando tedious



//Base de datos

//var Configuracion_Base= require("./config.json");
//var TYPES = require('tedious').TYPES;
//var Conexion_BD = require('tedious').Connection;
var UNIDADES=[];

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var Configuracion_Base_saho=require('./saho_config.json');
var TYPES = require('tedious').TYPES;
var Conexion_BD = require('tedious').Connection;
function cargar_nombre_unidades(data,per)
{
  var Base_de_Datos= new Conexion_BD(Configuracion_Base_saho);
  var Servicio='<option  disabled selected>Clinicas</option>';
  //console.log(data);
  Base_de_Datos.on('connect', function(err)
  {
    if (err) {console.log(err);}
    else
    {
        //console.log("Exito al conectar");

        var cadena ="sp_servicio_tipo_unidad @numero";

            request = new Request(cadena,function(err, rowcount) { if (err) {console.log("Error en el request"+err);} if (rowcount) {

                }
                //console.log(rowcount);
                Base_de_Datos.close();
            });//fin del request
            request.addParameter('numero',TYPES.Int,data);

            request.on('doneProc',function (rowCount, more, rows) {
                Servicio+=""
                //console.log("El procedimiento ha terminado ");
            });
            request.on('row',function(columns) {
              var id=columns[0].value.toString();
              var nombre_clinica=columns[1].value.toString().replace(/clinica de la/gi,'').replace(/clinica del/gi,'').replace(/clinica de/gi,'').replace(/clinica/gi,'');;

                UNIDADES[id]=per+"  "+nombre_clinica;
                console.log(UNIDADES[id]);
            });

            Base_de_Datos.execSql(request);

    }
  });//fin de connect
  Base_de_Datos.on('error',function(err) {
    console.log("se ha llamado a la funcion error :  \n"+err);
    Base_de_Datos= new Conexion_BD(Configuracion_Base);
  });
}

cargar_nombre_unidades(1303,"Adultos");
