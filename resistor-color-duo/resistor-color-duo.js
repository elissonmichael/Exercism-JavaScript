const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export function value(colors) {
  return Number(colors.map(color => COLORS.indexOf(color)).join(''));
}
