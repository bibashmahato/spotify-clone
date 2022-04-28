import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  const [{ rapcaviar }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
       <Header spotify={spotify} />

       <div className="body__info">
         <img src={rapcaviar?.image[0].url} alt="" />
         <div className="body__infoText">
         <strong>PLAYLIST</strong>
         <h2>Discover Weekly</h2>
         <p>{rapcaviar?.description}</p>
         </div>
       </div>
       <div className="body__songs">
         <div className="body__icons">
         <PlayCircleFilledIcon className="body__shuffle" />
         <FavoriteIcon fontSize="large" />
         <MoreHorizIcon />

         </div>
         
         {rapcaviar?.tracks.items.map(item =>(
           <SongRow track={item.track} />
         ))}
       </div>
    </div>
  );
}

export default Body;