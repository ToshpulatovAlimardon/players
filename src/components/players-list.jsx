import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
  const { players, playersLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(playersFetching());

    request("http://localhost:8080/players")
      .then((data) => dispatch(playersFetched(data)))
      .catch(() => dispatch(playersFetchingError()));
  }, []);

  if (playersLoadingStatus === "loading") {
    return <Spinner classNames={"w-8 h-8 block mx-auto text-white"} />;
  } else if (playersLoadingStatus === "error") {
    return <Error />;
  }

  const renderPlayers = () => {
    if (!players.length) {
      return <Empty />;
    }

    return players.map(({ id, ...props }) => (
      <PlayersListItem key={id} {...props} />
    ));
  };

  return <div className="flex flex-col space-y-3">{renderPlayers()}</div>;
};

export default PlayersList;
