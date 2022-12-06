import React, { useState } from 'react';
import { BroadcastIcon } from '@iconicicons/react';

/* Ui Components */
import { Button, Paragraph, Heading } from '../ui';

/* Page Components */
import Container from '../Container';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleClick = () => {};

  return (
    <Container id="newsletter">
      <form className="w-full px-4 py-3 my-6 box-border bg-transport border-0.8 border-solid border-charleston border-opacity-80 rounded-sm hover:border-opacity-90 transition ease-in-out delay-80 duration-275 drop-shadow-lg">
        <div className="flex space-x-1">
          <Heading variant="h5" className="sans font-bold text-ts">
            Subscribe to the newsletter
          </Heading>
          <span className="text-whiter fill-whiter opacity-70 hover:text-primary hover:fill-primary transition ease-in-out delay-75 duration-250">
            <BroadcastIcon width={16} height={16} />
          </span>
        </div>
        <Paragraph className="text-gray text-ts font-sans font-medium mt-1 mb-2">
          Get emails from me about web development, tech, and early access to new articles.
        </Paragraph>
        <div className="relative">
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
            className="block text-ts lg:text-base xl:text-base pl-3 w-full h-10 text-whiter bg-transparent rounded-th border-0.8 border-solid border-charleston focus:ring-primary focus:border-primary"
            placeholder="timcook@apple.com"
            required
          />
          <Button
            variant="secondary"
            type="submit"
            onClick={handleClick}
            className="absolute right-1 top-1 py-0.8 px-1 lg:px-3 xl:px-3 text-ts lg:text-base xl:text-base m-auto h-fit"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Newsletter;
