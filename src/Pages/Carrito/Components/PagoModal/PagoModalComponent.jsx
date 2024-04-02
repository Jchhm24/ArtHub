export const PagoModalComponent = ({modalState, closeModal}) => {
  return (
    <>
        <div className="h-screen w-full -translate-y-[60PX] bg-black/70 absolute z-20 backdrop-blur  inset-0"></div>
        <dialog open={modalState}
        className="absolute inset-0 z-30">
            <h1>
                Pago
            </h1>
            <button onClick={closeModal}>
                Cerrar
            </button>
        </dialog>
    </>
  )
}
