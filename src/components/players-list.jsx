import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playerDeleted,
  playersFetched,
  playersFetching,
  playersFetchingError,
} from "../actions";
import { useHttp } from "../hooks/use-http";
import Empty from "./empty";
import Error from "./error";
import PlayersListItem from "./players-list-item";
import Spinner from "./spinner";

const PlayersList = () => {
  const filteredPlayers = useSelector((state) => {
    if (state.activeFilter === "All") {
      return state.players;
    } else {
      return state.players.filter(
        (player) => player.continent === state.activeFilter
      );
    }
  });
  const playersLoadingStatus = useSelector(
    (state) => state.playersLoadingStatus
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(playersFetching());

    request("http://localhost:8080/players")
      .then((data) => dispatch(playersFetched(data)))
      .catch(() => dispatch(playersFetchingError()));
  }, []);

  const onDelete = useCallback(
    (id) => {
      request(`http://localhost:8080/players/${id}`, "DELETE")
        .then((res) => console.log(res, "Successfully deleted"))
        .then(dispatch(playerDeleted(id)))
        .catch((e) => console.log(e));
    },
    [request]
  );

  if (playersLoadingStatus === "loading") {
    return <Spinner classNames={"w-8 h-8 block mx-auto text-white"} />;
  } else if (playersLoadingStatus === "error") {
    return <Error />;
  }

  const renderPlayers = () => {
    if (!filteredPlayers.length) {
      return <Empty />;
    }

    return filteredPlayers.map(({ id, ...props }) => (
      <PlayersListItem key={id} onDelete={() => onDelete(id)} {...props} />
    ));
  };

  return <div className="flex flex-col space-y-3">{renderPlayers()}</div>;
};

export default PlayersList;
