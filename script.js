var fimage;
var bimgae;
var oimage;
function upload(){
  var dd1=document.getElementById("d1");
  var imginput=document.getElementById("up");
  fimage=new SimpleImage(imginput);
  fimage.drawTo(dd1);
}
function bupload(){
  var dd2=document.getElementById("d2");
  var bimageinput=document.getElementById("bup");
  bimage=new SimpleImage(bimageinput);
  bimage.drawTo(dd2);
}
function composite(){
  oimage=new SimpleImage(fimage.getWidth(),fimage.getHeight());
  var dd3=document.getElementById("d3");
  for(var pix of fimage.values())
    {
      if(pix.getGreen()>pix.getRed()+pix.getBlue())
        {
          var pixel=bimage.getPixel(pix.getX(),pix.getY());
          oimage.setPixel(pix.getX(),pix.getY(),pixel);
        }
      else
        {
          oimage.setPixel(pix.getX(),pix.getY(),pix);
        }
    }
  oimage.drawTo(dd3);
}