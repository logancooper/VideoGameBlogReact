import { Link, useRouteMatch } from "react-router-dom";

const GamesList = (props) => {
    const {url} = useRouteMatch();
    const gamesList = props.games;

    return(
        <>
            <h1>This is the games list</h1>
            <nav>
                {gamesList.map((game) => (
                    <>
                        <Link to={`${url}/${game.slug}`}>{game.name}</Link>
                        <br />
                    </>
                ))}
            </nav>
        </>
    );
}

export default GamesList;