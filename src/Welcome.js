export default function Welcome(props) {
  return <h1>Halo, {props.nama}</h1>
}

export function Welcome2(props) {
  return <p>Umur saya, {props.umur}</p>
}

export function Welcome3(props) {
  return <p>Saya seorang siswa SMK kelas, {props.kelas}</p>
}

// export dulu
/**
 * Note!
 * kalo export default, import nya kagak pake kurung kurawal
 * tapi kalo export nya g default, import nya harus pake kurung kurawal
 * 
 * import Welcome, { Welcome2 } from './Welcome.js'
 * 
**/

/**
 * Note!
 * export default hanya boleh export 1 function, class, dsb 
**/

// export default Welcome
// bisa export di bawah atau di samping function