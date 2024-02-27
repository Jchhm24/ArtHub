import { PreviewComponent } from "./Components/PreviewComponent"

export const PreviewPage = ({id, changePage}) => {

  return (
    <>
        <PreviewComponent id={id} changePage={changePage}/>
    </>
  )
}
