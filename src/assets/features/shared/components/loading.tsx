
interface LoadingProbs {
    isLoading: boolean;
}


    const loading = (probs: LoadingProbs) => {
  return (
    <div>{probs.isLoading ? <p>...loading</p> : <p>Loading finished</p>}</div>
  )
}


export default loading