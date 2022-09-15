# What is the plan for?
Okay, first, we need to clarify what is the purprose of this post. I was struggling with the use of re2, an NFA implementation for Regular Expressions.

Google release a NFA Regular Expresion version in C++. All fine isnt it?, NO. The Readme.md is no useful at all, because if you are a Windows user, or you work in a company with windows laptops, you waste your time reading a tons of pages with no results.

Ok, so after THAT, we begin to BUILD and INSTALL RE2 in WINDOWS FULL ULTIMATE REAL NO-FAKE FREE 2.23.123.123 VERSION.

Primero echamos un vistazo al repositorio de PIP que tienen del paquete para instalar google-re2, y observamos esto al final de la descripcion.

```
Known issues with regard to building the C++ extension:

* Building requires RE2 to be installed on your system.
On Debian, for example, install the libre2-dev package.
* Building requires pybind11 to be installed on your system OR venv.
On Debian, for example, install the pybind11-dev package.
For a venv, install the pybind11 package from PyPI.
* Building on macOS has not been tested yet and will possibly fail.
* Building on Windows has not been tested yet and will probably fail.
```

Bien, ya nos estan avisando que no tienen mucho aprecio por lo que viene siendo la compañia entera de Microsoft, y no los culpo, las herramientas disponibles para poder trabajar con C++ para usuarios no acostumbrados son horrorosas. Paginas y paginas de documentacion, multitud de herramientas, diferentes formas de hacerlo, y ojo que no te falte uno de los miles de paquetes, librerias e instaladores que se necesitan, que si Microsoft Visual Studio 14,15 19, Compiler, GCC, CC, JJ, JVM...

De un programador que utiliza principalmente Python, o Javscript... esto es muy complejo, ahora agradezco los environments con los que trabaja Python y la facilidad de conda y PIP.

Pero bueno comentarios a parte, despuesd e leer diferentes Forks del propio repositorio de google-re2, y de un wrapper para python de facebook, la conclusion es que se necesita lo siguiente.

## Easy Mode (Unix)
Si quieres ensuciar tu unix system
- `sudo apt-get install build-essential cmake ninja-build python3-dev cython3 pybind11-dev libre2-dev`
Si tienes un venv (Virtual environment, o conda)
- `pip install pybind11 cmake cython`

# ULTIMATE REAL DIFFICUL Mode (Windows to the hell)

A rezar:
- Primero descargaos los Sources de VCPKG https://github.com/microsoft/vcpkg/archive/refs/tags/2022.02.23.zip
- Despues ubicaos dentro de la carpeta y ejecutad
- `.\vcpkg.exe install re2:x64-windows pybind11:x64-windows`

Bueno como habeis comprobado es imposible, seguramente salga algun error de no ser asi, enohorabuena, ya tienes re2 y pybind11 instalado en tu sistema, pero dentro del package manager.

Con esto ya cumplimos los requisitos de obtener el Python Wrapper para hacer la compilacion con la version de Google RE2.

Ahora habra que hacer un clone de la version Abseil que contiene el instaldor para python y las librerias extra para poder compilarlo e instalarlo con python.

`git clone https://github.com/google/re2/git -b abseil`

Una vez hecho esto abrimos un terminal con el environmetn cargado de Visual Studio, esto se puede hacer abriendo el 'VS2015 x86 Native Tools Command Prompt'. Si no aparece al buscar en windows+S, poniendo Native, tendras que instalarlo.

Hay que modificar el BUILD para que permita exportar re2 como una librearia dinamica

windows_dll_library.bzl
```python (bzl)
"""
This is a simple windows_dll_library rule for builing a DLL Windows
that can be depended on by other cc rules.
Example useage:
  windows_dll_library(
      name = "hellolib",
      srcs = [
          "hello-library.cpp",
      ],
      hdrs = ["hello-library.h"],
      # Define COMPILING_DLL to export symbols during compiling the DLL.
      copts = ["/DCOMPILING_DLL"],
  )
"""

load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_import", "cc_library")

def windows_dll_library(
        name,
        srcs = [],
        deps = [],
        hdrs = [],
        visibility = None,
        **kwargs):
    """A simple windows_dll_library rule for builing a DLL Windows."""
    dll_name = name + ".dll"
    import_lib_name = name + "_import_lib"
    import_target_name = name + "_dll_import"

    # Build the shared library
    cc_binary(
        name = dll_name,
        srcs = srcs + hdrs,
        deps = deps,
        linkshared = 1,
        **kwargs
    )

    # Get the import library for the dll
    native.filegroup(
        name = import_lib_name,
        srcs = [":" + dll_name],
        output_group = "interface_library",
    )

    # Because we cannot directly depend on cc_binary from other cc rules in deps attribute,
    # we use cc_import as a bridge to depend on the dll.
    cc_import(
        name = import_target_name,
        interface_library = ":" + import_lib_name,
        shared_library = ":" + dll_name,
    )

    # Create a new cc_library to also include the headers needed for the shared library
    cc_library(
        name = name,
        hdrs = hdrs,
        visibility = visibility,
        deps = deps + [
            ":" + import_target_name,
        ],
        **kwargs
    )

```

