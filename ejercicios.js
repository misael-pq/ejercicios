const z = 4.5;
const ej1_a = 0.4 * z**4 + 3.1 * z**2 - 162.3 * z - 80.7;
const ej1_b = (z**3 - 23) / Math.cbrt(z**2 + 17.5);
document.getElementById("resultado1").innerHTML = `
  (a) Resultado: ${ej1_a.toFixed(4)}<br>
  (b) Resultado: ${ej1_b.toFixed(4)}
`;

const t = 3.2;
const ej2_a = 0.5 * Math.exp(2 * t) - 3.81 * t**3;
const ej2_b = (6 * t**2 + 6 * t - 2) / (t**2 - 1);
document.getElementById("resultado2").innerHTML = `
  (a) Resultado: ${ej2_a.toFixed(4)}<br>
  (b) Resultado: ${ej2_b.toFixed(4)}
`;

const x = 6.5;
const y = 3.8;
const ej3_a = (x**2 + y**2) ** 1.5 + (x * y) / (y - x);
const ej3_b = Math.sqrt(x + y) / ((x - y) ** 2) + 2 * x**2 - x * y**2;
document.getElementById("resultado3").innerHTML = `
  (a) Resultado: ${ej3_a.toFixed(4)}<br>
  (b) Resultado: ${ej3_b.toFixed(4)}
`;

const c = 4.6;
const d = 1.7;
const a = c * d**2;
const b = (c + a) / (c - d);
const ct = c * t;
const ej4_a = Math.exp(d - b) + Math.cbrt(c + a) - (c * a) ** d;
const ej4_b = (d / c) + (ct / b)**2 - c**4 - (a / b);
document.getElementById("resultado4").innerHTML = `
  (a) Resultado: ${ej4_a.toFixed(4)}<br>
  (b) Resultado: ${ej4_b.toFixed(4)}
`;

const angle = Math.PI / 10;
const lhs_a = Math.cos(angle)**2 - Math.sin(angle)**2;
const rhs_a = 1 - 2 * Math.sin(angle)**2;

const lhs_b = Math.tan(angle) / (Math.sin(angle) - 2 * Math.tan(angle));
const rhs_b = 1 / (Math.cos(angle) - 2);

document.getElementById("resultado5").innerHTML = `
  (a) Lado Izquierdo: ${lhs_a.toFixed(4)}<br>
  (a) Lado Derecho: ${rhs_a.toFixed(4)}<br>
  ${Math.abs(lhs_a - rhs_a) < 0.001 ? '✅ Identidad verificada' : '❌ No se cumple'}<br><br>

  (b) Lado Izquierdo: ${lhs_b.toFixed(4)}<br>
  (b) Lado Derecho: ${rhs_b.toFixed(4)}<br>
  ${Math.abs(lhs_b - rhs_b) < 0.001 ? '✅ Identidad verificada' : '❌ No se cumple'}
`;
