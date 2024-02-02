import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, ReduxState } from './types'
import { fetchDogImage } from './rudux/actions';
import './App.css'

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();
  
  if (rootState.isFetching) return <p>Loading...</p>;

  return (
    <div>
      <button
      onClick={ () => { dispatch(fetchDogImage()) } }
      >
        New Pup
      </button>
      
      {
        rootState.imageUrl
        && <img
          style={ {width: '350px'} }
          src={rootState.imageUrl}
          alt='Image of a random dog'
        />
      }
    </div>
  )
}

export default App
