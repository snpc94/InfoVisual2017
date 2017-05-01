
function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    /*
    var vertices=[[0,0,0],[1,0,0],
		  [1,1,0],[1,1,1],
		  [0,0,0],[0,0,0],
		  [0,0,0],[0,0,0]
		 ];
    
    for(i=0;i<8;i++){
	var v = new THREE.Vector3().fromArray(vertices[i]);
	}*/

    var vertices =[
	[-1,1,-1],//0
	[1,1,-1],//1
	[1,-1,-1],//2
	[-1,-1,-1],//3
	[-1,1,1],//4
	[1,1,1],//5
	[1,-1,1],//6
	[-1,-1,1]//7
    ];

    var faces =[
	[1,3,0],
	[1,2,3],
	[5,2,1],
	[5,6,2],
	[4,6,5],
	[4,7,6],
	[0,7,4],
	[0,3,7],
	[4,1,0],
	[4,5,1],
	[7,3,2],
	[7,2,6]
    ];

    var v = [];
    
    for(var i=0;i<8;i++){
	v[i] = new THREE.Vector3().fromArray(vertices[i]);
    }

    var f = [];

    for(var i=0;i<12;i++){
	var id = faces[i];
	f[i] = new THREE.Face3(id[0],id[1],id[2]);
    }
    

    var geometry  = new THREE.Geometry();
    
    for(var i=0;i<8;i++){
	geometry.vertices.push(v[i]);	
    }

    for(var i=0;i<12;i++){
	geometry.faces.push(f[i]);
    }
    
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    //material.side = THREE.DoubleSide;
    
    geometry.faces[0].color = new THREE.Color(1,0,0);
    geometry.faces[1].color = new THREE.Color(0,1,0);

    geometry.faces[2].color = new THREE.Color(0,0,1);
    geometry.faces[3].color = new THREE.Color(1,1,0);
    geometry.faces[4].color = new THREE.Color(1,0,1);
    geometry.faces[5].color = new THREE.Color(0,1,1);
    geometry.faces[6].color = new THREE.Color(0.5,0,0);
    geometry.faces[7].color = new THREE.Color(0,0.5,0);
    geometry.faces[8].color = new THREE.Color(0,0,0.5);
    geometry.faces[9].color = new THREE.Color(0.5,0.5,0);
    geometry.faces[10].color = new THREE.Color(0.5,0,0.5);
    geometry.faces[11].color = new THREE.Color(0.75,0,0);
    
    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );

    loop();

    
    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.002;
        triangle.rotation.y += 0.004;
        renderer.render( scene, camera );
	document.addEventListener('mousedown',mouse_down_event);
    }


    function mouse_down_event(event)
    {
	var x_win = event.clientX;
	var y_win = event.clientY;

	var vx = renderer.domElement.offsetLeft;
	var vy = renderer.domElement.offsetTop;
	var vw = renderer.domElement.width;
	var vh = renderer.domElement.height;

	var x_NDC = 2 * (x_win - vx)/vw -1;
	var y_NDC = -(2 *(y_win - vy)/vh - 1);

	var p_NDC = new THREE.Vector3(x_NDC,y_NDC,1);
	var p_wld = p_NDC.unproject(camera);

	var origin = camera.position;
	var direction = p_wld.sub(camera.position).normalize();
	
	var raycaster = new THREE.Raycaster(origin,direction);
	var intersects = raycaster.intersectObject(triangle);
	if(intersects.length > 0){
	    intersects[0].face.color.setRGB(1,0,0);
	    intersects[0].object.geometry.colorsNeedUpdate = true;
	}
    }
}
