function listasimple(nodo)
{
  this.nodo=nodo;
}
function node(valor)
{
  this.valor=valor;
}
node.prototype.getval = function () {
    return this.valor;
};
listasimple.prototype.setsiguiente = function (siguiente) {
    siguiente.anterior=this.nodo;
    this.nodo.siguiente=siguiente;
    this.siguiente();

};
listasimple.prototype.setanterior = function (anterior) {
    anterior.siguiente=this.nodo;
    this.nodo.anterior=anterior;
    this.anterior();
};
listasimple.prototype.siguiente = function () {
  if(this.nodo.siguiente!=null)
    this.nodo=this.nodo.siguiente;
  return this.nodo.valor;
};
listasimple.prototype.anterior = function () {
    if(this.nodo.anterior!=null)
      this.nodo=this.nodo.anterior;
    return this.nodo.valor;

};
var lista = new listasimple(new node(1));
lista.setsiguiente(new node(2));
lista.setsiguiente(new node(3));
lista.setsiguiente(new node(4));
while(lista.nodo.anterior!=null)
  {
    console.log(lista.nodo.getval());
    lista.anterior();
  }
  console.log(lista.nodo.getval());
while(lista.nodo.siguiente!=null)
  {
    console.log(lista.nodo.getval());
    lista.siguiente();
  }
