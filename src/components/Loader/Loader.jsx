import { Circles } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export function Loader() {
  return (
    <Wrapper>
      <Circles
      height="80"
      width="80"
      color="red"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Wrapper>
    
  );
}