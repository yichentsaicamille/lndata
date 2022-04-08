import React from 'react';
import PlayerItem from '../components/PlayerItem';
import '../styles/playertable.css';

function PlayerTable() {
  return (
    <>
      <div className="container">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Team</th>
              <th scope="col">Name</th>
              <th scope="col">Games</th>
              <th scope="col">Points</th>
              <th scope="col">Rebounds</th>
              <th scope="col">Assists</th>
              <th scope="col">Steals</th>
              <th scope="col">Blocks</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            <PlayerItem />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PlayerTable;
