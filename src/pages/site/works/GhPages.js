import React from 'react';
import { tabTitle } from '../../../GeneralFunctions';
import DB from '../../../db.json';

const GhPages = () => {
  const items = DB.gh_pages;
  const pageTitle = "Github Pages";
  tabTitle(pageTitle);

  console.log(items);
  return (
    <div>
      <h1 className='page-title'>{pageTitle}</h1>
      {items.map(({id, title, link, desp }) => (
        <div className="card" key={id}>
          <h2>{title}</h2>
          <p>Link: <a href={link} target='_blank' rel='noreferrer'>{link}</a></p>
          <p>Description: {desp}</p>
        </div>
      ))}
    </div>
  )
}

export default GhPages;