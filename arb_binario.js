function node(valor)
{
  this.valor=valor;
  this.izq=null;
  this.der=null;
}
function Arbol_Binario()
{
  this.raiz=null;
}
Arbol_Binario.prototype.insertar = function (nodo, valor) {
  if(this.raiz==null)
    {
      this.raiz=new node(valor);
      return this.raiz;
    }
    else
    {
      if(nodo==null)
      {
        return new node(valor);
      }
      else
      {
        if(valor>nodo.valor)
        {
          nodo.der=this.insertar(nodo.der,valor);
        }
        else if(valor<nodo.valor)
        {
          nodo.izq=this.insertar(nodo.izq,valor);
        }
        return nodo;
      }
    }
};
Arbol_Binario.prototype.eliminar= function (nodo, valor){
  if(nodo==null)
  {
    console.log("No existe el valor en el arbol");
    return node;
  }
  else
  {
    if(valor<nodo.valor)
    {
      nodo.izq=this.eliminar(nodo.izq,valor);
    }
    else if(valor>nodo.valor)
    {
      nodo.der=this.eliminar(nodo.der,valor);
    }
    else
    {
      var nodde=nodo.der;
      if(nodde!=null)
      {
        var c=0;
        while(nodde.izq!=null){
          nodde=nodde.izq;
          c++;
        }
        nodo.der.izq=nodde.der;
        nodde.izq=nodo.izq;
        if(c>0)
        nodde.der=nodo.der;
        return nodde;
      }
      else
      {
        return nodo.izq;
      }

    }
    return nodo;
  }


};
var arbol=new Arbol_Binario();
arbol.insertar(arbol.raiz,5);
arbol.insertar(arbol.raiz,3);

arbol.insertar(arbol.raiz,98);
arbol.insertar(arbol.raiz,67);
arbol.insertar(arbol.raiz,44);
arbol.insertar(arbol.raiz,22);
arbol.insertar(arbol.raiz,355);
arbol.insertar(arbol.raiz,6);
arbol.insertar(arbol.raiz,100);
arbol.insertar(arbol.raiz,375);
arbol.insertar(arbol.raiz,377);

arbol.eliminar(arbol.raiz,355);
console.log(arbol.raiz.der);
