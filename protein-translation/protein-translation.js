let codonsMap = new Map([
  ['AUG','Methionine'],
  ['UUU','Phenylalanine'],
  ['UUC','Phenylalanine'],
  ['UUA','Leucine'],
  ['UUG','Leucine'],
  ['UCU','Serine'],
  ['UCC','Serine'],
  ['UCA','Serine'],
  ['UCG','Serine'],
  ['UAU','Tyrosine'],
  ['UAC','Tyrosine'],
  ['UGU','Cysteine'],
  ['UGC','Cysteine'],
  ['UGG','Tryptophan'],
  ['UAA','STOP'],
  ['UAG','STOP'],
  ['UGA','STOP']
]);

function splitIntoCodons(string = '') {
  let codons = [];
  let index = 0;
  while (index < string.length) {
    codons.push(string.substring(index, index + 3));
    index = index + 3;
  }
  return codons;
}

function validates(codon) {
  if (!codonsMap.has(codon)) throw new Error('Invalid codon');
}

function stop(codon) {
  return codonsMap.get(codon) == "STOP"
}

export function translate(string = '') {
  let aminoAcids = [];
  for (let codon of splitIntoCodons(string)){
    validates(codon);
    if (stop(codon))
      break
    else
      aminoAcids.push(codonsMap.get(codon));
  }
  return aminoAcids;
}
