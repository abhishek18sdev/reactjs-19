import UseContext, { Child } from "../../hooks/UseContext"
import UseEffect from "../../hooks/UseEffect"
import UseReducer from "../../hooks/UseReducer"
import UseState from "../../hooks/UseState"

export const MainLayout = () => {
  return (
    <div>
        <UseState/>
        <UseEffect/>
        <UseReducer/>
        <UseContext  children={<Child/>}/>
    </div>
  )
}

