const form=document.getElementById("wa-form");
if(form){
  form.addEventListener("submit",function(e){
    e.preventDefault();
    const d=new FormData(e.currentTarget);
    const service=e.currentTarget.dataset.service||"";
    const text=[
      service?"New enquiry: "+service:"New website enquiry",
      "Name: "+String(d.get("name")||"").trim(),
      "Email: "+String(d.get("email")||"").trim(),
      "",
      String(d.get("message")||"").trim()
    ].join("\n");
    window.open("https://wa.me/918359922242?text="+encodeURIComponent(text),"_blank","noopener,noreferrer");
  });
}
document.querySelectorAll(".hero-figure video").forEach(function(v){
  v.muted=true;
  v.loop=true;
  v.autoplay=true;
  v.controls=false;
  v.setAttribute("playsinline","");
  v.setAttribute("webkit-playsinline","");
  function kick(){v.muted=true;v.play().catch(function(){});}
  kick();
  v.addEventListener("pause",kick);
  v.addEventListener("ended",kick);
  document.addEventListener("visibilitychange",function(){if(!document.hidden)kick();});
});
