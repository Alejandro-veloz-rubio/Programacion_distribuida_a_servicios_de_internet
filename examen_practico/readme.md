En el siguiente examen practico se tiene como objetivo utilizar los conocimientos para
simular un inicio de sesion, un registro de un nuevo usuario y por supuesto capacidad de
agregar peliculas cada una de estas tareas a cumplir tambien deberan de pasar los datos
a una base de datos.

Una ves conocido el proposito general de este examen lo que se necesita es lo siguiente 
para que pueda funcionar:

Instalar lo npm siguientes:
>express(nos permitira simular un servidor que nos dara respuesta y gestionara los registros a
la base de datos)
>md5 (para encriptar las contraseñas de los usuarios tanto en inicio de sesion como en el registro)
>nodemon (nos permite correr el servidor, con la ayuda de que si hay algun combio en el codigo no habra necesidad de parar la ejecucion y volverla a iniciar)
>dotenv(para crear variables desde archivos .env)
>body-parser(permitira a express leer el cuerpo de una vista.pug y luego analizarlo en un objeto JSON)
>mysql(nos permite establecer conexion con nuestra base de datos asi como tambien hacer gestiones con ella como agregar, eliminar, buscar registros desde un entorno de javascript)
>pug( el cual es un tipo de formato a html pero que usa motores de vista y donde las etiquetas como "<html>" no son necesarias y facilita la creacion de vistas)

Antes de crear archivos necesarios para el funcionamiento de nuesto appweb.js o server.js
necesitamos crear una base de datos llamada movies

y crear tablas:

>una tabla que registrara los usuarios que iniciaron sesion
>una tabla que registrara los usuarios que se acaban de registrar 
>una tabla para las peliculas nuevas registradas

Ya teniendo los paquetes necesarios intalados creamos los siguientes archivos

>server.js o appweb.js(sera nuestro servidor el cual tendra la tarea de direccionarnos a las diferentes vistas creadas que solicitemos y de agregar los registros requeridos por uno como usuario a la base de datos)
>un package.json(nos permitira conocer los npm instalados asi como iniciar nodemon en el apartado de scripts donde se pondra la siguiente linea "exam: nodemon server.js" una vez que esta para correrlo en terminal tecleamos "npm run exam")
>un archivo .env(el cual en este caso tendra nuestro puerto habilitado que sera el 3030)
>una carpeta DB(la cual contendra un archvio.js que establecera solamente la conexion con la base de datos que hemos creado)
>una carpeta lib(tendra un archivo.js para poder habilitar el puerto con el archivo.env)
>una carpeta views(esta contendra archivos.pug que traducido seran como archivos html)
>>archivos en la carpeta views:
>>home.pug(el cual nos mostrara algunas peliculas asi como su titulo, sinopsis y fecha de estreno y botones para iniciar sesion y registrarse en caso de ser nuevo usuario)
>>sign_in.pug(vista donde el usuario llenara un formulario para iniciar sesion con correo/username, contraseña y que aparte se registrara en la base de datos)
>>sign_up.pug(vista donde el usuario llenara un formulario para registrarse con correo, username, contraseña y que aparte se registrara en la base de datos)
>>home_user.pug(una ves que se inicio sesion o se registro se redireccionara a esta pagina que pondra el nombre de usuario en la parte de arriba y un boton con la capacidad de añadir peliculas)
>>add_movies.pug(en esta ventana se llenara otro formulario el cual se añadiran peliculas y tambien iran a una base de datos)
>>sucessadd.pug(nos confirma que el registro de la nueva pelicula es correcto)
>>error.pug(nos confirmara si hay algun error en alguna de las operaciones ya sea registro de usuarios o peliculas)

el archivo gitignore es opcional 