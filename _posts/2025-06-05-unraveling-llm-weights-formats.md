---
title: Unraveling LLM Weights Formats, A Comprehensive Guide
tags: [React, JavaScript, Web Development]
author: Víctor Quilón Ranera
style: border
color: primary
description: Explore the diverse formats of LLM model weights, their structures, and how they impact performance and compatibility in machine learning applications.
---

Existen diversos formatos de archivo para almacenar los pesos de modelos de lenguaje de gran tamaño (LLM), cada uno con su propia historia, creadores y frameworks asociados. A continuación, se detallan los principales formatos, sus orígenes y las implicaciones de su uso en diferentes arquitecturas.

---

## 🧠 Formatos de archivo para pesos de LLM: historia, creadores y frameworks

### 1. **PyTorch `.pt` / `.bin`**

* **Origen**: Formato nativo de PyTorch, ampliamente utilizado para guardar modelos en su forma original.
* **Creadores**: Desarrollado por los creadores de PyTorch en Facebook AI Research.
* **Framework asociado**: PyTorch.
* **Características**:

  * Almacena modelos en precisión completa (float32 o float16).
  * Utilizado principalmente para entrenamiento y fine-tuning.
  * No está optimizado para inferencia eficiente en dispositivos con recursos limitados.([arxiv.org][1])

### 2. **SafeTensors `.safetensors`**

* **Origen**: Introducido como una alternativa segura y eficiente a los archivos `.pt` de PyTorch.
* **Creadores**: Desarrollado por Hugging Face.
* **Framework asociado**: Compatible con PyTorch y otros frameworks.
* **Características**:

  * Formato binario seguro que evita la ejecución de código arbitrario al cargar modelos.
  * Más rápido y seguro que los archivos `.pt`.
  * Soporta múltiples tipos de datos y es adecuado para compartir modelos de manera segura.

### 3. **GGUF (GGML Universal File)**

* **Origen**: Introducido en agosto de 2023 por el proyecto llama.cpp.
* **Creadores**: Georgi Gerganov y colaboradores del proyecto llama.cpp.
* **Framework asociado**: llama.cpp y GGML.
* **Características**:

  * Formato binario que almacena tensores y metadatos en un solo archivo.
  * Diseñado para una carga y almacenamiento rápidos de datos de modelos.
  * Soporta múltiples tipos de cuantización (de 2 a 8 bits) y formatos de punto flotante (float32, float16, bfloat16).
  * Incluye información necesaria para ejecutar modelos tipo GPT, como vocabulario del tokenizador, longitud del contexto e información de tensores.
  * Compatible con múltiples arquitecturas de modelos, incluyendo LLaMA, Mistral, BERT, GPT-2, entre otros. ([en.wikipedia.org][2], [en.wikipedia.org][3])

### 4. **EXL2**

* **Origen**: Desarrollado como una evolución de formatos anteriores como GPTQ y AWQ, centrado en la eficiencia de inferencia.
* **Creadores**: Comunidad de desarrolladores de modelos locales, como LoneStriker y TheBloke.
* **Framework asociado**: Utilizado con herramientas como exllamav2.
* **Características**:

  * Optimizado para inferencia en GPU, especialmente en configuraciones multi-GPU.
  * Ofrece velocidades de inferencia superiores en comparación con otros formatos, alcanzando hasta 15-20 tokens por segundo en modelos de 70B parámetros.
  * Soporta diferentes niveles de cuantización, como 2.4bpw (bits por peso) hasta 6.0bpw.
  * Requiere menos VRAM en comparación con otros formatos para modelos del mismo tamaño. ([reddit.com][4], [reddit.com][5])

---

## ⚙️ Rendimiento en diferentes arquitecturas y sus implicaciones

El rendimiento de los modelos LLM puede variar significativamente según el formato de archivo utilizado y la arquitectura del hardware en el que se ejecutan.

### **CPU vs. GPU**

* **GGUF**:

  * Diseñado para ser eficiente en CPU, aprovechando extensiones como AVX, AVX2, AVX-512 en x86 y Neon en ARM.
  * Soporta múltiples backends, incluyendo CUDA, Metal, Vulkan y SYCL, lo que permite su ejecución en diversas plataformas. ([en.wikipedia.org][2])

