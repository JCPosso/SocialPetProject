# SocialPetProject
 Este es una maqueta front-end de pagina web para adopcion de mascotas.
 ## Casos de uso
 Dentro de la pagina web la interaccion con los distintos elementos de la pagina esta dado si  se identifica con modo usiario o administrador de la siguiente manera:
 * Modo Usiario:
 >- Escribir comentarios sobre la mascota.
 >- Reaccionar.
 >- Anunciar Mascota. 
 * Modo Aministrador:
 >- Eliminar comentarios.
 >- Añadir comentarios.
 >- reaccionar.
 >- Añadir mascota.
 >- Editar mascota.
 >- Eliminar mascota.
 ## Comenzando 🚀
* Clone éste repositorio en su máquina local usando [SocialPetProyect](https://github.com/JCPosso/SocialPetProject.git)- Repositorio
### Pre-requisitos 📋

Git(opcional)
```
¿Como descargar git?

1.- Descargando Git
Para poder utilizar Git en nuestro equipo es importante realizar la descarga del software que contiene todos los comandos para poder gestionarlo.
Como primer paso nos dirigimos a la ruta https://git-scm.com/ para realizar la descarga,dando clic en la imagen del monitor que se encuentra a un costado, el cual contiene la descripción “Download NumeroVersion for windows”

2.- Ejecutando el instalador de git
Una vez descargado, daremos doble clic en el instalador y nos aparecerá la primera pantalla, donde daremos Next(Siguiente)

3.- Configurando ruta de instalación
Nos aparece otra ventana donde indicaremos la ruta donde deseamos guardar los archivos de configuración de Git, nosotros por lo pronto, la dejaremos así, pero puedes elegir la ruta que desees, daremos clic en Next(Siguiente)

4.- Configurando instalación de Git
En la siguiente pantalla nos muestra algunas configuraciones que podemos cambiar, como el editor de texto, si queremos colocar un icono en el escritorio y demás, por lo pronto lo dejaremos así, solo daremos clic en Next(Siguiente)

5.-Comprobando la instalación         
Para comprobar que Git se instaló correctamente solo vamos a Windows -> y escribimos Git, veremos que aparecerán los programas básicos para comenzar a trabajar con Git.
```
### Instalación 🔧
* 1.-Descargue este reposiorio  y abrir la pagina Html , llamada'index.html' en el navegador .
* 2.-Para verificar el funcionamiento de las pruebas  use 'SpectRunner.html' en el navegador.
## Ejecutando las pruebas ⚙️
Para ejecutar los test debe hacer uso de Jasmine y verificar que cada uno de los  contenidos javascript tanto de la pagina como las de las pruebas esten debidamente cargados para que no genere ningun problema al cargar los Script , Por otra parte tambien  cargar los script para usar las distintas librerias Knokout js y Jquery ytilizadas  para que se lean cada una de las pruebas. 
### Pruebas end-to-end 🔩
![](img/p.png)
Casa una de las pruebas se hiciweron para verificar cada uno  de los casus de uso plateados para el proyecto , de este modo se hace una breve explicacion de cada uno de ellos:
```
 describe("when in administrator mode", function () {
        beforeEach(function () {
        });
        it('Should be able to add Pet', function () {
            var initialLength = v.petList().length;
            addNewPet(v, v.petList());
            var newListLength = v.petList().length;
            expect(newListLength).toBe(initialLength + 1);
```
Este , por su parte se realizo para conocer que desde el MV , se pudiera editar una mascota desde el modo administrador
```
        it('Should be able to edit Pet', function () {
            var initialName = v.currentPet().name();
            var finalName = v.setName('otherAgain!');
            expect(initialName).not.toBe(finalName);
        });
```
Comprobar que se pueda editar  una Mascota
```
        it('shoould be able to remove pet', function () {
            removePet(thisNewPet, v.petList());
            expect(pets[1]).not.toBeDefined();
        });
```
Eliminar una mascota sin afectar los contenidos de las demás.
```
        it('shoould be able to remove Comment', function () {
            addNewComent(text, v.currentPet().commentUser());
            removeComment(text, v.currentPet().commentUser());
            expect(v.currentPet().commentUser()[0]).not.toBeDefined();
        });
```
Probar que desde el modo administrador se pueda eliminar los contentarios dell usuario hacia cada mascota
```
    describe("when in User mode", function () {
        it('give Like only once for each pet', function () {
            v.incrementCounter();
            expect(v.currentPet().likes()).not.toBe(2);
        });
    });
```
Comprobar que desde el modo usuario solamente se pueda reaccionar una Vez a cada mascota anunciada en la pagina.
```
    it('shoould be able to add Comment', function () {
        addNewComent(v.acceptVal(),v.currentPet().commentUser());
        expect(v.currentPet().commentUser().length).toBe(1);
    });
```
Comprobar que tanto el usuario como el administrador puedan hacer comentarios sobre cada mascota sin problema.

## Versionado 📌
Se usó [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [Tags del repositorio](https://github.com/JCPosso/SocialPetProject/tags).
Versiones actuales de la libreria :
* (https://github.com/JCPosso/SocialPetProject/releases/tag/v0.1-beta). 

## Autores ✒️

* **Juan Camilo PossoG.** - *Initial work* - [JCPosso](https://github.com/JCPosso)
* Personas que han contribuido al proyecto : [contribuyentes](https://github.com/JCPosso/SocialPetProject/contributors)

## Licencia 📄
Este proyecto está bajo licencia [LICENSE.txt](https://github.com/JCPosso/SocialPetProject/blob/master/LICENSE).
## Referencias
Recursos:
* http://google.github.io/material-design-icons/
* https://material.io/resources/icons/?style=baseline
* https://api.jquery.com/
* https://www.w3schools.com/jquery/
* https://www.w3schools.com/css/
* https://www.w3schools.com/js/
* https://html-css-js.com/css/box-shadow/
