import React from 'react';

import { Hyperlink, Heading } from '../../index';

const TopTracks = ({ tracks }: any) => (
  <div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray">
      {tracks.items.map((element: any, index: number) => (
        <tr key={index} className="border-b-0.8 border-solid border-charleston last:border-none">
          <th scope="row" className="w-fit font-semibold font-serif text-gray whitespace-nowrap">
            {index + 1}
          </th>
          <td className="py-4 px-6">
            <Hyperlink
              href={element.external_urls.spotify}
              target="_blank"
              variant="wrapped"
              className="text-white hover:text-primary transition-all ease-out delay-75 duration-250"
            >
              <Heading variant="h6">{element.name}</Heading>
            </Hyperlink>
            <span>{element.artists[0].name}</span>
          </td>
        </tr>
      ))}
    </table>
  </div>
);

export default TopTracks;
