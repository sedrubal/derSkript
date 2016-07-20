var derKeyWorte = {
  'die ': 'der ',
  'des ': 'der ',
  'das ': 'der ',
  'zum ': 'zu der ',
  'zur ': 'zu der ',
  'ein ': 'der ',
  'eine ': 'der ',
  'eines ': 'der ',
  'einer ': 'der ',
  'einem ': 'der ',
  'einen ': 'der ',
  'den ': 'der ',
  'dem ': 'der ',
  'am ': 'an der ',
  'ihre ': 'der ',
  'ihren ': 'der ',
  'ihrer ': 'der ',
  'ihres ': 'der ',
  'im ': 'in der ',
  'ins ': 'in der ',
  'diese ': 'der ',
  'dieser ': 'der ',
  'dieses ': 'der ',
  'diesen ': 'dem ',
  'diesem ': 'dem ',
  'für (?!der)': 'für der ',
  'aufs ': 'auf der',
  'computer': 'kombjudoor',
  'Auto': 'Autowagen',
  'handy': 'handymobil',
  '!': '! yipyipyip!'
}

/* der Text Knoten zurueckbekommen */
function getAllTextNodes(){
  var result = [];

  (function scanSubTree(node){
    if(node.childNodes.length) 
      for(var i = 0; i < node.childNodes.length; i++) 
        scanSubTree(node.childNodes[i]);
    else if(node.nodeType == Node.TEXT_NODE) 
      result.push(node);
  })(document);

  return result;
}

/* escape der regexp */
function quote(str){
  return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}

/* der ersten Buchstaben groß machen */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* der Funktion */
function derFunktion() {
  getAllTextNodes().forEach(function(node){
    for (var der in derKeyWorte) {
      if (derKeyWorte.hasOwnProperty(der)) {
        var derKapott = derKeyWorte[der];
        node.nodeValue = node.nodeValue.replace(new RegExp(quote(' '+der), 'g'), ' '+derKapott);
        node.nodeValue = node.nodeValue.replace(new RegExp(capitalize(quote(der)), 'g'), capitalize(derKapott));
      }
    }
  });
}

derFunktion();
