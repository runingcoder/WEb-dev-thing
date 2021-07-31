import './style6.css'
import * as THREE from './three'
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js'
import * as dat from './dat.gui'

//loading

const textureLoader =new THREE.TextureLoader()

const normalTexture = textureLoader.load('/textures/Normalmap.jpg')

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.SphereBufferGeometry( .5, 64, 64 );

// Materials

const material = new THREE.MeshStandardMaterial()
material.metalness=0.7
material.roughness = 0.2
material.normalMap = normalTexture;
//material.wireframe = True
//material.flatshading = True


material.color = new THREE.Color(0xFF00FF)

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

// Lights

//const pointLight = new THREE.PointLight(0x800080, .1)
//pointLight.position.x = 2
//pointLight.position.y = 3
//pointLight.position.z = 4
//scene.add(pointLight)

//Light 2
const pointLight2 = new THREE.PointLight(0xed8f32, 2)
pointLight2.position.set(-18.5,-19.5,-28.4)
pointLight2.intensity = 2.9
scene.add(pointLight2)

const light1 =gui.addFolder('Light1')

light1.add(pointLight2.position, 'y').min(-30).max(30).step(0.1)
light1.add(pointLight2.position, 'x').min(-30).max(30).step(0.1)
light1.add(pointLight2.position, 'z').min(-30).max(30).step(0.1)
light1.add(pointLight2, 'intensity').min(0).max(30).step(0.1)

const light3Color = {
color: 0xf07f0d
}
light1.addColor(light3Color, 'color')
.onChange(() => {
 pointLight2.color.set(light3Color.color)


})

//const pointLightHelper = new THREE.PointLightHelper(pointLight2, 1)
//scene.add(pointLightHelper)

//Light 3

const pointLight3 = new THREE.PointLight(0x3943f0 , 2)
pointLight3.position.set(3,1.7,-1.3)
pointLight3.intensity = 2.9
scene.add(pointLight3)

const light2 =gui.addFolder('Light2')

light2.add(pointLight3.position, 'y').min(-30).max(30).step(0.1)
light2.add(pointLight3.position, 'x').min(-30).max(30).step(0.1)
light2.add(pointLight3.position, 'z').min(-30).max(30).step(0.1)
light2.add(pointLight3, 'intensity').min(0).max(30).step(0.1)

const light2Color = {
color: 0x53ffa9
}
light2.addColor(light2Color, 'color')
.onChange(() => {
 pointLight3.color.set(light2Color.color)


})
//
//const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 1)
//scene.add(pointLightHelper2)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */



const clock = new THREE.Clock()

const tick = () =>
{


    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()