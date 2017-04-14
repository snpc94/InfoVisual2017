Vec3 = function(x,y,z)
{
   this.x = x;
   this.y = y;
   this.z = z;
}

Vec3.prototype.makevec = function(v)
{
   this.x -= v.x;
   this.y -= v.y;
   this.z -= v.z;
   return this;
}

Vec3.prototype.abs = function()
{
   return this.x*this.x+this.y*this.y+this.z*this.z
}

Vec3.prototype.innerprod = function(v)
{
   return this.x*v.x+this.y*v.y+this.z*v.z
}

function AreaOfTriangle(v0,v1,v2)
{
   var v01 = v1.makevec(v0); 
   var v02 = v2.makevec(v0);

   var v0101 = v1.abs();
   var v0202 = v2.abs();

   var v0102 = v1.innerprod(v2);
 
   return (Math.sqrt(v0101*v0202-v0102*v0102))/2.0
}
