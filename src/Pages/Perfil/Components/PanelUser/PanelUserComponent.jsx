import { useEffect } from "react"

export const PanelUserComponent = ({changeSection, userData}) => {

    useEffect(() => {
    },[userData])

    return (
      <div className="flex justify-center h-min max-md:w-full max-md:my-[30px]">
          <div className="bg-nile-blue-950 flex flex-col max-md:flex-row p-5 rounded-[14px] w-max max-md:gap-[120px]">
              <div className="flex flex-col max-md:flex-row items-start">
                  <div className=" relative h-[140px] w-[140px]">
                      <img src={userData.fotoPerfil} alt="" 
                      className="w-full h-full rounded-full"/>
                  </div>
                  <div className="flex flex-row p-[18px]">
                      <svg className="h-max w-max fill-yellow-orange-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/></svg>
                      <h2 className="font-Red-Hat-Display text-xl text-yellow-orange-300">
                        {userData.username}
                      </h2>
                  </div>
              </div>

              <button onClick={() => changeSection('editar')} className="flex flex-row rounded-lg bg-yellow-orange-300 h-min p-2 
                  text-vulcan-950 font-Comfortaa font-medium text-base hover:bg-yellow-orange-400">
                  <svg className="fill-vulcan-950" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z"/></svg>
                  Editar perfil
              </button>
          </div>
      </div>
    )
}
