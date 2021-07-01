import { Link } from "react-router-dom"

export const Page2 = () => {
    return (
        <div>
            <h1>Page2</h1>
            <Link to="/page2/1003">URL Pramerter</Link>
            <h1>QueryPage</h1>
            <Link to="/page2/100?name=hogehoge">URL Pramerter</Link>
        </div>
    )
}
