import { useState } from "react"
import { PreviewComponent } from "./Components/PreviewComponent"

export const PreviewPage = ({id, changePage, statePage}) => {

  return (
    <>
        <PreviewComponent id={id} changePage={changePage} statePage={statePage}/>
    </>
  )
}
