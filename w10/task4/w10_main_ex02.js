function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var scene = new THREE.Scene();

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var point = new THREE.Vector3(60,60,17);
<<<<<<< HEAD
    var normal = new THREE.Vector3(1,0,4);
=======
    var normal = new THREE.Vector3(0,0,1);
>>>>>>> 5e65dfd6ffc2395b7c1b3044d87b2ecc50385cca
    var surfaces = Isosurfaces( volume, point , normal );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

   
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );
    
  
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('gouraud.vert').text,
        fragmentShader: document.getElementById('gouraud.frag').text,
    });

    
    screen.loop();
}
