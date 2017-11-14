function node(valor)
{
  this.valor=valor;
}
function Pila(nodo)
{
  this.nodo=nodo;
  this.last=nodo;
}
Pila.prototype.push = function (nodo) {
  nodo.anterior=this.nodo;
  this.nodo=nodo;
  this.last=this.nodo;
};
Pila.prototype.pop = function () {
  try {
    var val=this.last.valor;
    if(this.last.anterior!=null)
    this.last=this.last.anterior;
    else {
      this.last=null;
    }
    return val;
  } catch (e) {
    console.log("La pila ya esta vacia papu");
  }
  

};
var pila=new Pila(new node(3));
pila.push(new node(2));
pila.push(new node(21));
pila.push(new node(32));
pila.push(new node(232));
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
