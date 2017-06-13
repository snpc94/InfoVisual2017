function showValue(){
    document.getElementById("showarea").innerHTML = document.getElementById("isovalue").value;
}


function changeIsovalue(){

    screen.scene.remove(surfaces);
    surfaces.geometry.dispose();
    surfaces.material.dispose();

    isovalue = document.getElementById("isovalue").value*255.0;//change new isovalue

    surfaces = Isosurfaces( volume, isovalue, screen.light.position, screen.camera.position, vert, frag);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();

}

function changeLambertianReflection(){

    screen.scene.remove(surfaces);
    surfaces.geometry.dispose();
    surfaces.material.dispose();

    var vert = 'lambert.vert';
    var frag = 'lambert.frag';

    surfaces = Isosurfaces( volume, isovalue, screen.light.position, screen.camera.position, vert, frag);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();

}

function changePhongReflection(){

    screen.scene.remove(surfaces);
    surfaces.geometry.dispose();
    surfaces.material.dispose();

    var vert = 'phong_r.vert';
    var frag = 'phong_r.frag';

    surfaces = Isosurfaces( volume, isovalue, screen.light.position, screen.camera.position, vert, frag);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}

function changeGouraudShading(){

    screen.scene.remove(surfaces);
    surfaces.geometry.dispose();
    surfaces.material.dispose();

    var vert = 'gouraud.vert';
    var frag = 'gouraud.frag';

    surfaces = Isosurfaces( volume, isovalue, screen.light.position, screen.camera.position, vert, frag);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();

}

function changePhoneShading(){

    screen.scene.remove(surfaces);
    surfaces.geometry.dispose();
    surfaces.material.dispose();

    var vert = 'phong_s.vert';
    var frag = 'phong_s.frag';

    surfaces = Isosurfaces( volume, isovalue, screen.light.position, screen.camera.position, vert, frag);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}

function main()
{
    volume = new KVS.LobsterData();
    screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    //document.write(document.getElementById('isovalue'));
    //document.write(isovalue);

    isovalue = 128;
    vert = 'phong_r.vert';
    frag = 'phong_r.frag';

    surfaces = Isosurfaces( volume, isovalue, screen.light.position, screen.camera.position, vert, frag );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}
