import { PreviewComponent } from "./Components/PreviewComponent"

export const PreviewPage = ({id, changePage, statePage, setUserId}) => {

  return (
    <>
        <PreviewComponent id={id} changePage={changePage} statePage={statePage} setUserId={setUserId}/>
    </>
  )
}
