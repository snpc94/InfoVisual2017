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
	[1,0,3],
	[1,3,2],
	[5,1,2],
	[5,2,6],
	[4,5,6],
	[4,6,7],
	[0,4,7],
	[0,7,3],
	[4,0,1],
	[4,1,5],
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
    material.side = THREE.DoubleSide;
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
        triangle.rotation.x += 0.001;
        triangle.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
