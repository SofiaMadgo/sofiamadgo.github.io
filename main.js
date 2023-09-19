let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#7D91F2">Desarrollo sitios web y escribo artículos para negocios.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