BUILD
```Python (Bazel)
# Copyright 2009 The RE2 Authors.  All Rights Reserved.
# Use of this source code is governed by a BSD-style
# license that can be found in the LICENSE file.

# Bazel (http://bazel.io/) BUILD file for RE2.

licenses(["notice"])

exports_files(["LICENSE"])

load("//:windows_dll_library.bzl", "windows_dll_library")

# cc_library(
windows_dll_library(
    name = "re2",
    srcs = [
        "re2/bitmap256.h",
        "re2/bitstate.cc",
        "re2/compile.cc",
        "re2/dfa.cc",
        "re2/filtered_re2.cc",
        "re2/mimics_pcre.cc",
        "re2/nfa.cc",
        "re2/onepass.cc",
        "re2/parse.cc",
        "re2/perl_groups.cc",
        "re2/pod_array.h",
        "re2/prefilter.cc",
        "re2/prefilter.h",
        "re2/prefilter_tree.cc",
        "re2/prefilter_tree.h",
        "re2/prog.cc",
        "re2/prog.h",
        "re2/re2.cc",
        "re2/regexp.cc",
        "re2/regexp.h",
        "re2/set.cc",
        "re2/simplify.cc",
        "re2/sparse_array.h",
        "re2/sparse_set.h",
        "re2/tostring.cc",
        "re2/unicode_casefold.cc",
        "re2/unicode_casefold.h",
        "re2/unicode_groups.cc",
        "re2/unicode_groups.h",
        "re2/walker-inl.h",
        "util/logging.h",
        "util/rune.cc",
        "util/strutil.cc",
        "util/strutil.h",
        "util/utf.h",
    ],
    hdrs = [
        "re2/filtered_re2.h",
        "re2/re2.h",
        "re2/set.h",
    ],
    copts = select({
        "@platforms//os:wasi": [],
        "@platforms//os:windows": [],
        "//conditions:default": ["-pthread"],
    }),
    linkopts = select({
        # macOS doesn't need `-pthread' when linking and it appears that
        # older versions of Clang will warn about the unused command line
        # argument, so just don't pass it.
        "@platforms//os:macos": [],
        "@platforms//os:wasi": [],
        "@platforms//os:windows": [],
        "//conditions:default": ["-pthread"],
    }),
    visibility = ["//visibility:public"],
    deps = [
        "@com_google_absl//absl/base",
        "@com_google_absl//absl/base:core_headers",
        "@com_google_absl//absl/container:fixed_array",
        "@com_google_absl//absl/container:flat_hash_map",
        "@com_google_absl//absl/container:flat_hash_set",
        "@com_google_absl//absl/container:inlined_vector",
        "@com_google_absl//absl/strings",
        "@com_google_absl//absl/strings:str_format",
        "@com_google_absl//absl/synchronization",
        "@com_google_absl//absl/types:optional",
        "@com_google_absl//absl/types:span",
    ],
)

```

Aqui dentro ejecutamos dentro de la carpeta de re2, el comando de bazel para compilarlo con el BUILD ya modificado para poder exportar las librerias necesarias en Windows.

`bazel build :all`


Que podemos hacer, bueno, realmente la meta es poder compilar el proyecto de re2, para tener la ultima version de google-re2, lo que no comprendo que alomejor es porque no entiendo, pero porque no dejan preparado ya por si acaso compilado diferentes versiones para diferentes plataformas, e inclusive instaladores...

Ahora la siguiente prueba es utilizar CMake, el cual parece que lo recomiendan, ya veremos...

- Descargar el instalador de CMake, o los Sources si no quereis instalarlo.
- 