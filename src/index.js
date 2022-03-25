import * as boostrap from 'boostrap';

/**
   * Navbar links active state on scroll
   */
 let navbarlinks = select('#navbar .scrollto', true)
 const navbarlinksActive = () => {
   let position = window.scrollY + 200
   navbarlinks.forEach(navbarlink => {
     if (!navbarlink.hash) return
     let section = select(navbarlink.hash)
     if (!section) return
     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
       navbarlink.classList.add('active')
     } else {
       navbarlink.classList.remove('active')
     }
   })
 }
 window.addEventListener('load', navbarlinksActive)
 onscroll(document, navbarlinksActive)

/*
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xff0000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true,antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(50,50,50);
const material = new THREE.MeshPhongMaterial(0xffffff );
const obj = new THREE.Mesh(geometry,material);
scene.add( obj );

const light = new THREE.PointLight( 0xffffff, 5, 100 );
light.position.set( 0, 0, 70 );
scene.add( light );

camera.position.z = 100;
var x = 0;


function animate() {
  requestAnimationFrame( animate );

  obj.rotation.x += 0.01;
  obj.rotation.y += 0.01;
  obj.rotation.z += 0.01;
  light.position.x = 100*Math.sin(x);
  light.position.y = 100*Math.cos(x);
  x += 0.05;

  renderer.render( scene, camera );
};

*/
