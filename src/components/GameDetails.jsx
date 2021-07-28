import { useParams } from "react-router-dom";

const GameDetails = (props) => {
    const {gameSlug} = useParams();
    let game = null;
    props.games.forEach(g => {
        if(g.slug === gameSlug)
        {
            game = g;
        }
    });

    if(game != null)
    {
        return(
            <>
                <h1>
                    {game.name}
                </h1>
                <img src={game.backgroundimage} alt="listing" width="400"/>
                <p>
                    {game.description}
                </p>
                <a href={game.metacritic}>Check out this game on Metacritic</a>
            </>
        );
    }
    else
    {
        return(
            <>
                <h1>No Game Found</h1>
            </>
        );
    }
}
export default GameDetails;