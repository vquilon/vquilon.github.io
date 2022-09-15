# CodeMirror 6
Es un proyecto open-source el cual persigue la idea de tener en la WEB un editor de texto con las mismas caracteristicas de un IDE completo.

Tiene una gran comunidad y hay muchos addons para otorgarle diferentes caracteristicas y diferentes modos o lenguages.

Pero no siempre se ajusta a nuestras necesidades, por eso implementaron una forma de que la comunidad pueda modificar o crear desde 0 un lenguage y poder definir la sintaxis de este.

> Esta basado en la [documentacion oficial de CodeMirror 6](https://codemirror.net/6/examples/lang-package/).

## Plantilla
Primero vamos a comenzar a clonar una plantilla que viene preparada con todo lo necesario para iniciar nuestro language. Para ello ir al [repositorio plantilla](https://github.com/codemirror/lang-example), una vez alli en vez de clonarlo nos dara la opcion de utilizar la plantilla y esto hara que github nos cree nuestro repositorio, dadle un nombre y comenzamos.

Una vez creado seguimos las indicaciones del fichero README.md
```bash
git clone URL_REPOSITORIO
```
### Nombrar nuestro lenguaje/modo
Después con el siguiente comando podemos sustituir `EXAMPLE` por el idioma, en este caso sera `regex`:
```bash
git grep -l "EXAMPLE" | xargs sed -i "" -e "s/EXAMPLE/regex/g"
```
## Parser
Lo primero para definir nuestro lenguaje es utilizar un `parser`, este se encarga de identificar la sintaxis de nuestro lenguaje, pudiendo ver cada palabra clave con diferentes estilos, colores, [auto-identacion](https://codemirror.net/6/docs/ref/#commands.insertNewlineAndIndent), [code folding](https://codemirror.net/6/docs/ref/#fold) y [syntax-aware selection](https://codemirror.net/6/docs/ref/#commands.selectParentSyntax).

Segun la documentacion oficial existen diferentes parsers y formas de definirlos:
> la **Gramatica Lezer** es la que se utilizara de ejemplo
- Gramatica [Lezer](https://lezer.codemirror.net/)
	- Conversor de descripcion declarativa a un parser eficiente.
- Utilizando la forma de [stream parser](https://codemirror.net/6/docs/ref/#stream-parser) de CodeMirror 5 para esta version.
	- Es un tokenizador.
	- Para remarcado basico.
	- No produce arbol sintactico
	- Limitado si se quiere mas que tokenizar
		>Por ej. distingir nombres tipados de nombres de variables)
- Escribiendo un parser completamente custom.
	- Recomendado **UNICAMENTE** como recurso para algunos leguajes como [Markdown](https://github.com/codemirror/lang-markdown), pero implica muchas horas de duro trabajo.

Si se quiere ahondar mas en el entendimiento del parser, en su finalidad, y mejoras de rendimiento, se puede ir a la [documentacion de Lezer](https://lezer.codemirror.net/) para entender un poquito mas las tripas del asunto.
> Se recomienda encarecidamente echar un vistazo a la [guia definida en Lezer](https://lezer.codemirror.net/docs/guide/#writing-a-grammar).

### Definir la gramatica
Para empezar podemos echar un vistazo como esta definida en un lenguaje del repositorio de CodeMirror 6, por ejemplo [javascript](https://github.com/lezer-parser/javascript/blob/main/src/javascript.grammar).
Con esta informacion y la guia de Lezer podemos empezar a editar el fichero `src/syntax.grammar`  de forma que se adapte a nuestro lenguaje, en esta caso usaremos de ejemplo regex.



### Unos pocos metadatos

-   Adjust the metadata in  `src/index.ts`  to work with your new grammar.
    
-   Adjust the grammar tests in  `test/cases.txt`.
    
-   Build (`npm run prepare`) and test (`npm test`).
    
-   Rewrite this readme file.
    
-   Optionally add a license.
    
-   Publish. If you want to use a  `@codemirror/lang-...`  package name, open an  [issue](https://github.com/codemirror/codemirror.next/issues)  to ask for npm publish rights for that name.


