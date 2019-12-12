import { createBrowserHistory, History } from 'history';

const history: History = createBrowserHistory();

export const getHistory = () => {
  return history;
};
