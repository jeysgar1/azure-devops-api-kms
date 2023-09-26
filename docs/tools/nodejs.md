[Node.js]: https://img.shields.io/badge/Node.JS-333?style=for-the-badge&logo=nodedotjs&logoColor=black&labelColor=green
[Node-url]: https://nodejs.org/es

Node.js es un entorno de ejecución de un solo hilo, de código abierto y multiplataforma para crear aplicaciones de red y 
del lado del servidor rápidas y escalables. Se ejecuta en el motor de ejecución de JavaScript V8, y utiliza una arquitectura de
E/S basada en eventos y sin bloqueos, lo que la hace eficiente y adecuada para aplicaciones en tiempo real.

Node.js utiliza la arquitectura <b>Single Threaded Event Loop</b> para manejar <b>múltiples clientes</b> al mismo tiempo. 
Para entender en qué se diferencia de otros tiempos de ejecución, tenemos que entender cómo se manejan 
los clientes concurrentes multihilo en lenguajes como Java.

En un modelo de <b>solicitud-respuesta multihilo</b>, <b>varios clientes envían una solicitud</b> y el <b>servidor 
procesa cada una de ellas antes de devolver la respuesta</b>. Sin embargo, se utilizan <b>múltiples hilos para procesar 
las llamadas concurrentes</b>. Estos hilos se definen en un <b>pool de hilos</b>, y cada vez que llega una petición, 
se <b>asigna un hilo individual para manejarla</b>.

Sin embargo, en Node.js se define una arquitectura diferente. Cuando se recibe una solicitud en Node.js, 
se crea un evento que se coloca en el <b>bucle de eventos</b>. El <b>bucle de eventos</b> es un mecanismo que permite a Node.js 
manejar eventos de manera eficiente. Cada evento en el bucle de eventos se ejecuta en <b>orden secuencial</b> 
y se <b>procesa de manera asíncrona</b>.