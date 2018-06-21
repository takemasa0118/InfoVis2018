function main_phong(isovalue)
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var scene = new THREE.Scene();

    screen.init( volume, {
	width: window.innerWidth * 0.8,
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8,, window.innerHeight ] );
    });


    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );


    var material = new THREE.ShaderMaterial ({
   vertexColors: THREE.VertexColors,
   vertexShader: document.getElementById('phong.vert').text,
   fragmentShader: document.getElementById('phong.frag').text,
   uniforms: {
     light_position: { type: 'v3', value: light.position }
   }
 });


    screen.loop();

}