* **EXL2**:

  * Optimizado para ejecución en GPU, especialmente en configuraciones multi-GPU.
  * Ofrece velocidades de inferencia superiores en comparación con GGUF en entornos con múltiples GPUs. ([reddit.com][4])

### **Uso de memoria y velocidad de inferencia**

* **GGUF**:

  * Ofrece un equilibrio entre uso de memoria y velocidad de inferencia, siendo adecuado para dispositivos con recursos limitados.
  * La velocidad de inferencia puede ser menor en comparación con EXL2 en configuraciones de GPU de alto rendimiento.([reddit.com][4])

* **EXL2**:

  * Requiere menos VRAM para modelos grandes, permitiendo la ejecución de modelos de hasta 70B parámetros en GPUs con 24 GB de VRAM.
  * Ofrece velocidades de inferencia más altas, especialmente en configuraciones multi-GPU.&#x20;

---

## 🧩 Implicaciones prácticas

* **Compatibilidad**: La elección del formato puede afectar la compatibilidad con diferentes herramientas y frameworks. Por ejemplo, GGUF es ampliamente compatible con llama.cpp, mientras que EXL2 se utiliza con herramientas específicas como exllamav2.([reddit.com][5])

* **Facilidad de uso**: Formatos como SafeTensors ofrecen ventajas en términos de seguridad y facilidad de uso, evitando la ejecución de código arbitrario al cargar modelos.([juicefs.medium.com][6])

* **Desempeño**: La elección del formato puede tener un impacto significativo en el desempeño del modelo, especialmente en términos de velocidad de inferencia y uso de memoria.

---

En resumen, la elección del formato de archivo para almacenar los pesos de modelos LLM depende de múltiples factores, incluyendo el entorno de ejecución, los recursos disponibles y las necesidades específicas de rendimiento y compatibilidad.

---

## 🧩 ONNX (Open Neural Network Exchange)

### 📜 Historia y creadores

ONNX fue creado en 2017 por Facebook y Microsoft como un formato abierto para representar modelos de aprendizaje automático. Su objetivo principal es facilitar la interoperabilidad entre diferentes frameworks de IA, permitiendo a los desarrolladores mover modelos entre herramientas como PyTorch, TensorFlow, Caffe2 y MXNet sin necesidad de reentrenarlos .([en.wikipedia.org][1], [aijobs.net][2])

### 🔧 Frameworks asociados

ONNX es compatible con una amplia gama de frameworks y herramientas de IA, incluyendo PyTorch, TensorFlow, Caffe2, MXNet y OpenCV. Además, cuenta con su propio motor de inferencia, ONNX Runtime, que permite ejecutar modelos en diversas plataformas y dispositivos .([de.wikipedia.org][3], [youtube.com][4])

### ⚙️ Rendimiento en diferentes arquitecturas

* **CPU y GPU**: ONNX Runtime está optimizado para ejecutarse tanto en CPU como en GPU, aprovechando las capacidades de hardware para mejorar el rendimiento.

* **Limitaciones con LLMs**: Aunque ONNX es eficaz para una amplia variedad de modelos, ha enfrentado desafíos al trabajar con LLMs debido a su complejidad y tamaño. Algunos usuarios han señalado que ONNX no ha logrado el mismo nivel de éxito en el ámbito de los LLMs en comparación con formatos específicos como GGUF .([reddit.com][5])

---

## 🔧 MLC (Machine Learning Compilation)

### 📜 Historia y creadores

MLC LLM es un compilador de aprendizaje automático y motor de despliegue de alto rendimiento para modelos de lenguaje de gran tamaño. Su misión es permitir que cualquier persona desarrolle, optimice y despliegue modelos de IA de forma nativa en diversas plataformas .([github.com][6])

### 🔧 Frameworks asociados

MLC LLM se integra con MLCEngine, un motor de inferencia de alto rendimiento compatible con múltiples plataformas, incluyendo REST, Python, JavaScript, iOS y Android. Esto permite una implementación flexible y eficiente de modelos LLM en una variedad de dispositivos y entornos .([llm.mlc.ai][7])

### ⚙️ Rendimiento en diferentes arquitecturas

* **Dispositivos móviles y edge**: MLC está diseñado para optimizar la ejecución de modelos LLM en dispositivos con recursos limitados, como smartphones y dispositivos edge, mediante técnicas de compilación que reducen el uso de memoria y mejoran la velocidad de inferencia .([cmu.edu][8])

