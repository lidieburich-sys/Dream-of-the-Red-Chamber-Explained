// 周易课程页面：夜间模式与回到顶部（与红楼梦页面共用夜间模式设置）
(function(){
  const get=(k,d)=>{ try{ const v=localStorage.getItem(k); return v===null?d:JSON.parse(v);}catch(e){return d;} };
  const set=(k,v)=>{ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} };
  const b=document.getElementById("bDark");
  const apply=d=>{ document.body.classList.toggle("dark",d); if(b) b.textContent=d?"☀":"☾"; };
  apply(get("hlm-dark",false));
  if(b) b.onclick=()=>{ const d=!document.body.classList.contains("dark"); apply(d); set("hlm-dark",d); };
  const t=document.getElementById("totop");
  if(t){ window.addEventListener("scroll",()=>{ t.style.display=window.scrollY>600?"block":"none"; }); t.onclick=()=>window.scrollTo(0,0); }
})();
