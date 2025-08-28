
// interface LoadingProbs {
//     isLoading: boolean;
// }



const loading = ({ isLoading }: {isLoading: boolean}) => (
  <div>{isLoading ? <span>Loading...</span> : <h2>Fertig geladen</h2>}</div>
);


export default loading