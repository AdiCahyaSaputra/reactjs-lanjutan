export default function Button(props) {
  // gk usah pake props baru, pake children aja yang udh ada dari react nya
  return <button className="btn">{props.children}</button>
}