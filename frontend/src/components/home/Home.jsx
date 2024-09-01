import Left from "./leftpart/Left"
import Right from "./rightpart/Right"

function Home() {
  return (
    <div className="flex">
        <Left />
        <Right />
    </div>
  )
}

export default Home