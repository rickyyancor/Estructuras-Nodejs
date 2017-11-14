function node(valor)
{
  this.valor=valor;
}
function Cola(nodo)
{
  this.nodo=nodo;
  this.last=nodo;
  this.first=nodo;
}
Cola.prototype.push = function (nodo) {
  if(this.first==null)
  {
    this.nodo=nodo;
    this.last=nodo;
    this.first=nodo;
  }
  else {
  nodo.anterior=this.nodo;
  this.nodo.siguiente=nodo;
  this.nodo=nodo;
  this.last=this.nodo;
  }
};
Cola.prototype.pop = function () {
  try {
    var val=this.first.valor;
    if(this.first.siguiente!=null)
    this.first=this.first.siguiente;
    else {
      this.first=null;
    }
    return val;
  } catch (e) {
    console.log("La cola ya esta vacia papu");
  }

};
var Cola=new Cola(new node(3));
Cola.push(new node(2));
Cola.push(new node(32));
Cola.push(new node(232));
console.log(Cola.pop());
console.log(Cola.pop());
console.log(Cola.pop());
console.log(Cola.pop());
Cola.push(new node(21));
console.log(Cola.pop());
Cola.push(new node(21));
console.log(Cola.pop());
Cola.push(new node(21));
console.log(Cola.pop());
Cola.push(new node(21));
console.log(Cola.pop());
