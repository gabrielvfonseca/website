import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  tracks: {
    items: [];
  };
}

/* Ui Components */
import { Hyperlink, Heading, Toggle } from '../ui';

/* Page Components */
import Container from '../Container';

const TopTracks: React.FC<Props> = ({ tracks }: Props) => {
  const [many, setMany] = useState(true);

  return (
    <Container className="space-y-5">
      <Container className="flex w-full space-x-2 font-serif">
        <span className="text-sm opacity-70">View</span>
        <div className="flex w-full space-x-2">
          <span className="text-sm opacity-70">10</span>
          <Toggle initial={!many} onClick={() => setMany(!many)} />
          <span className="text-sm opacity-70">20</span>
        </div>
      </Container>

      <motion.table className="w-full inline-block text-sm text-left text-gray">
        {tracks.items.slice(0, many ? 10 : 20).map((element: any, index: number) => (
          <motion.tr key={index} className="w-full border-b-0.8 border-solid border-charleston last:border-none">
            <th scope="row" className="w-fit font-semibold font-serif text-gray whitespace-nowrap">
              {index + 1}
            </th>
            <td className="w-full py-4 px-6">
              <Hyperlink href={element.external_urls.spotify} target="_blank">
                <Heading
                  variant="h4"
                  className="font-sans text-white hover:text-primary transition-all ease-out delay-75 duration-250"
                >
                  {element.name}
                </Heading>
              </Hyperlink>
              <span>{element.artists[0].name}</span>
            </td>
          </motion.tr>
        ))}
      </motion.table>
    </Container>
  );
};

export default TopTracks;
