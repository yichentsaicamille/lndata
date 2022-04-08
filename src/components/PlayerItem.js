import React from 'react';
import { MdPersonSearch } from 'react-icons/md';

function PlayerItem() {
  return (
    <>
      <tr>
        <td scope="row">Minnesota Timberwolves</td>
        <td>Aaron Brooks</td>
        <td>23</td>
        <td>2.3</td>
        <td>0.6</td>
        <td>0.7</td>
        <td>0.2</td>
        <td>0.0</td>
        <td>
          <MdPersonSearch size={25} color="#17a8a2" className="icon" />
        </td>
      </tr>
    </>
  );
}

export default PlayerItem;
