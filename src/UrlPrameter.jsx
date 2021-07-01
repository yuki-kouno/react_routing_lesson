import { useParams, useLocation } from "react-router-dom"


export const UrlPrameter = () => {
    const {id} = useParams()
    const { search } = useLocation()
    const query = new URLSearchParams(search)

    return (
        <div>
            <h1>UrlPrameter</h1>
            <p>パラメーターは{id}</p>
            <p>クエリパラメーターは{query.get("name")}</p>
        </div>
    )
}
