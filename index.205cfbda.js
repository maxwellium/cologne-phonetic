const t=[[/ä/g,"a"],[/ö/g,"o"],[/ü/g,"u"],[/ß/g,"8"],[/[^a-z]/g,""],[/[dt](?![csz])/g,"2"],[/[dt](?=[csz])/g,"8"],[/[ckq]x/g,"88"],[/[sz]c/g,"88"],[/^c(?=[ahkloqrux])/,"4"],[/^c/,"8"],[/c(?=[ahkoqux])/,"4"],[/c$/,"4"],[/x/g,"48"],[/p(?!h)/g,"1"],[/p(?=h)/g,"3"],[/h/g,""],[/[aeijouy]/g,"0"],[/b/g,"1"],[/[fvw]/g,"3"],[/[gkq]/g,"4"],[/l/g,"5"],[/[mn]/g,"6"],[/r/g,"7"],[/[csz]/g,"8"],[/([^\w\s])|(.)(?=\2)/g,""],[/\B0/g,""]],g=g=>t.reduce((t,[g,e])=>t.replace(g,e),g.toLowerCase()),e=document.getElementById("input"),n=document.getElementById("output");function u(){let t=e.value.split("\n");e.setAttribute("rows",String(t.length)),n.setAttribute("rows",String(t.length)),n.value=t.map(g).join("\n")}e.addEventListener("input",u),u();
//# sourceMappingURL=index.205cfbda.js.map
