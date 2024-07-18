//Importer Three.js
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );

/******************* CUBE ******************/
/* 
//Initialiser scène
const scene = new THREE.Scene();
//Initialiser caméra : angle + aspect ractio + min (objet trop proche pas affiché) + max 
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Renderer (Rendu 3D en 2D -> gère les pixels) = API WEBGL. 
const renderer = new THREE.WebGLRenderer();
//Taille du renderer, ici = fenêtre (<canvas>)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//création du rectangle
const geometry = new THREE.BoxGeometry( 3, 1, 1 );
//création du matérial
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// mesh = sommets + arrêtes + faces + matériau (dans three)
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );

*/