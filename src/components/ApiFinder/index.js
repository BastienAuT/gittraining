import axios from "axios";

import { Route, Switch } from "react-router-dom";

import { Segment } from "semantic-ui-react";

import { useState } from "react";

// == Import
import Logo from "../Logo";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Message from "../Message";
import ReposResults from "../ReposResults";
import Faq from "../Faq";
import LoadMore from "../LoadMore";

import { simplifyRepos } from "../../utils/repos";

import reposData from "../../data/repo";

import "./styles.scss";

const ApiFinder = () => {
  const [searchValue, setSearchValue] = useState("");

  const [message, setMessage] = useState(
    "Utilisez notre App pour trouver des repos Github"
  );
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isShownMessage, setIsShownMessage] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState(null);

  const [page, setPage] = useState(null);

  const [nbResults, setNbResults] = useState(0);

  const displayMessage = (messageText, isError = false) => {
    setMessage(messageText);
    setIsErrorMessage(isError);
    setIsShownMessage(true);
  };

  const [repos, setRepos] = useState([]);

  const search = () => {
    setIsLoading(true);

    setQuery(searchValue);

    setPage(1);

    setNbResults(0);

    axios
      .get("https://api.github.com/search/repositories", {
        params: {
          q: searchValue,
          sort: "stars",
          order: "desc",
          page: 1,
          per_page: 9,
        },
      })
      .then((response) => {
        const reposFromApi = response.data.items;

        const nbResultsFromApi = response.data.total_count;

        setNbResults(nbResultsFromApi);

        const formatedReposFromApi = simplifyRepos(reposFromApi);

        setRepos(formatedReposFromApi);

        setSearchValue("");

        displayMessage(`La recherche a retourné ${nbResultsFromApi} résultats`);

        setIsLoading(false);
      })
      .catch(() => {
        displayMessage("Une erreur est survenue...", true);

        setRepos([]);
        setQuery(null);
        setPage(null);
        setNbResults(0);

        setIsLoading(false);
      });
  };

  const searchMore = () => {
    setIsLoading(true);

    const newPage = page + 1;

    setPage(newPage);

    axios
      .get("https://api.github.com/search/repositories", {
        params: {
          q: query,
          sort: "stars",
          order: "desc",
          page: newPage,
          per_page: 9,
        },
      })
      .then((response) => {
        const reposFromApi = response.data.items;

        const formatedReposFromApi = simplifyRepos(reposFromApi);

        const newRepos = [...repos, ...formatedReposFromApi];

        setRepos(newRepos);

        setIsLoading(false);
      })
      .catch(() => {
        displayMessage("Une erreur est survenue...", true);

        setRepos([]);
        setQuery(null);
        setPage(null);
        setNbResults(0);

        setIsLoading(false);
      });
  };

  return (
    <div className="api-finder">
      <Logo />
      <NavBar />

      <Switch>
        <Route path="/faq" exact>
          <Faq />
        </Route>

        <Route path="/" exact>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            search={search}
            isLoading={isLoading}
          />
          {isShownMessage && (
            <Message
              message={message}
              isErrorMessage={isErrorMessage}
              setIsShownMessage={setIsShownMessage}
            />
          )}
          <ReposResults repos={repos} />
          {!isLoading && repos.length > 0 && repos.length < nbResults && (
            <LoadMore searchMore={searchMore} />
          )}
        </Route>

        <Route>
          <Segment>
            <p>Page not Found</p>
          </Segment>
        </Route>
      </Switch>
    </div>
  );
};

export default ApiFinder;
