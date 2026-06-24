import {ReactionsDropDown} from "./dropdown.tsx";
import { CreateDropDown } from "./createdrop.tsx";
import { AdvertiseDropDown } from "./addrop.tsx";
export function Nav(){
    return (
    <div className='nav'>
      <div className='indNav' id="reactions">
        <img src="/src/assets/happiness.png" />
        <button className='navBtn'>Reactions</button>
        <ReactionsDropDown></ReactionsDropDown>
      </div>
      <div className='indNav'>
        <img src="/src/assets/favourite.png" alt="" />
        <button className='navBtn'>Favourites</button>
      </div>
      <div className='indNav' id="create">
        <img src="/src/assets/add-button.png" alt="" />
        <button className='navBtn'>Create</button>
        <CreateDropDown></CreateDropDown>
      </div>
      <div className='indNav' id="ad">
        <img src="/src/assets/megaphone.png" alt="" />
        <button className='navBtn'>Advertise</button>
        <AdvertiseDropDown></AdvertiseDropDown>
      </div>
      <div className='indNav'>
        <img src="/src/assets/user.png" alt="" />
        <button className='navBtn'>My Channel</button>
      </div>
      <div className='indNav'>
        <img src="/src/assets/application.png" alt="" />
        <button className='navBtn'>More</button>
      </div>
    </div>
    )
}