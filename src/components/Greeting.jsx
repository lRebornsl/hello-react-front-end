import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/Greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingSlice.greeting.greeting);

  useEffect(() => {
      dispatch(getGreeting());
  }, [dispatch]);

  return (
      <div>
          <h1>{greeting}</h1>
      </div>
  );
}

export default Greeting