* **Compatibilidad multiplataforma**: Gracias a su enfoque en la compilación y optimización, MLC permite ejecutar modelos LLM de forma eficiente en una amplia gama de plataformas, desde servidores hasta dispositivos móviles.

---

## 🧠 Comparativa y consideraciones

| Característica          | ONNX                                             | MLC LLM                                             |
| ----------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **Creadores**           | Facebook y Microsoft                             | Comunidad de MLC LLM                                |
| **Año de creación**     | 2017                                             | N/D                                                 |
| **Enfoque principal**   | Interoperabilidad entre frameworks               | Compilación y despliegue eficiente de LLMs          |
| **Compatibilidad**      | Amplia (PyTorch, TensorFlow, etc.)               | Multiplataforma (REST, Python, iOS, Android)        |
| **Rendimiento en LLMs** | Limitado en comparación con formatos específicos | Optimizado para dispositivos con recursos limitados |
| **Uso de memoria**      | Variable según el modelo y la plataforma         | Eficiente mediante técnicas de compilación          |

---

En resumen, **ONNX** es una solución robusta para la interoperabilidad de modelos de aprendizaje automático entre diferentes frameworks, pero puede enfrentar limitaciones al trabajar con LLMs debido a su tamaño y complejidad. Por otro lado, **MLC LLM** ofrece una alternativa enfocada en la compilación y despliegue eficiente de modelos LLM en una variedad de plataformas, incluyendo dispositivos con recursos limitados. La elección entre ambos dependerá de las necesidades específicas del proyecto, considerando factores como la plataforma de destino, los recursos disponibles y los requisitos de rendimiento.

[1]: https://arxiv.org/abs/2106.09685?utm_source=chatgpt.com "LoRA: Low-Rank Adaptation of Large Language Models"
[2]: https://en.wikipedia.org/wiki/Llama.cpp?utm_source=chatgpt.com "Llama.cpp"
[3]: https://en.wikipedia.org/wiki/Llama_%28language_model%29?utm_source=chatgpt.com "Llama (language model)"
[4]: https://www.reddit.com/r/LocalLLaMA/comments/1ayd4xr?utm_source=chatgpt.com "For those who don't know what different model formats (GGUF, GPTQ, AWQ, EXL2, etc.) mean ↓"
[5]: https://www.reddit.com/r/LocalLLaMA/comments/17w57eu?utm_source=chatgpt.com "🐺🐦‍⬛ LLM Format Comparison/Benchmark: 70B GGUF vs. EXL2 (and AWQ)"
[6]: https://juicefs.medium.com/llm-storage-performance-cost-and-multi-cloud-architecture-96be5e495dc8?utm_source=chatgpt.com "LLM Storage: Performance, Cost, and Multi-Cloud Architecture | by JuiceFS | Medium"


[1]: https://en.wikipedia.org/wiki/Open_Neural_Network_Exchange?utm_source=chatgpt.com "Open Neural Network Exchange"
[2]: https://aijobs.net/insights/onnx-explained/?utm_source=chatgpt.com "ONNX explained - aijobs.net"
[3]: https://de.wikipedia.org/wiki/ONNX?utm_source=chatgpt.com "ONNX"
[4]: https://www.youtube.com/watch?v=jrIJT01E8Xw&utm_source=chatgpt.com "Large Language Model inference with ONNX Runtime (Kunal ..."
[5]: https://www.reddit.com/r/LocalLLaMA/comments/1h54n1u/why_didnt_onnx_succeed_in_the_llm_world/?utm_source=chatgpt.com "Why didn't ONNX succeed in the LLM world? : r/LocalLLaMA - Reddit"
[6]: https://github.com/mlc-ai/mlc-llm?utm_source=chatgpt.com "mlc-ai/mlc-llm: Universal LLM Deployment Engine with ML ... - GitHub"
[7]: https://llm.mlc.ai/?utm_source=chatgpt.com "MLC LLM | Home"
[8]: https://www.cmu.edu/flame/research/2024/machine-learning-compilation-for-large-language-models.html?utm_source=chatgpt.com "Machine Learning Compilation for Large Language Models (MLC ..."
