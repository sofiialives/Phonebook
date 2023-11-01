import { Loading } from 'components/Loading';
import css from './Error.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/contacts/selectors';

const Error = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.div}>
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <h1 className={css.title}>THE PAGE NOT FOUND 404</h1>
    </div>
  );
};

export default Error;
