## Bienvenido al `portfolio` de **Víctor Quilón Ranera**

Echa un vistazo [vquilon.github.io](https://vquilon.github.io/)


## Crea tu propio portfolio estatico
### Conceptos de un sitio estatico
- **Sin bases de datos**, un punto en negativo, realmente no hace falta al ser estatico, pero... en ocasiones es util tener información variable o no visible en determinadas circistancias. Por ello existen otras opciones viables como el uso de Firebase, y la autenticacion y autorizacion del acceso a determinada informacion, cambiando asi el contenido. Por supuesto tirando 100% de Javascript (Sí al final, el navegador de usuario esta cargando la informacion que en un sitio dinamico se genera en el servidor asique se aumenta el tiempo de carga).

- **Edicion a bajo nivel**, es decir, no hay una opcion completa de una herramienta para editar el contenido de forma visual, solo por codigo.

- **Rapido**, a diferencia de un sitio dinamico no tiene necesidad de cargar datos y por ello leer en una base de datos, simplemente carga los ficheros pre-generados.

- **Minimalista**, menos es mas, al ser solo documentos de etiquetas y hojas de estilos, no habra caracteristicas o funcionalidades que no necesites, sencillamente solo los plugins que quieras de Javascript.

### Requisitos
Desarrollo en local:
- Ruby
  - Jekyll
  - bundler

Desarrollo con Github:
- Un repositorio, con tu nombre de usuario y la extension de '`github.io`'. Por ejemplo si tu usuario es mmargo el repositorio a crear deberia ser `mmargo.github.io`.

### Intalacion en local
No es necesario realizar el build en local, ya que Github Pages, ya se encarga de generar el codigo estatico, pero si se quiere realizar un desarrollo en local se necesita tener Ruby
Para realizar la instalacion en local de lo necesario ejecutar
```
sudo apt-get install ruby-full build-essential zlib1g-dev

mkdir ~/.gem
mkdir ~/.gem/ruby
mkdir ~/.gem/ruby/2.5.0

ln -s ~/.gem/ruby/2.5.0 ~/.gem/ruby/ruby
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/.gem/ruby/ruby"' >> ~/.bashrc
echo 'export PATH="$GEM_HOME/bin:$PATH"' >> ~/.bashrc

source ~/.bashrc

gem install jekyll bundler
```
### Prueba un tema
Puedes encontrar temas en diferentes sitios, esto te servira para no partir de 0. Puedes comenzar con plantillas en HTML puro, o plantillas específicas de Jekyll, es mas util esta ultima ya que te permitira la creacion de paginas mas sencillo, ya que estas plantillas estan escritas en su mayor parte en HTML y el contenido que iras agregando nuevo puedes hacer uso de Markdown, como por ejemplo si tienes un blog, cada post seria un plantilla con un estilo y el contenido puede estar en HTML o Markdown.

### Preparar el repo
Al crearlo habra que configurar el repo con Github Pages, simplemente hay que ir a la configuración de tu repositorio y en la pestaña de `Options` bajar hasta ver la cabecera de **GitHub Pages** 

### Algo mas?
Realmente no, Github se encarga del resto, únicamente asegurate de subir todo menos la carpeta `_site` debido a que si lo has generado en local, lo subes en vano, Github ya se encarga de generar esto y exponerlo en el repo.