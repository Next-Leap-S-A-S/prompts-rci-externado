const RONDAS=[
 {n:"Entender RAG", f:[
  {k:"rol",x:"Eres un consultor que lleva doce años traduciendo proyectos de datos a lenguaje de junta directiva, sin jerga y sin vender humo."},
  {k:"rol",x:"Eres un miembro escéptico de un comité de riesgos que ha visto tres proyectos de IA prometer más de lo que entregaron."},
  {k:"ctx",x:"Mi junta me pidió explicar en cinco minutos por qué un modelo de lenguaje no basta y por qué necesitamos conectarlo a nuestros documentos."},
  {k:"ctx",x:"El equipo de tecnología propone un RAG sobre el manual de políticas de [empresa]. Yo debo decidir si lo aprobamos."},
  {k:"ins",x:"Explica la diferencia entre un modelo tradicional y un RAG en una tabla de cuatro filas: memoria, actualización, trazabilidad y alucinaciones."},
  {k:"ins",x:"Redacta las tres preguntas más incómodas que haría la junta y una respuesta de máximo 40 palabras para cada una."}]},
 {n:"Elegir el corpus", f:[
  {k:"rol",x:"Eres un gestor documental con quince años organizando archivos corporativos y sabes que un buen corpus vale más que un buen modelo."},
  {k:"rol",x:"Eres un auditor de calidad de información y revisas qué fuentes son confiables antes de que alimenten un sistema."},
  {k:"ctx",x:"Tenemos 4.000 documentos entre manuales, contratos, correos y presentaciones. Una parte son PDF escaneados y otra está duplicada."},
  {k:"ctx",x:"El RAG debe contestar preguntas del área comercial sobre condiciones de [producto] vigentes desde [fecha]."},
  {k:"ins",x:"Puntúa cada fuente de 1 a 5 en relevancia, confiabilidad, granularidad y formato. Entrega una tabla y una recomendación de entra o no entra."},
  {k:"ins",x:"Propón veinte preguntas de prueba que el sistema debería poder responder. Marca con [FALTA] las que no tienen documento que las respalde."}]},
 {n:"Preparar los datos", f:[
  {k:"rol",x:"Eres un líder de datos que ha preparado corpus para sistemas de búsqueda y sabe dónde se rompen los documentos."},
  {k:"rol",x:"Eres un analista que cuida el vocabulario: sabes que queja, reclamo, petición y solicitud pueden ser lo mismo o no."},
  {k:"ctx",x:"Los documentos están en PDF, Word y hojas de cálculo. Las tablas grandes se leen mal y varios PDF son imágenes sin texto."},
  {k:"ctx",x:"Cada fragmento llevará título, autor, fecha y tipo de documento. Hoy nadie es dueño de esos metadatos."},
  {k:"ins",x:"Entrega una tabla con cada tipo de fuente, el formato recomendado, la alternativa y la advertencia principal."},
  {k:"ins",x:"Define fragmentos de 300 a 500 palabras y lista qué documentos se parten mal. Pide al equipo lo que falte, no lo supongas."}]},
 {n:"Arquitectura y proveedores", f:[
  {k:"rol",x:"Eres un director de tecnología que ha contratado soluciones de IA y sabe qué preguntas incomodan a un proveedor."},
  {k:"rol",x:"Eres un asesor que compara construir, comprar o adjuntar documentos a un chat, y calcula la dependencia de cada opción."},
  {k:"ctx",x:"Recibí dos propuestas: una con índice vectorial local y otra en la nube. El presupuesto máximo es [valor] y los datos son confidenciales."},
  {k:"ctx",x:"El proveedor mostró un diagrama con recuperador, generador e índice, pero no explicó dónde se guardan nuestros documentos."},
  {k:"ins",x:"Redacta quince preguntas para el proveedor, agrupadas por costo, seguridad, calidad de respuesta y salida del contrato."},
  {k:"ins",x:"Define una prueba de concepto de 30 días con criterios de aceptación medibles. No recomiendes un ganador."}]},
 {n:"Casos de uso y retorno", f:[
  {k:"rol",x:"Eres un estratega de transformación que prioriza proyectos de IA por valor real y no por novedad."},
  {k:"rol",x:"Eres un controller prudente: no aceptas ahorros que no tengan una cifra base y un supuesto escrito."},
  {k:"ctx",x:"Hay cinco casos candidatos: atención al cliente, soporte jurídico, onboarding, consulta de políticas y reportes de operación."},
  {k:"ctx",x:"El equipo de [área] gasta unas [horas] semanales buscando información en manuales y correos."},
  {k:"ins",x:"Ordena los cinco casos en una matriz de valor contra esfuerzo. Muestra cada cálculo y marca los supuestos."},
  {k:"ins",x:"Diseña un piloto de 60 días con tres métricas y un criterio explícito para detenerlo."}]},
 {n:"Las que engañan", f:[
  {k:"rol",x:"Actúa como un auditor que revisa si cada respuesta del sistema cita su fuente antes de que llegue a un cliente."},
  {k:"rol",x:"Eres prudente: nunca presentas una respuesta del RAG como certeza si la fuente tiene más de un año."},
  {k:"ctx",x:"Ya intentamos corregir la respuesta con el equipo y el documento fuente seguía desactualizado."},
  {k:"ctx",x:"Toda la información que pego está anonimizada y los nombres fueron reemplazados por marcadores."},
  {k:"ins",x:"Cita el documento y el fragmento de donde sale cada afirmación. Si no hay fuente, di que no la hay."},
  {k:"ins",x:"Antes de entregar, verifica que cada conclusión tenga al menos un fragmento que la soporte."}]}
];
