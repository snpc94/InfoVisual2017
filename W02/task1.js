Vec3 = function(x,y,z)
{
   this.x = x;
   this.y = y;
   this.z = z;
}

Vec3.prototype.min = function()
{
   var min = this.x;
   if(min>=this.y){min = this.y;}  
   if(min>=this.z){min = this.z;}
   return min;
}
Vec3.prototype.max = function()
{
   var max = this.x;
   if(max<=this.y){max = this.y;}  
   if(max<=this.z){max = this.z;}
   return max;
}
Vec3.prototype.mid = function()
{
   return (this.x+this.y+this.z)-(this.max()+this.min())
} 
